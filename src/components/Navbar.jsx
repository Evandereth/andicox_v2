import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the menu is open; close on Esc or when resized to desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Smooth-scroll to a section (or top for "#"), closing the menu first
  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.body.style.overflow = ""; // unlock right away so the scroll can run
    const el = href === "#" ? null : document.querySelector(href);
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
    history.pushState(null, "", href === "#" ? window.location.pathname : href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <a href="#" onClick={(e) => go(e, "#")} aria-label="ANDICOX home">
            <Logo bar="#05051a" />
          </a>

          <nav className="hidden gap-9 text-[15px] font-medium text-muted md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="transition hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="btn hidden bg-white text-navy hover:brightness-110 md:inline-flex"
          >
            Start a project
          </a>

          <button
            className="flex flex-col gap-2 p-3 md:hidden cursor-pointer"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="block h-1 w-10 rounded bg-white" />
            <span className="block h-1 w-8 rounded bg-white" />
            <span className="block h-1 w-10 rounded bg-white" />
          </button>
        </div>
      </header>

      {/* Sibling of <header>, not a child: backdrop-blur would trap a fixed child inside the header */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-0 z-60 flex h-dvh flex-col overflow-hidden overscroll-none bg-ink bg-[radial-gradient(ellipse_70%_50%_at_85%_15%,rgba(108,77,255,0.45),transparent_70%)] transition-[translate,visibility] duration-500 ease-out md:hidden ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-5">
          <a href="#" onClick={(e) => go(e, "#")} aria-label="ANDICOX home">
            <Logo bar="#05051a" />
          </a>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="cursor-pointer">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-start gap-8 px-8 mt-10">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
              className={`font-display text-3xl font-extrabold uppercase transition-[translate,opacity] duration-500 hover:text-accent ${
                open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <span className="mr-4 text-sm text-accent">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="px-8 pb-10">
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="btn w-full justify-center bg-white text-navy"
          >
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
