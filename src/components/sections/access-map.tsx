import { ChevronLeft, KeyRound, Mail, ShieldCheck, Users } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const NODES = [
  { icon: Users, label: "משתמשים", chips: ["עובד חדש", "שינוי תפקיד", "עוזב"] },
  { icon: KeyRound, label: "הרשאות", chips: ["גישה לפי תפקיד", "פתיחה וסגירה"] },
  { icon: Mail, label: "תיבות וקבצים", chips: ["דואר", "SharePoint", "Teams"] },
  { icon: ShieldCheck, label: "מדיניות ותיעוד", chips: ["רישיונות", "תיעוד שינויים"] },
];

/**
 * Microsoft 365 signature: identity & access map — users → permissions → resources → policy.
 * Access chips flowing across nodes, not a generic benefits grid.
 */
export function AccessMapSection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  return (
    <Section tone="tint" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading eyebrow="מפת זהות והרשאות" title="מי · מה מותר · לאן · לפי מדיניות" body={content.whatWeDo.body} />

      <div className="mt-8 grid gap-3 lg:mt-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-2">
        {NODES.map((node, index) => (
          <div key={node.label} className="contents">
            <div className="theme-card flex flex-col p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
                  <node.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="theme-text-heading text-sm font-semibold">{node.label}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {node.chips.map((chip) => (
                  <span key={chip} className="badge-pill theme-badge-note text-[11px]">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            {index < NODES.length - 1 ? (
              <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
                <ChevronLeft className="hidden h-5 w-5 text-blue-500/60 lg:block" />
                <ChevronLeft className="h-4 w-4 rotate-[-90deg] text-blue-500/60 lg:hidden" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
