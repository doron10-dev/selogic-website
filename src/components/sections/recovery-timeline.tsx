import { AlertTriangle, DatabaseBackup, RotateCcw, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const RECOVERY = [
  { icon: AlertTriangle, label: "אירוע", note: "תקלה, מחיקה או כשל חומרה." },
  { icon: DatabaseBackup, label: "נקודת גיבוי", note: "הגיבוי האחרון שנבדק וזמין לשחזור." },
  { icon: RotateCcw, label: "שחזור", note: "החזרת הנתונים לפי תהליך מוגדר." },
  { icon: ShieldCheck, label: "אימות", note: "בדיקה שהמידע חזר ותקין." },
];

/**
 * Backup signature: the recovery path — event → backup point → restore → verify.
 * A confidence-oriented horizontal timeline (green accent), not generic IT cards.
 */
export function RecoveryTimelineSection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  return (
    <Section tone="tint" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading title="מסלול ההתאוששות: מאירוע ועד חזרה לעבודה" body={content.clientGains.body} />

      <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
        {RECOVERY.map((step, index) => (
          <li key={step.label} className="theme-card relative flex flex-col p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {`0${index + 1}`}
              </span>
            </div>
            <p className="theme-text-heading mt-3 text-base font-semibold">{step.label}</p>
            <p className="theme-text-muted mt-1 text-sm leading-relaxed">{step.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
