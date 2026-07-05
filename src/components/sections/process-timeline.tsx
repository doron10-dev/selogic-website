import { Section, SectionHeading } from "@/components/section";
import type { WorkflowStep } from "@/types/service-page";

type ProcessTimelineStepsProps = {
  steps: WorkflowStep[];
  invert?: boolean;
  boxed?: boolean;
  className?: string;
};

export function ProcessTimelineSteps({
  steps,
  invert = false,
  boxed = false,
  className = "",
}: ProcessTimelineStepsProps) {
  const lineClass = invert ? "bg-slate-700" : "bg-[var(--theme-border)]";
  const titleClass = invert ? "text-white" : "theme-text-heading";
  const bodyClass = invert ? "text-slate-200" : "theme-text-body";
  const boxClass = invert
    ? "rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6"
    : "theme-inner-card";

  if (boxed) {
    return (
      <ol className={`space-y-4 ${className}`}>
        {steps.map((step) => (
          <li key={step.n}>
            <div className={`flex items-start gap-4 ${boxClass}`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {String(step.n).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className={`text-lg font-semibold ${titleClass}`}>{step.title}</h3>
                {step.body ? (
                  <p className={`mt-2 text-base leading-relaxed ${bodyClass}`}>{step.body}</p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <>
      <ol className={`hidden lg:mt-0 lg:flex lg:items-start lg:justify-between lg:gap-2 ${className}`}>
        {steps.map((step, index) => (
          <li key={step.n} className="relative flex min-w-0 flex-1 flex-col items-center text-center">
            {index < steps.length - 1 ? (
              <span
                className={`pointer-events-none absolute top-5 end-1/2 h-px w-full ${lineClass}`}
                aria-hidden="true"
              />
            ) : null}
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              {String(step.n).padStart(2, "0")}
            </span>
            <h3 className={`mt-4 text-lg font-semibold ${titleClass}`}>{step.title}</h3>
            {step.body ? (
              <p className={`mt-3 max-w-[16rem] text-base leading-relaxed ${bodyClass}`}>{step.body}</p>
            ) : null}
          </li>
        ))}
      </ol>

      <ol className={`relative mt-8 space-y-6 border-e pe-6 lg:hidden ${invert ? "border-slate-700" : "border-[var(--theme-border)]"} ${className}`}>
        {steps.map((step) => (
          <li key={step.n} className="relative flex gap-4">
            <span className="absolute -end-[1.65rem] flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
              {String(step.n).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className={`text-lg font-semibold ${titleClass}`}>{step.title}</h3>
              {step.body ? (
                <p className={`mt-2 text-base leading-relaxed ${bodyClass}`}>{step.body}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

type ProcessTimelineProps = {
  title: string;
  body: string;
  steps: WorkflowStep[];
  id?: string;
  className?: string;
  tone?: "light" | "dark";
};

export function ProcessTimeline({
  title,
  body,
  steps,
  id = "process",
  className = "",
  tone = "dark",
}: ProcessTimelineProps) {
  const isDark = tone === "dark";

  return (
    <Section tone={isDark ? "dark" : "white"} id={id} className={className}>
      <SectionHeading title={title} body={body} invert={isDark} />
      <ProcessTimelineSteps
        steps={steps}
        invert={isDark}
        boxed={isDark}
        className="mt-8 lg:mt-10"
      />
    </Section>
  );
}
