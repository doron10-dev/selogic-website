import { ChevronLeft, Globe, MonitorSmartphone, Network, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const NODES = [
  { icon: Globe, label: "אינטרנט", note: "קו וספק" },
  { icon: ShieldCheck, label: "חומת אש / ראוטר", note: "סינון וגישה" },
  { icon: Network, label: "מתגים ו-Wi-Fi", note: "רשת קווית ואלחוטית" },
  { icon: MonitorSmartphone, label: "משתמשים וטלפוניה", note: "עמדות וקצה" },
];

/**
 * Networks signature: the connectivity path — internet → firewall → switches/Wi-Fi → endpoints.
 * A monitored network map (icon nodes + connectors + status markers), not a generic grid.
 */
export function NetworkMapSection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  return (
    <Section tone="tint" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading
        title="מסלול החיבור, מקצה לקצה, מנוטר"
        body="מהאינטרנט ועד העמדה — כל חוליה בשרשרת מנוהלת ומנוטרת, עם גורם אחד אחראי על כל הדרך."
      />

      <div className="theme-card mt-8 p-5 sm:p-6 lg:mt-10">
        <ol className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-2">
          {NODES.map((node, index) => (
            <li key={node.label} className="contents">
              <div className="theme-inner-card flex flex-col items-center p-4 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
                  <node.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="theme-text-heading mt-2.5 text-sm font-semibold">{node.label}</p>
                <p className="theme-text-muted mt-0.5 text-xs">{node.note}</p>
                <span className="mt-2 inline-flex items-center gap-1.5">
                  <StatusDot kind="closed" />
                  <span className="theme-text-muted font-mono text-[10px] uppercase tracking-[0.16em]">מנוטר</span>
                </span>
              </div>
              {index < NODES.length - 1 ? (
                <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
                  <ChevronLeft className="hidden h-6 w-6 text-blue-500/60 lg:block" />
                  <ChevronLeft className="h-5 w-5 rotate-[-90deg] text-blue-500/60 lg:hidden" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <div
          className="mt-5 flex items-start gap-3 border-t pt-4"
          style={{ borderColor: "var(--theme-border)" }}
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="theme-text-body text-sm leading-relaxed">
            <span className="theme-text-heading font-semibold">גורם אחד אחראי על כל השרשרת</span> — סלוג׳יק
            מתאמת מול ספק האינטרנט, הטלפוניה והתקשורת. לא אתם.
          </p>
        </div>
      </div>
    </Section>
  );
}
