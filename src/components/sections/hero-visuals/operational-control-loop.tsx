import { ClipboardList, LayoutDashboard, Package, Workflow, Zap } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const INPUTS = [
  { label: "פנייה", icon: Zap },
  { label: "הזמנה", icon: Package },
  { label: "משימה", icon: ClipboardList },
] as const;

const CONTROL_OUTPUTS = ["מה פתוח", "מה תקוע", "מה דורש החלטה"] as const;

/**
 * Information Systems hero signature: operational signals converge into structured
 * information, pass through automation, and arrive at management control.
 * Asymmetric operational panel — not a ProcessFlow duplicate or ticket card.
 */
export function OperationalControlLoop() {
  return (
    <div
      className={`mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/95 p-4 shadow-sm sm:min-h-[340px] sm:p-5 ${motionStyles.rise}`}
      aria-hidden="true"
    >
      <div className="flex min-h-[280px] flex-col gap-3 sm:min-h-[300px] sm:gap-4">
        {/* Operational inputs */}
        <ul className="flex justify-center gap-2 sm:gap-3">
          {INPUTS.map(({ label, icon: Icon }, index) => (
            <li
              key={label}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-2.5 ${motionStyles.riseFromTop}`}
              style={{ animationDelay: `${100 + index * 80}ms` }}
            >
              <Icon className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[10px] font-medium text-slate-300 sm:text-[11px]">{label}</span>
            </li>
          ))}
        </ul>

        {/* Convergence lines */}
        <div className="flex justify-evenly px-6">
          {[0, 1, 2].map((line) => (
            <span
              key={line}
              className={`h-4 w-px bg-slate-700 ${motionStyles.drawY}`}
              style={{ animationDelay: `${360 + line * 40}ms` }}
            />
          ))}
        </div>

        {/* System layer */}
        <div className="flex flex-col items-center">
          <div
            className={`flex w-full max-w-xs items-center gap-3 rounded-xl border border-blue-400/25 bg-slate-900 px-4 py-3 ${motionStyles.coreIn}`}
            style={{ animationDelay: "480ms" }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/10">
              <LayoutDashboard className="h-4 w-4 text-blue-300" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-100">מערכת מידע</p>
              <p className="text-[10px] text-slate-500 sm:text-[11px]">מידע מסודר</p>
            </div>
          </div>
          <span
            className={`h-4 w-px bg-blue-400/30 ${motionStyles.drawY}`}
            style={{ animationDelay: "600ms" }}
          />
        </div>

        {/* Automation path */}
        <div
          className={`mx-auto flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 ${motionStyles.filterIn}`}
          style={{ animationDelay: "680ms" }}
        >
          <Workflow className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[11px] font-semibold text-slate-300 sm:text-xs">תהליך אוטומטי</span>
        </div>

        <span
          className={`mx-auto h-4 w-px bg-blue-400/30 ${motionStyles.drawY}`}
          style={{ animationDelay: "760ms" }}
        />

        {/* Control output */}
        <div
          className={`mt-auto rounded-xl border border-blue-400/20 bg-blue-600/5 p-3 sm:p-4 ${motionStyles.coreIn}`}
          style={{ animationDelay: "840ms" }}
        >
          <p className="mb-2.5 text-center text-xs font-semibold text-blue-100 sm:text-sm">בקרה ניהולית</p>
          <ul className="space-y-2">
            {CONTROL_OUTPUTS.map((label, index) => (
              <li
                key={label}
                className={`flex items-center gap-2 rounded-md border border-slate-800/80 bg-slate-900/60 px-3 py-2 ${motionStyles.rise}`}
                style={{ animationDelay: `${960 + index * 80}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" aria-hidden="true" />
                <span className="text-[10px] text-slate-300 sm:text-[11px]">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
