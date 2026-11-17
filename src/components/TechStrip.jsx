// i want to use images here, will come back to it
const items = ["Unity", "Unreal Engine", "Godot", "Blender", "Steam", "Console", "Mobile", "VR"];

export default function TechStrip() {
  return (
    <div
      aria-label="Engines and platforms we ship on"
      className="overflow-hidden bg-white h-30 flex justify-center py-4 text-navy"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {/* Two identical lists, so the -50% loop is seamless */}
        {[0, 1].map((n) => (
          <ul key={n} aria-hidden={n === 1} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center font-display text-[15px] font-extrabold uppercase tracking-widest"
              >
                <span className="px-8">{item}</span>
                <span className="text-violet">◆</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
