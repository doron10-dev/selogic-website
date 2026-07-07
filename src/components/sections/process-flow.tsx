import { ChevronLeft, Info, Workflow } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";

type ProcessFlowProps = {
  title: string;
  steps: string[];
  disclaimer: string;
  id?: string;
  tone?: SectionTone;
  className?: string;
};

/**
 * Illustrative process flow — business process → managerial snapshot.
 * Shows the *sequence* only, no numbers or client data. The illustration
 * disclaimer is always rendered.
 */
export function ProcessFlow({
  title,
  steps,
  disclaimer,
  id = "flow",
  tone = "muted",
  className = "",
}: ProcessFlowProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} />

      <div className="theme-card mt-8 overflow-hidden lg:mt-10">
        <div
          className="flex items-center justify-between gap-3 border-b px-5 py-3"
          style={{ borderColor: "var(--theme-border)" }}
        >
          <span className="flex items-center gap-2">
            <Workflow className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="theme-text-heading text-sm font-semibold">מבנה תהליך</span>
          </span>
          <span className="theme-badge-note">להמחשה</span>
        </div>

        <ol className="flex flex-wrap items-stretch gap-3 p-5">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span
                className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold theme-text-heading"
                style={{ borderColor: "var(--theme-border)" }}
              >
                <span className="theme-step-dot h-6 w-6 text-xs" aria-hidden="true">
                  {index + 1}
                </span>
                {step}
              </span>
              {index < steps.length - 1 ? (
                <ChevronLeft className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <p className="theme-text-muted mt-6 flex items-start gap-2 text-sm leading-relaxed">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{disclaimer}</span>
      </p>
    </Section>
  );
}
