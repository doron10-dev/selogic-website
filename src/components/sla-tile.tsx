import { MetricValue } from "@/components/metric-value";
import { StatusDot } from "@/components/status-dot";
import type { SlaItem } from "@/types/service-page";

type SlaTileProps = {
  item: SlaItem;
  invert?: boolean;
  size?: "sm" | "md";
};

export function SlaTile({ item, invert = false, size = "md" }: SlaTileProps) {
  if (item.badge) {
    return <BadgeTile badge={item.badge} label={item.label} sub={item.sub} status={item.status} invert={invert} size={size} />;
  }

  if (item.main) {
    return (
      <div>
        <MetricValue main={item.main} unit={item.unit} size={size === "sm" ? "md" : "md"} invert={invert} />
        <p className={`mt-2 text-xs ${invert ? "text-paper/60" : "text-slate-mute"}`}>{item.label}</p>
        {item.sub ? (
          <p className={`text-[11px] ${invert ? "text-paper/45" : "text-slate-mute"}`}>{item.sub}</p>
        ) : null}
      </div>
    );
  }

  if (item.value) {
    return (
      <div>
        <p className={`font-mono font-bold leading-none ${size === "sm" ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"} ${invert ? "text-paper" : "text-slate-ink"}`}>
          {item.value}
        </p>
        <p className={`mt-2 text-xs ${invert ? "text-paper/60" : "text-slate-mute"}`}>{item.label}</p>
        {item.sub ? (
          <p className={`text-[11px] ${invert ? "text-paper/45" : "text-slate-mute"}`}>{item.sub}</p>
        ) : null}
      </div>
    );
  }

  return <p className={`text-xs ${invert ? "text-paper/60" : "text-slate-mute"}`}>{item.label}</p>;
}

function BadgeTile({
  badge,
  label,
  sub,
  status = "open",
  invert,
  size,
}: {
  badge: string;
  label: string;
  sub?: string;
  status?: SlaItem["status"];
  invert: boolean;
  size: "sm" | "md";
}) {
  const badgeClass = invert
    ? "bg-signal/30 text-white"
    : "bg-signal-soft text-signal-ink";
  const labelClass = invert ? "text-paper/90" : "text-slate-ink";
  const subClass = invert ? "text-paper/55" : "text-slate-mute";
  const badgeSize = size === "sm" ? "text-[11px] px-2 py-0.5" : "text-xs px-2.5 py-1";

  return (
    <div>
      <div className="flex items-center gap-2">
        <StatusDot kind={status ?? "open"} pulse={status === "open"} />
        <span className={`inline-flex rounded-pill font-semibold ${badgeSize} ${badgeClass}`}>{badge}</span>
      </div>
      <p className={`mt-2 font-medium ${size === "sm" ? "text-xs" : "text-sm"} ${labelClass}`}>{label}</p>
      {sub ? <p className={`mt-0.5 ${size === "sm" ? "text-[11px]" : "text-xs"} ${subClass}`}>{sub}</p> : null}
    </div>
  );
}
