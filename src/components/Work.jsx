import { useState } from "react";
import SectionHeading from "./Heading";

import image1 from "../img/image1.png"
import image2 from "../img/image2.png"

const filters = [
  { label: "All", test: () => true },
  { label: "Our games", test: (p) => p.kind === "game" },
  { label: "Client work", test: (p) => p.kind === "client" },
  { label: "PC", test: (p) => p.platforms.includes("PC") },
  { label: "Mobile", test: (p) => p.platforms.includes("Mobile") },
];


const projects = [
  {
    id: 1,
    title: "web masters",
    kind: "game",
    genre: "casual fun",
    year: "2024",
    platforms: ["Mobile"],
    summary: "Welcome to Web Masters, the ultimate casual mobile game that brings you an addictive and fun-filled swinging adventure! Swing through exciting obstacles, explore diverse characters, and experience the thrill of side-scrolling action at your fingertips.",
    playStore: "https://play.google.com/store/apps/details?id=com.andicox.web_masters",
    appStore: "https://apps.apple.com/us/app/web-masters/id1669928611",
    art: "bg-[radial-gradient(circle_at_30%_30%,#6c4dff,#14124a_55%,#05051a)]",
    image: image1
  },
  {
    id: 2,
    title: "ball crusher",
    kind: "game",
    genre: "casual fun",
    year: "2021",
    platforms: ["Mobile"],
    summary: "The ultimate mobile game for endless entertainment!, Crush all striped balls before they make it across the platform in this crazy-fast, endless 3D arcade game.",
    playStore: "https://play.google.com/store/apps/details?id=com.andicox.ball_crusher&hl=en&gl=US&pli=1",
    appStore: "https://apps.apple.com/us/app/ball-crusher/id1664964456",
    art: "bg-linear-to-br from-accent to-[#14124a]",
    image: image2

  },
  {
    id: 3,
    title: "[PROJECT 03 TITLE]",
    kind: "game",
    genre: "[GENRE]",
    year: "[YEAR]",
    platforms: ["Mobile"],
    summary: "i will add a short summary of the project here, just a few words to describe it.",
    playStore: "https://play.google.com/store/apps/details?id=YOUR.APP.ID",
    appStore: "https://apps.apple.com/app/idYOUR_APP_ID",
    art: "bg-linear-to-br from-[#ff4d8d] to-[#2a0b5a]",
    image: null
  },
  {
    id: 4,
    title: "[PROJECT 04 TITLE]",
    kind: "client",
    genre: "[GENRE]",
    year: "[YEAR]",
    platforms: ["Mobile", "PC"],
    summary: "i will add a short summary of the project here, just a few words to describe it.",
    playStore: "https://play.google.com/store/apps/details?id=YOUR.APP.ID",
    art: "bg-linear-to-br from-violet to-ink",
    image: null

  },
  {
    id: 5,
    title: "[PROJECT 05 TITLE]",
    kind: "game",
    genre: "[GENRE]",
    year: "[YEAR]",
    platforms: ["PC", "Mobile"],
    summary: "i will add a short summary of the project here, just a few words to describe it.",
    appStore: "https://apps.apple.com/app/idYOUR_APP_ID",
    art: "bg-linear-to-br from-[#ffb13d] to-[#3d1b0b]",
    image: null

  },
];

const tagBase = "inline-block border px-3 py-1.5 text-xs uppercase tracking-widest";

function KindTag({ kind }) {
  return kind === "game" ? (
    <span className={`${tagBase} border-accent text-accent`}>Our game</span>
  ) : (
    <span className={`${tagBase} border-[#ff4d8d] text-[#ff8fb5]`}>Client work</span>
  );
}

function Tags({ project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <KindTag kind={project.kind} />
      <span className={`${tagBase} border-[#38386e] text-[#c4c4e2]`}>{project.genre}</span>
      {project.engine && (
        <span className={`${tagBase} border-[#38386e] text-[#c4c4e2]`}>{project.engine}</span>
      )}
      {project.platforms.map((p) => (
        <span key={p} className={`${tagBase} border-[#38386e] text-[#c4c4e2]`}>{p}</span>
      ))}
    </div>
  );
}

function StoreLinks({ project }) {
  const stores = [
    { label: "Google Play", href: project.playStore },
    { label: "App Store", href: project.appStore },
  ].filter((s) => s.href);

  if (stores.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {stores.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get ${project.title} on ${s.label}`}
          className="inline-flex min-h-11 items-center gap-2 border border-white/70 px-4 text-sm font-bold uppercase tracking-wider transition hover:border-accent hover:text-accent"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
          </svg>
          {s.label}
        </a>
      ))}
    </div>
  );
}

const cardHover =
  "border border-line bg-panel transition hover:border-accent hover:shadow-[0_0_32px_rgba(56,225,255,0.18)]";

export default function Work() {
  const [active, setActive] = useState("All");
  const [selectedId, setSelectedId] = useState(1);

  const test = filters.find((f) => f.label === active).test;
  const visible = projects.filter(test);
  const selectedProject = visible.find((project) => project.id === selectedId);
  const listedProjects = selectedProject
    ? visible.filter((project) => project.id !== selectedId)
    : visible;

  return (
    <section id="work" className="mx-auto max-w-7xl px-8 pt-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="portfolio" title="Games & client work" className="" />
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setActive(f.label)}
              aria-pressed={active === f.label}
              className={`min-h-11 cursor-pointer border px-5 text-sm font-bold uppercase tracking-wider transition ${
                active === f.label
                  ? "border-white bg-white text-navy"
                  : "border-[#38386e] text-white hover:border-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-muted">No projects in this category yet.</p>
      ) : (
        <>
          {selectedProject && (
            <article className={`mb-6 grid overflow-hidden md:grid-cols-2 ${cardHover}`}>
              <div className={`min-h-80 md:min-h-110 ${selectedProject.art}`}>
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center gap-5 bg-[#0a0a26] p-8 md:p-12">
                <p className="eyebrow text-muted!">{selectedProject.year}</p>
                <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.75rem)] font-extrabold uppercase leading-[1.05]">
                  {selectedProject.title}
                </h3>
                <p className="text-lg leading-relaxed text-white/80">{selectedProject.summary}</p>
                <Tags project={selectedProject} />
                <StoreLinks project={selectedProject} />
              </div>
            </article>
          )}

          {listedProjects.length > 0 && (
            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {listedProjects.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  aria-pressed={selectedId === p.id}
                  className={`flex h-full w-full cursor-pointer flex-col overflow-hidden text-left ${cardHover}`}
                >
                  <div className={`h-60 w-full shrink-0 ${p.art}`}>
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="line-clamp-2 min-h-12 font-display text-xl font-extrabold uppercase leading-tight">{p.title}</h3>
                    <p className="line-clamp-3 min-h-18 text-muted">{p.summary}</p>
                    <div className="mt-auto">
                      <Tags project={p} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
