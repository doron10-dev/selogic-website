import { CheckCircle2, XCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import type { CardItem } from "@/types/service-page";

type ComparisonColumn = {
  title: string;
  body: string;
  items: CardItem[];
};

type BeforeAfterSectionProps = {
  before: ComparisonColumn;
  after: ComparisonColumn;
  className?: string;
  /** Outer anchor — keeps the "אתגרים" nav link working. */
  id?: string;
  /** Anchor on the "after" column — keeps the "יתרונות" nav link working. */
  afterId?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

/**
 * Before / After comparison for solution pages.
 * Left of the reader (RTL): the "before" state uses red X markers on a plain surface.
 * The "after" state uses check markers with a subtle blue accent as the positive control side.
 * Reuses existing pain + clientGains content — no copy is rewritten.
 */
export function BeforeAfterSection({
  before,
  after,
  className = "",
  id = "pain",
  afterId = "benefits",
  beforeLabel = "בלי Selogic",
  afterLabel = "עם Selogic",
}: BeforeAfterSectionProps) {
  return (
    <Section tone="tint" id={id} className={className}>
      <SectionHeading title={before.title} body={before.body} />

      <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-6">
        <div className="theme-card overflow-hidden">
          <div
            className="flex items-center justify-between border-b px-5 py-3"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <span className="badge-pill border theme-status-badge--orange">{beforeLabel}</span>
            <span className="theme-text-muted font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
              המצב היום
            </span>
          </div>
          <ul className="px-5">
            {before.items.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-start gap-3 py-3.5 ${index > 0 ? "theme-divider" : ""}`}
              >
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="theme-text-heading font-medium">{item.title}</p>
                  <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id={afterId} className="theme-card overflow-hidden ring-1 ring-inset ring-blue-500/25">
          <div
            className="flex items-center justify-between border-b px-5 py-3"
            style={{
              borderColor: "var(--theme-border)",
              backgroundColor: "color-mix(in srgb, var(--theme-surface-tint) 60%, transparent)",
            }}
          >
            <span className="badge-pill border theme-status-badge--blue">{afterLabel}</span>
            <span className="theme-text-muted font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
              {after.title}
            </span>
          </div>
          <ul className="px-5">
            {after.items.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-start gap-3 py-3.5 ${index > 0 ? "theme-divider" : ""}`}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="theme-text-heading font-medium">{item.title}</p>
                  <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
