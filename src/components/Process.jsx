import SectionHeading from "./Heading";

const steps = [
  { title: "Discover", text: "We explore your vision, define the gameplay concept anf establish the creative direction." },
  { title: "Prototype", text: "We transform ideas into playable prototypes, testing mechanics and core experiences." },
  { title: "Produce", text: "We bring the game to life through immersive visuals, sound, design and development." },
  { title: "Playtest", text: "We test, refine and optimize gameplay to deliver a smooth and engaging experience." },
  { title: "Launch", text: "We prepare, release and deliver your game to the world." },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1280px] px-8 pt-28">
      <SectionHeading eyebrow="How we work" title="From idea to launch." />
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-[3px] border-accent pt-5">
            <p className="font-bold text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="my-2 text-xl font-bold">{s.title}</h3>
            <p className="leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
