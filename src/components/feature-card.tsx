import Link from "next/link";
import { StatusDot } from "@/components/status-dot";

type CardItem = {
  title: string;
  body: string;
  href?: string;
};

const dotKinds = ["open", "progress", "waiting", "closed"] as const;

const baseClass = "group block min-w-0 card-surface p-5 card-surface-hover";

function CardInner({ item, index }: { item: CardItem; index?: number }) {
  const dotKind = dotKinds[(index ?? 0) % dotKinds.length];

  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-2">
        <StatusDot kind={dotKind} />
        {typeof index === "number" && (
          <span className="font-mono text-xs text-slate-mute">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="break-words text-base font-bold text-slate-ink">{item.title}</h3>
      <p className="mt-2 break-words text-sm leading-relaxed text-slate-body">{item.body}</p>
      {item.href ? (
        <span className="mt-3 inline-block text-signal transition-colors group-hover:text-signal-ink" aria-hidden="true">
          ←
        </span>
      ) : null}
    </>
  );
}

export function FeatureCard({ item, index }: { item: CardItem; index?: number }) {
  const inner = <CardInner item={item} index={index} />;

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
}: {
  items: CardItem[];
  cols?: 2 | 3 | 4;
  numbered?: boolean;
}) {
  const colClass =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`mt-10 grid grid-cols-1 gap-4 ${colClass}`}>
      {items.map((item, i) => (
        <FeatureCard key={item.title} item={item} index={numbered ? i : undefined} />
      ))}
    </div>
  );
}
