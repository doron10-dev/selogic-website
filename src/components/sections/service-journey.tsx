import { ChevronLeft } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import type { WorkflowStep } from "@/types/service-page";

type ServiceJourneySectionProps = {
  title: string;
  body: string;
  steps: WorkflowStep[];
  className?: string;
  id?: string;
  anchors?: string[];
  queueLabel?: string;
};

/**
 * Service desk journey: a request becomes handled work.
 * Horizontal connected lifecycle (numbered nodes + chevrons), stacked on mobile.
 */
export function ServiceJourneySection({
  title,
  body,
  steps,
  className = "",
  id = "support-process",
  anchors = [],
  queueLabel = "מחזור חיי קריאה",
}: ServiceJourneySectionProps) {
  return (
    <Section tone="tint" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading title={title} body={body} />

      <div className="theme-card mt-8 p-5 sm:p-6 lg:mt-10">
        <div className="mb-4 flex items-center gap-2 border-b pb-3" style={{ borderColor: "var(--theme-border)" }}>
          <span className="badge-pill theme-status-badge--blue border">{queueLabel}</span>
          <span className="theme-text-muted font-mono text-[11px] uppercase tracking-[0.18em]">SERVICE DESK</span>
        </div>

        <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
          {steps.map((step, index) => (
            <li key={step.n} className="flex items-stretch gap-2 lg:flex-1">
              <div className="theme-inner-card flex-1 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="theme-text-heading text-sm font-semibold">{step.title}</p>
                </div>
                {step.body ? (
                  <p className="theme-text-muted mt-1.5 text-xs leading-relaxed">{step.body}</p>
                ) : null}
              </div>
              {index < steps.length - 1 ? (
                <div className="flex items-center justify-center self-center" aria-hidden="true">
                  <ChevronLeft className="hidden h-5 w-5 text-blue-500/60 lg:block" />
                  <ChevronLeft className="h-4 w-4 rotate-[-90deg] text-blue-500/60 lg:hidden" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
