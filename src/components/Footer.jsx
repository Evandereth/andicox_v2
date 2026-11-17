import Logo from "./Logo";

const columns = [
  { title: "Work", links: [["WEB MASTERS", "#work"], ["BALL CRUSHER", "#work"], ["All projects", "#work"]] },
  { title: "Studio", links: [["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]] },
  // Put your real profile URLs here
  { title: "Connect", links: [["LinkedIn", "#"], ["YouTube", "#"], ["X", "#"]] },
];

export default function Footer() {
  return (
    <footer className="mx-auto grid max-w-[1280px] gap-10 px-8 pb-12 pt-16 text-[15px] text-muted sm:grid-cols-2 lg:grid-cols-5">
      <div className="flex flex-col gap-4">
        <a href="#" aria-label="ANDICOX home">
          <Logo size={34} bar="#05051a" className="[&>span]:text-lg" />
        </a>
      </div>

      {columns.map((col) => (
        <div key={col.title} className="grid content-start gap-3">
          <p className="font-bold text-white">{col.title}</p>
          {col.links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-accent">
              {label}
            </a>
          ))}
        </div>
      ))}

      <p className="sm:col-span-2 lg:col-span-1">© {new Date().getFullYear()} ANDICOX. All rights reserved.</p>
    </footer>
  );
}
