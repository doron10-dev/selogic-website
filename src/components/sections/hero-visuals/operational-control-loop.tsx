import { ChevronLeft, ClipboardList, LayoutDashboard, Package, Workflow, Zap, type LucideIcon } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const INPUTS: { label: string; icon: LucideIcon }[] = [
  { label: "פנייה", icon: Zap },
  { label: "הזמנה", icon: Package },
  { label: "משימה", icon: ClipboardList },
];

const CHANNEL = ["מערכת מידע", "מידע מסודר", "תהליך אוטומטי"] as const;

const OBSERVATIONS = ["מה פתוח", "מה תקוע", "מה דורש החלטה"] as const;

/**
 * Information Systems hero signature: an asymmetric horizontal transformation
 * canvas. Operational inputs (right, RTL) flow through a transformation channel
 * into a dominant management-control panel (left). Deliberately horizontal and
 * asymmetric — not a centred vertical stack or numbered process flow.
 */
export function OperationalControlLoop() {
  return (
    <div
      className={`mx-auto flex w-full max-w-lg flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2 ${motionStyles.rise}`}
      aria-hidden="true"
    >
      {/* Operational inputs (right in RTL) */}
      <div className="flex shrink-0 flex-row gap-2 lg:flex-col lg:justify-center">
        {INPUTS.map(({ label, icon: Icon }, index) => (
          <div
            key={label}
            className={`flex flex-1 items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-2 lg:flex-none ${motionStyles.rise}`}
            style={{ animationDelay: `${100 + index * 70}ms` }}
          >
            <Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <span className="text-[10px] font-medium text-slate-300 sm:text-[11px]">{label}</span>
          </div>
        ))}
      </div>

      {/* Transformation channel */}
      <div className="flex items-center justify-center gap-1 lg:flex-col lg:justify-center lg:px-1">
        <span
          className={`h-px w-6 bg-blue-400/30 lg:h-5 lg:w-px ${motionStyles.drawX}`}
          style={{ animationDelay: "340ms", transformOrigin: "right" }}
        />
        <div className="flex flex-1 flex-col gap-1.5 lg:flex-none">
          {CHANNEL.map((stage, index) => (
            <div
              key={stage}
              className={`flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 ${motionStyles.drawX}`}
              style={{ animationDelay: `${420 + index * 90}ms`, transformOrigin: "right" }}
            >
              {index === 2 ? (
                <Workflow className="h-3 w-3 shrink-0 text-blue-300/80" />
              ) : (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/50" aria-hidden="true" />
              )}
              <span className="whitespace-nowrap text-[10px] font-medium text-slate-300 sm:text-[11px]">{stage}</span>
            </div>
          ))}
        </div>
        <ChevronLeft
          className={`hidden h-4 w-4 shrink-0 text-blue-400/60 lg:block ${motionStyles.emphasis}`}
          style={{ animationDelay: "700ms" }}
        />
      </div>

      {/* Dominant management-control panel (left in RTL) */}
      <div
        className={`flex-1 rounded-xl border border-blue-400/25 bg-slate-950/95 p-3.5 shadow-sm sm:p-4 ${motionStyles.coreIn}`}
        style={{ animationDelay: "760ms" }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/10">
            <LayoutDashboard className="h-4 w-4 text-blue-300" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-100">בקרה ניהולית</p>
            <p className="text-[10px] text-slate-500">תמונת מצב לקבלת החלטות</p>
          </div>
        </div>
        <ul className="space-y-1.5">
          {OBSERVATIONS.map((label, index) => (
            <li
              key={label}
              className={`flex items-center gap-2 rounded-md border border-slate-800/80 bg-slate-900/60 px-3 py-2 ${motionStyles.rise}`}
              style={{ animationDelay: `${900 + index * 90}ms` }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" aria-hidden="true" />
              <span className="text-[10px] text-slate-300 sm:text-[11px]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
