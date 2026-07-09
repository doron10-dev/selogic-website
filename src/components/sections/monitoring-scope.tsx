import { Section, SectionHeading, type SectionTone } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { MonitorItem } from "@/data/pages/rmm";

type MonitoringScopeSectionProps = {
  title: string;
  body: string;
  note: string;
  items: MonitorItem[];
  id?: string;
  tone?: SectionTone;
  className?: string;
};

/** "What we monitor" — a calm grid of monitored components, each marked as tracked in the background. */
export function MonitoringScopeSection({
  title,
  body,
  note,
  items,
  id = "scope",
  tone = "white",
  className = "",
}: MonitoringScopeSectionProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading title={title} body={body} />
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium theme-text-muted" style={{ borderColor: "var(--theme-border)" }}>
          <StatusDot kind="closed" pulse />
          {note}
        </span>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.label} className="theme-card flex items-start gap-3 p-4">
            <span className="mt-1">
              <StatusDot kind="closed" />
            </span>
            <div className="min-w-0">
              <p className="theme-text-heading font-semibold">{item.label}</p>
              <p className="theme-text-muted mt-0.5 text-sm leading-relaxed">{item.sub}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
