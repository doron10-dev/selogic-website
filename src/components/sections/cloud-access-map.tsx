import { Fragment } from "react";
import { X } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";

export type CloudGovernanceStage = {
  label: string;
  caption?: string;
  chips: string[];
};

type CloudAccessMapProps = {
  id?: string;
  tone?: SectionTone;
  title: string;
  body?: string;
  stages: CloudGovernanceStage[];
  challenges?: {
    title: string;
    body: string;
    items: string[];
    closing: string;
  };
  footnote?: string;
  className?: string;
};

/**
 * Microsoft 365 signature: an identity -> access -> workloads -> control flow
 * ("governance map"). Chips carry the managed items; connectors show that every
 * layer is governed as one process, not a flat grid of features.
 */
export function CloudAccessMap({
  id = "manage",
  tone = "white",
  title,
  body,
  stages,
  challenges,
  footnote,
  className = "py-10 sm:py-14 lg:py-16",
}: CloudAccessMapProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      {challenges ? (
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <SectionHeading title={challenges.title} />
            <p className="theme-text-body mt-4 leading-relaxed">{challenges.body}</p>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {challenges.closing}
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {challenges.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" aria-hidden="true" />
                <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className={challenges ? "mt-10 lg:mt-12" : undefined}>
        <SectionHeading title={title} body={body} />
        <div className="mt-8 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:items-stretch">
          {stages.map((stage, index) => (
            <Fragment key={stage.label}>
              <div className="theme-card flex flex-1 flex-col gap-3 p-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="theme-step-dot h-7 w-7 text-xs" aria-hidden="true">
                      {index + 1}
                    </span>
                    <p className="theme-text-heading font-semibold">{stage.label}</p>
                  </div>
                  {stage.caption ? (
                    <p className="theme-text-muted mt-1.5 pr-9 text-xs leading-relaxed">{stage.caption}</p>
                  ) : null}
                </div>
                <ul className="flex flex-wrap gap-2">
                  {stage.chips.map((chip) => (
                    <li
                      key={chip}
                      className="theme-text-body rounded-full border px-2.5 py-1 text-xs"
                      style={{ borderColor: "var(--theme-border)" }}
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
              {index < stages.length - 1 ? (
                <div className="flex items-center justify-center py-0.5 lg:px-1" aria-hidden="true">
                  <span className="theme-text-muted hidden text-lg lg:inline">←</span>
                  <span className="theme-text-muted text-lg lg:hidden">↓</span>
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
        {footnote ? (
          <p className="theme-text-body mt-6 text-sm leading-relaxed">{footnote}</p>
        ) : null}
      </div>
    </Section>
  );
}
