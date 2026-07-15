import { Section, SectionHeading, type SectionTone } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { MonitorItem } from "@/data/pages/rmm";

type MonitoringScopeSectionProps = {
  title: string;
  body: string;
  note: string;
  items: MonitorItem[];
  /** Optional merged management value (one concise paragraph, no checklist). */
  valueTitle?: string;
  valueSummary?: string;
  /** Optional compact "what management sees" outputs — up to 4 plain tags, no cards/bars/badge. */
  reportTitle?: string;
  reportOutputs?: string[];
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
  valueTitle,
  valueSummary,
  reportTitle,
  reportOutputs,
  id = "scope",
  tone = "white",
  className = "",
}: MonitoringScopeSectionProps) {
  const hasSummary = Boolean(valueSummary) || Boolean(reportOutputs?.length);
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

      {hasSummary ? (
        <div
          className="mt-6 grid gap-6 rounded-2xl border p-5 sm:grid-cols-2 sm:p-6 lg:mt-8"
          style={{ borderColor: "var(--theme-border)" }}
        >
          {valueSummary ? (
            <div className="min-w-0">
              {valueTitle ? (
                <p className="theme-text-heading text-sm font-semibold">{valueTitle}</p>
              ) : null}
              <p className="theme-text-muted mt-2 text-sm leading-relaxed">{valueSummary}</p>
            </div>
          ) : null}
          {reportOutputs?.length ? (
            <div className="min-w-0">
              {reportTitle ? (
                <p className="theme-text-heading text-sm font-semibold">{reportTitle}</p>
              ) : null}
              <div className="mt-2 flex flex-wrap gap-2">
                {reportOutputs.map((output) => (
                  <span
                    key={output}
                    className="rounded-full border px-3 py-1 text-xs leading-relaxed theme-text-muted"
                    style={{ borderColor: "var(--theme-border)" }}
                  >
                    {output}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </Section>
  );
}
