import { ChevronDown } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const LAYERS = [
  { label: "שכבת משתמשים ותמיכה", caption: "היום־יום של העובד" },
  { label: "שכבת מערכות וניטור", caption: "התשתית שמאחורי הקלעים" },
  { label: "שכבת בקרה ושקיפות", caption: "מה שהמנהל רואה" },
];

/**
 * Managed IT signature: Selogic as a 3-layer operating stack, not a card grid.
 * Reuses whatWeDo items, grouped into operating layers.
 */
export function OperatingStackSection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  const items = content.whatWeDo.items;
  const perLayer = Math.ceil(items.length / 3);
  const layers = LAYERS.map((layer, i) => ({
    ...layer,
    items: items.slice(i * perLayer, i * perLayer + perLayer),
  }));

  return (
    <Section tone="white" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading
        eyebrow="שכבת התפעול של Selogic"
        title="שירות IT מנוהל, שכבה על שכבה"
        body={content.whatWeDo.body}
      />

      <div className="mt-8 space-y-3 lg:mt-10">
        {layers.map((layer, index) => (
          <div key={layer.label}>
            <div className="theme-card grid gap-4 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-bold text-blue-600">{`0${index + 1}`}</span>
                <div className="min-w-0">
                  <p className="theme-text-heading text-lg font-semibold">{layer.label}</p>
                  <p className="theme-text-muted mt-0.5 text-sm">{layer.caption}</p>
                </div>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {layer.items.map((item) => (
                  <li key={item.title} className="theme-inner-card px-4 py-3">
                    <p className="theme-text-heading text-sm font-semibold">{item.title}</p>
                    <p className="theme-text-muted mt-0.5 text-xs leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            {index < layers.length - 1 ? (
              <div className="flex justify-center py-1" aria-hidden="true">
                <ChevronDown className="h-5 w-5 text-blue-500/60" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex flex-col gap-2 rounded-2xl border px-5 py-4 sm:flex-row sm:items-center sm:gap-4"
        style={{
          borderColor: "var(--theme-border)",
          backgroundColor: "color-mix(in srgb, var(--theme-surface-tint) 45%, transparent)",
        }}
      >
        <span className="inline-flex items-center gap-2">
          <StatusDot kind="closed" />
          <span className="theme-text-heading text-sm font-semibold">{content.sla.title}</span>
        </span>
        <span className="theme-text-muted text-sm leading-relaxed">
          {content.sla.body}
        </span>
      </div>
    </Section>
  );
}
