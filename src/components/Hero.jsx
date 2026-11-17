import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="hero-bg relative -mt-21.25 flex min-h-195 items-center overflow-hidden pt-21.25">
      {/* Giant glowing logo mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-1/2 w-[min(600px,70vw)] translate-y-[-46%] opacity-50 drop-shadow-[0_0_48px_rgba(108,77,255,0.9)]"
      >
        <Logo size={500} showName={false} bar="#05051a" strokeWidth={0.7} className="w-full" svgClassName="h-auto w-full" />
      </div>

      {/* HUD chips (desktop only) */}
      <div className="absolute right-[24%] top-[20%] hidden border border-violet bg-panel/85 px-5 py-3.5 text-sm font-bold uppercase tracking-widest md:block">
        [00] games shipped
      </div>
      <div className="absolute bottom-[14%] right-[9%] hidden items-center gap-3 border border-accent bg-panel/85 px-5 py-3.5 text-sm font-bold uppercase tracking-widest md:flex">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        Available for projects
      </div>

    
      <div className="relative mx-auto w-full max-w-7xl p-5">
        <p className="eyebrow mb-6 animate-fade-up">Experience the Future of Gaming with Andicox</p>

        <h1
          className="animate-fade-up font-display text-[clamp(3rem,9vw,8.5rem)] font-extrabold uppercase leading-[0.94] tracking-tight"
          style={{ animationDelay: "120ms" }}
        >
          We build games
          <br />
          <span className="text-outline">players obsess over.</span>
        </h1>

        <p
          className="my-8 max-w-200 animate-fade-up text-xl leading-relaxed text-white/80"
          style={{ animationDelay: "240ms" }}
        >
          We make our own games and build for clients. Crafting tomorrow's Gaming experience today. One Game at a time.
        </p>

        <div className="flex animate-fade-up flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
          <a href="#work" className="btn bg-white text-navy hover:brightness-110">
            View our work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#contact" className="btn text-white shadow-[inset_0_0_0_2px_#fff] hover:bg-white/10">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
