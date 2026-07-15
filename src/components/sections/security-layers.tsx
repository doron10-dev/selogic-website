import { Lock } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";

export type SecurityLayerItem = { title: string; body: string };

type SecurityLayersProps = {
  id?: string;
  tone?: SectionTone;
  title: string;
  body?: string;
  /** What the layers ultimately protect, shown as the highlighted core row. */
  coreLabel: string;
  coreSub?: string;
  items: SecurityLayerItem[];
  /** Optional single concluding line rendered under the stack (no card, no list). */
  closing?: string;
  className?: string;
};

/**
 * Cybersecurity signature: a defense-in-depth stack (outer governance -> inner
 * data) instead of a flat card grid. Layers are numbered and connected, ending
 * in a highlighted "core" row, so the page reads as one integrated process.
 */
export function SecurityLayers({
  id = "layers",
  tone = "white",
  title,
  body,
  coreLabel,
  coreSub,
  items,
  closing,
  className = "py-10 sm:py-14 lg:py-16",
}: SecurityLayersProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} />
      <ol className="theme-card mt-8 overflow-hidden lg:mt-10">
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`flex items-start gap-4 px-5 py-4 ${index > 0 ? "theme-divider" : ""}`}
          >
            <span
              className="theme-step-dot h-9 w-9 shrink-0 text-sm"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="theme-text-heading font-semibold">{item.title}</p>
              <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
        <li
          className="flex items-center gap-4 border-t px-5 py-4"
          style={{ borderColor: "var(--theme-border)", backgroundColor: "var(--theme-row)" }}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"
            aria-hidden="true"
          >
            <Lock className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="theme-text-heading font-semibold">{coreLabel}</p>
            {coreSub ? <p className="theme-text-muted mt-1 text-sm leading-relaxed">{coreSub}</p> : null}
          </div>
        </li>
      </ol>
      {closing ? (
        <p className="theme-text-muted mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed">
          {closing}
        </p>
      ) : null}
    </Section>
  );
}
