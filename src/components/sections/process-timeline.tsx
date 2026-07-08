import { Section, SectionHeading } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { WorkflowStep } from "@/types/service-page";

export type ProcessVariant = "numbered" | "flow" | "stack";
export type ProcessTone = "light" | "muted" | "dark";

type ProcessTimelineStepsProps = {
  steps: WorkflowStep[];
  invert?: boolean;
  boxed?: boolean;
  className?: string;
};

/** Numbered process — big circles, horizontal on desktop, vertical rail on mobile. */
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

const flowKind = (index: number, len: number): "open" | "progress" | "closed" =>
  index === len - 1 ? "closed" : index === 0 ? "open" : "progress";

/** Operational flow — compact status cards (dot + step label), for operational pages. */
function FlowStrip({ steps, className = "" }: { steps: WorkflowStep[]; className?: string }) {
  const cols = steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <ol className={`grid gap-3 sm:grid-cols-2 ${cols} ${className}`}>
      {steps.map((step, index) => (
        <li key={step.n} className="theme-inner-card p-4">
          <div className="flex items-center gap-2">
            <StatusDot kind={flowKind(index, steps.length)} pulse={index === 0} />
            <span className="theme-text-muted font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
              שלב {String(step.n).padStart(2, "0")}
            </span>
          </div>
          <h3 className="theme-text-heading mt-2.5 text-base font-semibold">{step.title}</h3>
          {step.body ? (
            <p className="theme-text-muted mt-1.5 text-sm leading-relaxed">{step.body}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** Vertical process stack — full rows with number badge + connecting rail, for solution pages. */
function ProcessStack({ steps, className = "" }: { steps: WorkflowStep[]; className?: string }) {
  return (
    <ol className={`relative space-y-3 ${className}`}>
      {steps.map((step) => (
        <li key={step.n} className="theme-inner-card flex items-start gap-4 p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            {String(step.n).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="theme-text-heading text-lg font-semibold">{step.title}</h3>
            {step.body ? (
              <p className="theme-text-body mt-1.5 text-base leading-relaxed">{step.body}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

type ProcessTimelineProps = {
  title: string;
  body: string;
  steps: WorkflowStep[];
  id?: string;
  className?: string;
  tone?: ProcessTone;
  variant?: ProcessVariant;
};

export function ProcessTimeline({
  title,
  body,
  steps,
  id = "process",
  className = "",
  tone = "light",
  variant = "numbered",
}: ProcessTimelineProps) {
  const isDark = tone === "dark";
  const sectionTone = isDark ? "dark" : tone === "muted" ? "muted" : "white";

  return (
    <Section tone={sectionTone} id={id} className={className}>
      <SectionHeading title={title} body={body} invert={isDark} />
      <div className="mt-8 lg:mt-10">
        {variant === "flow" ? (
          <FlowStrip steps={steps} />
        ) : variant === "stack" ? (
          <ProcessStack steps={steps} />
        ) : (
          <ProcessTimelineSteps steps={steps} invert={isDark} boxed={isDark} />
        )}
      </div>
    </Section>
  );
}
