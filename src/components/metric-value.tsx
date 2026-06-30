type MetricValueProps = {
  /** Numeric or primary display (e.g. "25", "94", "4.8"). */
  main: string;
  /** Unit key: min → דק׳, pct → %, plus → + */
  unit?: "min" | "pct" | "plus";
  /** Large hero/board tiles vs compact SLA tiles. */
  size?: "lg" | "md";
  invert?: boolean;
  className?: string;
};

const unitLabel: Record<NonNullable<MetricValueProps["unit"]>, string> = {
  min: "דק׳",
  pct: "%",
  plus: "+",
};

const sizeClass = {
  lg: { main: "text-2xl sm:text-3xl", unit: "text-sm", unitMin: "text-[11px] sm:text-xs" },
  md: { main: "text-xl sm:text-2xl", unit: "text-xs", unitMin: "text-[10px]" },
};

export function MetricValue({
  main,
  unit,
  size = "lg",
  invert = false,
  className = "",
}: MetricValueProps) {
  const mainColor = invert ? "text-paper" : "text-slate-ink";
  const unitColor = invert ? "text-paper/60" : "text-slate-mute";

  return (
    <span className={`inline-flex items-baseline gap-0.5 ${className}`}>
      <span className={`font-mono font-bold leading-none ${sizeClass[size].main} ${mainColor}`}>
        {main}
      </span>
      {unit ? (
        <span
          className={`font-sans font-normal leading-none ${
            unit === "min" ? sizeClass[size].unitMin : sizeClass[size].unit
          } ${unitColor}`}
          aria-hidden="true"
        >
          {unitLabel[unit]}
        </span>
      ) : null}
    </span>
  );
}
