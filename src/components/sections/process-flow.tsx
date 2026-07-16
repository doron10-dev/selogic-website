import { ChevronLeft, Info, Workflow } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";

export type ProcessStep = string | { title: string; body: string };

type ProcessFlowProps = {
  title: string;
  steps: ProcessStep[];
  disclaimer: string;
  body?: string;
  id?: string;
  tone?: SectionTone;
  className?: string;
};

function stepLabel(step: ProcessStep): string {
  return typeof step === "string" ? step : step.title;
}

function stepBody(step: ProcessStep): string | undefined {
  return typeof step === "string" ? undefined : step.body;
}

/**
 * Illustrative process flow — business process → managerial snapshot.
 * Shows the *sequence* only. The illustration disclaimer is always rendered.
 */
export function ProcessFlow({
  title,
  steps,
  disclaimer,
  body,
  id = "flow",
  tone = "muted",
  className = "",
}: ProcessFlowProps) {
  const detailed = steps.some((step) => typeof step !== "string");

  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} />

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

        {detailed ? (
          <ol className="grid gap-4 p-5 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={stepLabel(step)} className="flex flex-col gap-3 rounded-xl border p-4" style={{ borderColor: "var(--theme-border)" }}>
                <div className="flex items-center gap-2">
                  <span className="theme-step-dot h-7 w-7 text-xs" aria-hidden="true">
                    {index + 1}
                  </span>
                  <p className="theme-text-heading text-sm font-semibold">{stepLabel(step)}</p>
                </div>
                {stepBody(step) ? (
                  <p className="theme-text-muted pr-9 text-sm leading-relaxed">{stepBody(step)}</p>
                ) : null}
              </li>
            ))}
          </ol>
        ) : (
          <ol className="flex flex-wrap items-stretch gap-3 p-5">
            {steps.map((step, index) => (
              <li key={stepLabel(step)} className="flex items-center gap-3">
                <span
                  className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold theme-text-heading"
                  style={{ borderColor: "var(--theme-border)" }}
                >
                  <span className="theme-step-dot h-6 w-6 text-xs" aria-hidden="true">
                    {index + 1}
                  </span>
                  {stepLabel(step)}
                </span>
                {index < steps.length - 1 ? (
                  <ChevronLeft className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        )}
      </div>

      <p className="theme-text-muted mt-6 flex items-start gap-2 text-sm leading-relaxed">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{disclaimer}</span>
      </p>
    </Section>
  );
}
