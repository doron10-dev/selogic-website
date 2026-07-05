type BarTone = "orange" | "blue" | "green";

const BAR_FILLS: Record<BarTone, string> = {
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
};

const BADGE_STYLES: Record<BarTone, string> = {
  orange: "theme-status-badge theme-status-badge--orange",
  blue: "theme-status-badge theme-status-badge--blue",
  green: "theme-status-badge theme-status-badge--green",
};

const BAR_HEIGHT = "h-3.5";

type IllustrativeBarProps = {
  fillPercent: number;
  tone: BarTone;
  animateFill?: boolean;
  fillDelayMs?: number;
  className?: string;
};

export function IllustrativeBar({
  fillPercent,
  tone,
  animateFill,
  fillDelayMs = 0,
  className = "",
}: IllustrativeBarProps) {
  const width = Math.max(0, Math.min(100, fillPercent));
  const shouldAnimate = animateFill !== undefined;
  const displayWidth = shouldAnimate ? (animateFill ? width : 0) : width;

  return (
    <div className={`theme-progress-track ${BAR_HEIGHT} ${className}`} aria-hidden="true">
      {width > 0 ? (
        <div
          className={`absolute inset-y-0 right-0 rounded-full motion-safe:transition-[width] motion-safe:duration-1000 motion-safe:ease-out ${BAR_FILLS[tone]}`}
          style={{
            width: `${displayWidth}%`,
            transitionDelay: `${fillDelayMs}ms`,
          }}
        />
      ) : null}
    </div>
  );
}

type StatusProgressRowProps = {
  title: string;
  sub?: string;
  badge: string;
  tone: BarTone;
  fillPercent: number;
  animateFill?: boolean;
  fillDelayMs?: number;
};

export function StatusProgressRow({
  title,
  sub,
  badge,
  tone,
  fillPercent,
  animateFill,
  fillDelayMs = 0,
}: StatusProgressRowProps) {
  const pulseBadge = tone === "orange" && badge === "בטיפול";

  return (
    <div className="theme-status-row">
      <div className="flex items-start justify-between gap-2 sm:items-center sm:gap-3">
        <div className="min-w-0 flex-1 text-right">
          <p className="theme-text-heading text-sm font-semibold">{title}</p>
          {sub ? <p className="theme-text-muted mt-0.5 text-xs">{sub}</p> : null}
        </div>
        <span
          className={`badge-pill shrink-0 border px-2.5 py-1 text-xs font-semibold ${BADGE_STYLES[tone]} ${
            pulseBadge ? "motion-safe:animate-pulse" : ""
          }`}
        >
          {badge}
        </span>
      </div>
      <IllustrativeBar
        fillPercent={fillPercent}
        tone={tone}
        animateFill={animateFill}
        fillDelayMs={fillDelayMs}
        className="mt-3"
      />
    </div>
  );
}

export type { BarTone };
