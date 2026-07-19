import Link from "next/link";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import {
  managedItOperatingLayers,
  managedItVisibilitySection,
} from "@/data/pages/managed-it-services";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

/**
 * Managed IT signature: Selogic as a 3-layer operating stack plus a compact
 * management-visibility band — not a card catalogue, not a second full section.
 */
export function OperatingStackSection({
  content,
  className = "",
  id = "ownership",
  anchors = [],
}: SignatureProps) {
  const visibility = managedItVisibilitySection;

  return (
    <Section tone="white" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading
        eyebrow="שכבת התפעול של Selogic"
        title="שירות IT מנוהל — שכבה על שכבה"
        body={content.whatWeDo?.body ?? ""}
      />

      <div className="mt-6 grid gap-3 sm:mt-7 lg:grid-cols-3 lg:gap-4">
        {managedItOperatingLayers.map((layer, index) => (
          <div key={layer.heading} className="theme-card flex h-full flex-col px-4 py-3.5 sm:px-5 sm:py-4">
            <div className="flex items-baseline gap-2.5">
              <span className="font-mono text-xs font-bold text-blue-600 sm:text-sm">{`0${index + 1}`}</span>
              <h3 className="theme-text-heading text-sm font-semibold leading-snug sm:text-base">
                {layer.heading}
              </h3>
            </div>
            <p className="theme-text-muted mt-1.5 text-sm leading-snug">{layer.summary}</p>
            <ul className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
              {layer.labels.map((label) => (
                <li key={label} className="inline-flex items-center gap-1.5 text-xs">
                  <span
                    className="h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"
                    aria-hidden="true"
                  />
                  <span className="theme-text-body">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        id="visibility"
        className="scroll-mt-32 mt-6 rounded-2xl border px-4 py-3.5 sm:mt-7 sm:px-5 sm:py-4"
        style={{
          borderColor: "var(--theme-border)",
          backgroundColor: "color-mix(in srgb, var(--theme-surface-tint) 45%, transparent)",
        }}
      >
        <h2 className="font-display theme-text-heading text-lg font-bold leading-snug sm:text-xl">
          {visibility.title}
        </h2>
        <p className="theme-text-muted mt-1.5 max-w-3xl text-sm leading-relaxed">{visibility.body}</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3 sm:gap-3">
          {visibility.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm leading-snug">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              <span className="theme-text-body">{point}</span>
            </li>
          ))}
        </ul>
        <p className="theme-text-muted mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <Link href={visibility.portalLink.href} className="theme-anchor-link">
            {visibility.portalLink.label}
          </Link>
          <Link href={visibility.supportLink.href} className="theme-anchor-link">
            {visibility.supportLink.label}
          </Link>
        </p>
      </div>
    </Section>
  );
}
