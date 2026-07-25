export default function WaveDivider({ color = "#00C2FF", opacity = 0.5, className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-10"
      >
        <path
          className="wave-path"
          d="M0 30 C 60 4, 120 56, 180 30 S 300 4, 360 30 S 480 56, 540 30 S 660 4, 720 30 S 840 56, 900 30 S 1020 4, 1080 30 S 1200 30, 1200 30"
          fill="none"
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
