import { useId } from "react";

const BAR_C = "0.8,58.9 94.9,23.7 95.7,37.2 3.1,72.4";

export default function Logo({
  size = 44,
  bar = "#0a0a24",
  showName = true,
  strokeWidth = 1.2,
  svgClassName,
  className = "",
}) {
  const id = useId().replace(/:/g, "");

  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <svg
        width={size * 1.16}
        height={size}
        viewBox="-2 -2 104 90"
        className={svgClassName}
        aria-hidden="true"
      >
        <defs>
          <clipPath id={id}>
            <circle cx="20" cy="50" r="15" />
          </clipPath>
        </defs>
        <polygon
          fill="#fff"
          points="44,4 60,28 95,30 68,41 96,51 52,52 13,82 28,56 2,66 32,40 22,7 38,24"
        />
        <g fill={bar} stroke="#fff" strokeWidth={strokeWidth}>
          <polygon points={BAR_C} />
          <polygon points="27.1,1.9 99.5,45.7 91.8,56.6 18.3,12.4" />
          <polygon points="38.4,0.5 50.1,7.4 18.3,85.3 8.1,78.3" />
          <g clipPath={`url(#${id})`}>
            <polygon points={BAR_C} />
          </g>
        </g>
      </svg>
      {showName && (
        <span className="font-display text-2xl font-extrabold tracking-wide">ANDICOX</span>
      )}
    </span>
  );
}
