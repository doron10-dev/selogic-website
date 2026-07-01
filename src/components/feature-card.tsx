import Link from "next/link";
import { StatusDot } from "@/components/status-dot";
import type { CardItem } from "@/types/service-page";

const dotKinds = ["open", "progress", "waiting", "closed"] as const;

type CardVariant = "default" | "compact" | "featured";

function cardSurfaceClass(variant: CardVariant) {
  if (variant === "featured") {
    return "group block min-w-0 rounded-card border-2 border-signal/30 bg-gradient-to-br from-signal-soft/30 to-white p-5 shadow-lift ring-1 ring-signal/10 transition-colors hover:border-signal/45";
  }
  if (variant === "compact") {
    return "group block min-w-0 rounded-card border border-slate-line/70 bg-white/80 p-4 shadow-none transition-colors hover:border-signal/25";
  }
  return "group block min-w-0 card-surface p-5 card-surface-hover";
}

function CardInner({
  item,
  index,
  variant = "default",
}: {
  item: CardItem;
  index?: number;
  variant?: CardVariant;
}) {
  const dotKind = dotKinds[(index ?? 0) % dotKinds.length];
  const isFeatured = variant === "featured" || item.featured;
  const titleClass =
    variant === "compact" ? "break-words text-sm font-bold text-slate-ink" : "break-words text-base font-bold text-slate-ink";
  const bodyClass =
    variant === "compact" ? "mt-1.5 break-words text-xs leading-relaxed text-slate-body" : "mt-2 break-words text-sm leading-relaxed text-slate-body";

  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-2">
        <StatusDot kind={isFeatured ? "closed" : dotKind} />
        {typeof index === "number" && variant !== "compact" ? (
          <span className="font-mono text-xs text-slate-mute">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      {isFeatured ? (
        <span className="mb-2 block text-xs font-semibold text-signal-ink">שירות מרכזי</span>
      ) : null}
      <h3 className={titleClass}>{item.title}</h3>
      <p className={bodyClass}>{item.body}</p>
      {item.href ? (
        <span
          className={`inline-block text-signal transition-colors group-hover:text-signal-ink ${variant === "compact" ? "mt-2 text-xs" : "mt-3"}`}
          aria-hidden="true"
        >
          ←
        </span>
      ) : null}
    </>
  );
}

export function FeatureCard({
  item,
  index,
  variant = "default",
}: {
  item: CardItem;
  index?: number;
  variant?: CardVariant;
}) {
  const resolvedVariant = item.featured ? "featured" : variant;
  const baseClass = cardSurfaceClass(resolvedVariant);
  const inner = <CardInner item={item} index={index} variant={resolvedVariant} />;

  if (item.href) {
    return (
      <Link href={item.href} className={baseClass}>
        {inner}
      </Link>
    );
  }
  return <div className={baseClass}>{inner}</div>;
}

export function CardGrid({
  items,
  cols = 3,
  numbered = false,
  density = "default",
}: {
  items: CardItem[];
  cols?: 2 | 3 | 4;
  numbered?: boolean;
  density?: "default" | "compact";
}) {
  const colClass =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const gapClass = density === "compact" ? "gap-3" : "gap-4";
  const mtClass = density === "compact" ? "mt-6" : "mt-10";
  const cardVariant = density === "compact" ? "compact" : "default";

  return (
    <div className={`${mtClass} grid grid-cols-1 ${gapClass} ${colClass}`}>
      {items.map((item, i) => (
        <div
          key={item.title}
          className={item.featured ? "min-w-0 sm:col-span-2 lg:col-span-2" : "min-w-0"}
        >
          <FeatureCard item={item} index={numbered ? i : undefined} variant={cardVariant} />
        </div>
      ))}
    </div>
  );
}
