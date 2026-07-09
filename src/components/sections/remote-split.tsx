import { Check, MonitorSmartphone } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const TRAIL = [
  "קריאה נפתחת בכל ערוץ",
  "בעל טיפול משויך",
  "מה שבוצע על המחשב מתועד",
  "סטטוס גלוי בפורטל",
  "היסטוריה נשמרת לתקלה הבאה",
];

/**
 * Remote support signature: fast help that stays documented.
 * Left = live session flow; Right = the documentation trail that remains after.
 */
export function RemoteSplitSection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  return (
    <Section tone="tint" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading title={content.howItWorks?.title ?? ""} body={content.howItWorks?.body ?? ""} />

      <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-6">
        <div className="theme-card overflow-hidden">
          <div className="flex items-center gap-2 border-b px-5 py-3" style={{ borderColor: "var(--theme-border)" }}>
            <MonitorSmartphone className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="theme-text-heading text-sm font-semibold">מהלך החיבור</span>
            <span className="theme-text-muted font-mono text-[11px] uppercase tracking-[0.16em]">LIVE</span>
          </div>
          <ol className="relative space-y-4 px-5 py-5">
            {(content.howItWorks?.steps ?? []).map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  {step.n}
                </span>
                <div className="min-w-0">
                  <p className="theme-text-heading text-sm font-semibold">{step.title}</p>
                  {step.body ? <p className="theme-text-muted mt-0.5 text-xs leading-relaxed">{step.body}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="theme-card overflow-hidden ring-1 ring-inset ring-blue-500/25">
          <div
            className="flex items-center gap-2 border-b px-5 py-3"
            style={{
              borderColor: "var(--theme-border)",
              backgroundColor: "color-mix(in srgb, var(--theme-surface-tint) 55%, transparent)",
            }}
          >
            <StatusDot kind="closed" />
            <span className="theme-text-heading text-sm font-semibold">מה נשאר מתועד</span>
          </div>
          <ul className="px-5 py-2">
            {TRAIL.map((line, index) => (
              <li
                key={line}
                className={`flex items-start gap-3 py-3 ${index > 0 ? "theme-divider" : ""}`}
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                <p className="theme-text-body text-sm leading-relaxed">{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
