import { ArrowLeftRight } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";
import type { TransformationExample } from "@/data/pages/information-systems-and-control";

type TransformationExamplesProps = {
  id?: string;
  tone?: SectionTone;
  title: string;
  body?: string;
  items: TransformationExample[];
  closing?: string;
  className?: string;
};

/**
 * Information Systems signature: paired before → intervention → after contrasts
 * that show how fragmented work becomes a controlled process with management visibility.
 */
export function TransformationExamples({
  id = "examples",
  tone = "tint",
  title,
  body,
  items,
  closing,
  className = "py-10 sm:py-14 lg:py-16",
}: TransformationExamplesProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} />

      <ul className="mt-8 grid gap-4 lg:mt-10">
        {items.map((item) => (
          <li key={item.title} className="theme-card overflow-hidden">
            <div
              className="flex items-center gap-2 border-b px-5 py-3"
              style={{ borderColor: "var(--theme-border)" }}
            >
              <ArrowLeftRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              <p className="theme-text-heading text-sm font-semibold">{item.title}</p>
            </div>
            <div className="grid gap-px sm:grid-cols-3" style={{ backgroundColor: "var(--theme-border)" }}>
              <div className="bg-[var(--theme-surface)] p-4 sm:p-5">
                <p className="theme-text-muted mb-1.5 text-xs font-semibold uppercase tracking-wide">לפני</p>
                <p className="theme-text-body text-sm leading-relaxed">{item.before}</p>
              </div>
              <div className="bg-[var(--theme-surface)] p-4 sm:p-5">
                <p className="theme-text-muted mb-1.5 text-xs font-semibold uppercase tracking-wide">מה משתנה</p>
                <p className="theme-text-body text-sm leading-relaxed">{item.intervention}</p>
              </div>
              <div className="bg-[var(--theme-surface)] p-4 sm:p-5">
                <p className="theme-text-muted mb-1.5 text-xs font-semibold uppercase tracking-wide">אחרי</p>
                <p className="theme-text-body text-sm leading-relaxed">{item.after}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {closing ? (
        <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">{closing}</p>
      ) : null}
    </Section>
  );
}
