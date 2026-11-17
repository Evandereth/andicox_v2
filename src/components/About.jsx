import SectionHeading from "./Heading";

// Edit these. Put your photo in /public (e.g. /public/founder.jpg) and set photo: "/founder.jpg"
const founder = {
  name: "Segun Coker",
  role: "Founder & Game developer",
  photo: "",
};



// Fill in the facts only you know
const facts = [
  ["Founded", "2018"],
  ["Based in", "Lagos, Nigeria"],
  ["Built with", "[ENGINES]"],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-8 pt-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
        {/* Founder card */}
        <div className="brk h-fit border border-line bg-panel">
          {founder.photo ? (
            <img
              src={founder.photo}
              alt={founder.name}
              className="aspect-[4/5] w-full object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex aspect-[4/5] items-center justify-center bg-[radial-gradient(circle_at_30%_25%,#6c4dff,#14124a_55%,#05051a)]"
            >
              <span className="font-display text-[8rem] font-extrabold text-white/20">
                {founder.name[0]}
              </span>
            </div>
          )}
          <div className="p-5">
            <p className="text-lg font-bold">{founder.name}</p>
            <p className="mt-1 text-muted">{founder.role}</p>
          </div>
        </div>

        {/* Story */}
        <div>
          <SectionHeading
            eyebrow="About ANDICOX"
            title="One founder. Full game dev."
            className="mb-8"
          />

          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              At Andicox Studio, we are a dynamic team of visionaries, artists, and technologists dedicated to creating innovative and engaging experiences for players of all ages. Since our inception in 2018, we have been on a mission to redefine gaming, blending art and technology to craft worlds that inspire and connect.
            </p>
            <p>
              Some of the work is ANDICOX's own games, where I get to experiment and push the
              craft. The rest is client projects, where those experiments get tested against real
              briefs, deadlines and players. Each side makes the other better.
            </p>
            <p>
              Whether you are an adventurer seeking thrilling escapades or a casual gamer looking for relaxing fun, Andicox Studio is here to bring your imagination to life. Join us as we continue to push the boundaries of what’s possible in gaming, building experiences that transcend the ordinary.
            </p>
          </div>

          

          <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="eyebrow !text-muted">{label}</dt>
                <dd className="mt-1 text-lg font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
