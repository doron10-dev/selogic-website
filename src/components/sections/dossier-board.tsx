import { FolderOpen, Info } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { DossierCategory } from "@/data/pages/site-dossier";

type DossierBoardProps = {
  title: string;
  disclaimer: string;
  categories: DossierCategory[];
  id?: string;
  tone?: SectionTone;
  className?: string;
};

/**
 * Illustrative "site dossier" board — shows the *categories* a client file is
 * organized into. No real data, no numbers, no percentages. The illustration
 * disclaimer is always rendered.
 */
export function DossierBoard({
  title,
  disclaimer,
  categories,
  id = "example",
  tone = "muted",
  className = "",
}: DossierBoardProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} />

      <div className="theme-card mt-8 overflow-hidden lg:mt-10">
        <div
          className="flex items-center justify-between gap-3 border-b px-5 py-3"
          style={{ borderColor: "var(--theme-border)" }}
        >
          <span className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="theme-text-heading text-sm font-semibold">מבנה תיק אתר</span>
          </span>
          <span className="theme-badge-note">להמחשה</span>
        </div>

        <ul className="grid sm:grid-cols-2">
          {categories.map((category, index) => (
            <li
              key={category.label}
              className={`flex items-start gap-3 p-4 ${index >= 2 ? "theme-divider" : ""} ${
                index % 2 === 1 ? "sm:border-s" : ""
              }`}
              style={index % 2 === 1 ? { borderColor: "var(--theme-border)" } : undefined}
            >
              <span className="mt-1">
                <StatusDot kind="closed" />
              </span>
              <div className="min-w-0">
                <p className="theme-text-heading font-semibold">{category.label}</p>
                <p className="theme-text-muted mt-0.5 text-sm leading-relaxed">{category.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="theme-text-muted mt-6 flex items-start gap-2 text-sm leading-relaxed">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{disclaimer}</span>
      </p>
    </Section>
  );
}
