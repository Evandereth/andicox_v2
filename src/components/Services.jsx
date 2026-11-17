import SectionHeading from "./Heading";

const services = [
  { title: "Game design", text: "Delivering exceptional craftsmanship in every aspect ensuring smooth, visually stunning, and highly polished games" },
  { title: "Art & animation", text: "Creating immersive and enjoyable gameplay experiences ensuring every player feels engaged and satisfied." },
  { title: "Engineering", text: "We aim to surprise and delight players with innovative ideas, breathtaking visuals, and unforgettable moments" },
  { title: "Porting & live ops", text: "Leveraging cutting-edge technology to push boundaries, ensuring optimal performance and unmatched innovation across platforms" },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1280px] px-8 pt-28">
      <SectionHeading eyebrow="What we do" title="Full-stack game dev." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="border border-line bg-panel p-8 transition hover:border-accent hover:shadow-[0_0_32px_rgba(56,225,255,0.18)]"
          >
            <p className="font-display text-4xl font-extrabold text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-2 mt-4 text-[22px] font-bold">{s.title}</h3>
            <p className="leading-relaxed text-muted">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
