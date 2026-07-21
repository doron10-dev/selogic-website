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
        <div className="flex flex-col gap-3 sm:gap-3.5">
          <div>
            <h2 className="font-display theme-text-heading text-lg font-bold leading-snug sm:text-xl">
              {visibility.title}
            </h2>
            <p className="theme-text-muted mt-1.5 max-w-3xl text-sm leading-relaxed">{visibility.body}</p>
          </div>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            {visibility.points.map((point) => (
              <li key={point} className="theme-text-body text-sm leading-snug">
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-y-1 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1">
            <Link href={visibility.portalLink.href} className="theme-anchor-link text-sm">
              {visibility.portalLink.label}
            </Link>
            <Link href={visibility.supportLink.href} className="theme-anchor-link text-sm">
              {visibility.supportLink.label}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
