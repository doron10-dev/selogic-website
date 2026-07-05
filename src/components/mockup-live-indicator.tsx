/** Subtle SVG pulse — signals "live" mockup without Lottie dependency. */
export function MockupLiveIndicator({ active }: { active: boolean }) {
  return (
    <span
      className={`mockup-live-indicator ${active ? "is-active" : ""}`}
      aria-hidden="true"
      title="המחשה בלבד"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
        <circle className="mockup-live-ring" cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle className="mockup-live-core" cx="8" cy="8" r="2.5" fill="currentColor" />
      </svg>
    </span>
  );
}
