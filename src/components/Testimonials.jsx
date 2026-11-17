export default function Testimonial() {
  return (
    <section className="mx-auto max-w-[1280px] px-8 pt-28">
      <figure className="brk border border-line bg-linear-to-br from-[#14124a] to-[#0a0a26] p-8 md:p-16">
        <blockquote className="max-w-4xl font-display text-[clamp(1.25rem,2.6vw,2.25rem)] font-extrabold leading-snug">
          “[CLIENT TESTIMONIAL: ONE OR TWO SENTENCES ON WORKING WITH ANDICOX.]”
        </blockquote>
        <figcaption className="mt-7 text-muted">[NAME], [ROLE] · [CLIENT STUDIO]</figcaption>
      </figure>

      {/* Client logos: replace each text with an <img> */}
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n} className="border border-line bg-panel p-7 text-center text-muted">
            [CLIENT]
          </li>
        ))}
      </ul>
    </section>
  );
}
