import Link from "next/link";
import { ServiceIconChip } from "@/lib/service-icons";
import type { CardItem } from "@/types/service-page";

type CardVariant = "default" | "compact" | "featured";

function cardSurfaceClass(variant: CardVariant, interactive: boolean) {
  const interactiveClass = interactive ? "card-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" : "";
  if (variant === "featured") {
    return `theme-feature-card--featured group relative block h-full min-w-0 ${interactiveClass}`;
  }
  const padding = variant === "compact" ? "p-4" : "p-6";
  return `theme-feature-card group relative block h-full min-w-0 ${padding} ${interactiveClass}`;
}

function CardInner({
  item,
  variant = "default",
}: {
  item: CardItem;
  variant?: CardVariant;
}) {
  const isFeatured = variant === "featured" || item.featured;
  const titleClass =
    variant === "compact"
      ? "break-words text-base font-semibold theme-text-heading"
      : "break-words text-lg font-semibold theme-text-heading";
  const bodyClass =
    variant === "compact"
      ? "mt-1.5 break-words text-sm leading-relaxed theme-text-muted"
      : "mt-2 break-words text-[17px] leading-relaxed theme-text-muted";

  return (
    <>
      <ServiceIconChip title={item.title} href={item.href} />
      {isFeatured ? <span className="theme-eyebrow mt-4 block text-xs font-semibold">שירות מרכזי</span> : null}
      <h3 className={`${isFeatured ? "mt-2" : "mt-4"} ${titleClass}`}>{item.title}</h3>
      <p className={bodyClass}>{item.body}</p>
      {item.href ? (
        <span
          className={`theme-link mt-4 inline-block text-sm font-medium transition-all duration-200 group-hover:-translate-x-1 ${
            variant === "compact" ? "mt-3 text-xs" : ""
          }`}
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
  variant = "default",
}: {
  item: CardItem;
  index?: number;
  variant?: CardVariant;
}) {
  const resolvedVariant = item.featured ? "featured" : variant;
  const interactive = Boolean(item.href);
  const baseClass = cardSurfaceClass(resolvedVariant, interactive);
  const inner = <CardInner item={item} variant={resolvedVariant} />;

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
      {items.map((item) => (
        <div key={item.title} className={`min-w-0 ${item.featured ? "sm:col-span-2 lg:col-span-3" : ""}`}>
          <FeatureCard item={item} variant={cardVariant} />
        </div>
      ))}
    </div>
  );
}
