export default function SectionHeading({ eyebrow, title, className = "mb-12" }) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[clamp(1.9rem,4.5vw,3.6rem)] font-extrabold uppercase leading-[1.05]">
        {title}
      </h2>
    </div>
  );
}
