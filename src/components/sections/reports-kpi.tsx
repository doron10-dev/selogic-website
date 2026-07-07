import { FileBarChart2, Info } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";

type ReportsKpiSectionProps = {
  title: string;
  body: string;
  reportTitle: string;
  reportItems: string[];
  kpiTitle: string;
  kpiItems: string[];
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
          <ul>
            {reportItems.map((item, index) => (
              <li
                key={item}
                className={`flex items-center justify-between gap-3 px-5 py-2.5 ${index > 0 ? "theme-divider" : ""}`}
              >
                <span className="theme-text-body text-sm">{item}</span>
                <span
                  className="h-2 w-14 rounded-full sm:w-20"
                  style={{ backgroundColor: "color-mix(in srgb, var(--theme-border) 70%, transparent)" }}
                  aria-hidden="true"
                />
              </li>
            ))}
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
