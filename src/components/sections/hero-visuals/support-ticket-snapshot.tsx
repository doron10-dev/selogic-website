import { FileText, Inbox, User, Wrench } from "lucide-react";
import { StatusDot } from "@/components/status-dot";
import motionStyles from "./hero-visual-motion.module.css";

type Field = {
  icon: typeof Inbox;
  label: string;
  value: string;
  kind: "open" | "progress" | "waiting" | "closed";
  active?: boolean;
};

const FIELDS: Field[] = [
  { icon: Inbox, label: "התקבלה", value: "הפנייה נרשמה בערוץ מסודר", kind: "closed" },
  { icon: User, label: "בעל טיפול", value: "מוגדר גורם אחראי", kind: "closed" },
  { icon: Wrench, label: "סטטוס נוכחי", value: "בטיפול, עם עדכון ללקוח", kind: "progress", active: true },
  { icon: FileText, label: "תיעוד", value: "היסטוריית טיפול זמינה בפורטל", kind: "open" },
];

/**
 * Technical Support hero signature: a single service-ticket record snapshot —
 * what a customer can understand while a request is being handled. It is NOT
 * the numbered horizontal lifecycle of ServiceJourneySection.
 * No fabricated ticket numbers, SLA percentages, response times or names.
 */
export function SupportTicketSnapshot() {
  return (
    <div
      className={`theme-card mx-auto w-full max-w-md p-5 sm:p-6 ${motionStyles.rise}`}
      aria-hidden="true"
    >
      <div
        className="mb-4 flex items-center justify-between gap-3 border-b pb-3"
        style={{ borderColor: "var(--theme-border)" }}
      >
        <span className="theme-text-heading text-sm font-semibold">קריאת שירות</span>
        <span
          className={`badge-pill theme-status-badge--blue border ${motionStyles.emphasis}`}
          style={{ animationDelay: "620ms" }}
        >
          <StatusDot kind="progress" />
          בטיפול
        </span>
      </div>

      <ul className="space-y-2.5">
        {FIELDS.map(({ icon: Icon, label, value, kind, active }, index) => (
          <li
            key={label}
            className={`theme-inner-card flex items-start gap-3 px-3.5 py-2.5 ${motionStyles.rise}`}
            style={{ animationDelay: `${180 + index * 110}ms` }}
          >
            <span
              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                active
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                  : "bg-slate-100 text-slate-500 dark:bg-slate-800/50 dark:text-slate-400"
              }`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <StatusDot kind={kind} />
                <span className="theme-text-heading text-[13px] font-semibold">{label}</span>
              </div>
              <p className="theme-text-muted mt-0.5 text-xs leading-relaxed">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
