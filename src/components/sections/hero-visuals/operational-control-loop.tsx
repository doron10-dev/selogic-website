import { ClipboardList, LayoutDashboard, Package, Workflow, Zap, type LucideIcon } from "lucide-react";
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
 * canvas. Operational inputs flow through a continuous transformation channel
 * into a dominant management-control panel.
 * Reduced to three clear zones to avoid visual clutter.
 */
export function OperationalControlLoop() {
  return (
    <div
      className={`mx-auto flex w-full max-w-lg flex-col gap-5 lg:flex-row lg:items-center lg:gap-4 ${motionStyles.rise}`}
      aria-hidden="true"
    >
      {/* RIGHT: Business Activity (Lightweight group, no individual cards) */}
      <div className="flex shrink-0 flex-col items-center gap-3 lg:items-end">
        <p
          className={`text-[11px] font-semibold tracking-wide text-slate-400 sm:text-xs ${motionStyles.riseFromTop}`}
          style={{ animationDelay: "100ms" }}
        >
          פעילות עסקית
        </p>
        <ul className="flex justify-center gap-4 lg:flex-col lg:items-start lg:gap-3">
          {INPUTS.map(({ label, icon: Icon }, index) => (
            <li
              key={label}
              className={`flex items-center gap-2 ${motionStyles.rise}`}
              style={{ animationDelay: `${180 + index * 70}ms` }}
            >
              <Icon className="h-4 w-4 text-slate-500" />
              <span className="text-[11px] font-medium text-slate-300 sm:text-xs">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CENTER: Transformation Channel (One continuous path) */}
      <div className="flex flex-1 flex-col items-center justify-center lg:flex-row">
        <div
          className={`relative flex w-full max-w-[200px] flex-col items-center gap-2 rounded-full border border-blue-400/20 bg-slate-900/50 py-2.5 lg:max-w-none lg:flex-row lg:justify-between lg:px-4 lg:py-2 ${motionStyles.drawX}`}
          style={{ animationDelay: "450ms", transformOrigin: "right" }}
        >
          {CHANNEL.map((stage, index) => (
            <div
              key={stage}
              className={`flex items-center gap-1.5 ${motionStyles.rise}`}
              style={{ animationDelay: `${550 + index * 90}ms` }}
            >
              {index === 2 ? (
                <Workflow className="h-3.5 w-3.5 text-blue-400/80" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/50" />
              )}
              <span className="text-[10px] font-medium text-slate-300 sm:text-[11px]">{stage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* LEFT: Management Control (Dominant panel) */}
      <div
        className={`w-full shrink-0 rounded-2xl border border-blue-400/30 bg-slate-950/95 p-4 shadow-md lg:w-48 ${motionStyles.coreIn}`}
        style={{ animationDelay: "850ms" }}
      >
        <div className="mb-4 flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15">
            <LayoutDashboard className="h-4 w-4 text-blue-300" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-100">בקרה ניהולית</p>
            <p className="text-[10px] text-slate-400">תמונת מצב לקבלת החלטות</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {OBSERVATIONS.map((label, index) => (
            <li
              key={label}
              className={`flex items-center gap-2 border-t border-slate-800/60 pt-2 first:border-0 first:pt-0 ${motionStyles.rise}`}
              style={{ animationDelay: `${1000 + index * 90}ms` }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
              <span className="text-[11px] text-slate-300 sm:text-xs">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
