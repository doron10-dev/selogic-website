import { FileBarChart2, Info } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";

/**
 * Per-row accent colors so each report line reads as an intentional, color-coded
 * category rather than a neutral loading skeleton. Order follows the canonical
 * report structure (service calls, security, backups, updates, gaps, next steps)
 * and simply cycles for longer lists. These are category accents, not metrics.
 */
const REPORT_ACCENTS = [
  "#6366f1", // service calls — indigo/blue
  "#f59e0b", // security events — amber
  "#10b981", // backups — emerald
  "#3b82f6", // updates — blue
  "#f97316", // open gaps — orange
  "#8b5cf6", // recommendations — purple
];

type ReportsKpiSectionProps = {
  title: string;
  body: string;
  reportTitle: string;
  reportItems: string[];
  kpiTitle: string;
  kpiItems: string[];
  /** Optional captions under each card header. */
  reportCaption?: string;
  kpiCaption?: string;
  /** Mandatory illustration-only label. */
  disclaimer: string;
  id?: string;
  tone?: SectionTone;
  className?: string;
};

/**
 * Illustrative reports & KPI basis. Shows the *structure* of a periodic report
 * and the *types* of KPIs only — never real or fabricated numbers. The
 * disclaimer is always rendered.
 */
export function ReportsKpiSection({
  title,
  body,
  reportTitle,
  reportItems,
  kpiTitle,
  kpiItems,
  reportCaption,
  kpiCaption,
  disclaimer,
  id = "reports",
  tone = "muted",
  className = "",
}: ReportsKpiSectionProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} />

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Monthly report structure */}
        <div className="theme-card overflow-hidden">
          <div
            className="flex items-center justify-between gap-3 border-b px-5 py-3"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <span className="flex items-center gap-2">
              <FileBarChart2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <span className="theme-text-heading text-sm font-semibold">{reportTitle}</span>
            </span>
            <span className="theme-badge-note">להמחשה</span>
          </div>
          {reportCaption ? (
            <p className="theme-text-muted border-b px-5 py-2.5 text-sm leading-relaxed" style={{ borderColor: "var(--theme-border)" }}>
              {reportCaption}
            </p>
          ) : null}
          <ul>
            {reportItems.map((item, index) => {
              const accent = REPORT_ACCENTS[index % REPORT_ACCENTS.length];
              return (
                <li
                  key={item}
                  className={`flex items-center justify-between gap-3 px-5 py-2.5 ${index > 0 ? "theme-divider" : ""}`}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span
                      className="h-4 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                      aria-hidden="true"
                    />
                    <span className="theme-text-body text-sm">{item}</span>
                  </span>
                  <span
                    className="h-1.5 w-12 shrink-0 rounded-full sm:w-16"
                    style={{ backgroundColor: `color-mix(in srgb, ${accent} 60%, transparent)` }}
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* KPI categories */}
        <div className="theme-card overflow-hidden">
          <div
            className="flex items-center justify-between gap-3 border-b px-5 py-3"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <span className="theme-text-heading text-sm font-semibold">{kpiTitle}</span>
            <span className="theme-badge-note">להמחשה</span>
          </div>
          {kpiCaption ? (
            <p className="theme-text-muted border-b px-5 py-2.5 text-sm leading-relaxed" style={{ borderColor: "var(--theme-border)" }}>
              {kpiCaption}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-2 p-5">
            {kpiItems.map((item) => (
              <span
                key={item}
                className="rounded-full border px-3 py-1.5 text-sm theme-text-body"
                style={{ borderColor: "var(--theme-border)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="theme-text-muted mt-6 flex items-start gap-2 text-sm leading-relaxed">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{disclaimer}</span>
      </p>
    </Section>
  );
}
