import { ClipboardList, Package, Zap } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const INPUTS = [
  { label: "פנייה", icon: Zap },
  { label: "הזמנה", icon: Package },
  { label: "משימה", icon: ClipboardList },
] as const;

const CHANNEL = ["מערכת מידע", "מידע מסודר", "אוטומציה"] as const;

const OBSERVATIONS = ["מה פתוח", "מה תקוע", "מה דורש החלטה"] as const;

/**
 * Information Systems hero signature: Operational Signal Stream → Management Control Lens
 * Scattered business activity enters one organised information stream and
 * becomes a clear management picture.
 */
export function OperationalControlLoop() {
  return (
    <div
      className={`mx-auto flex w-full max-w-[540px] flex-col items-center gap-6 lg:h-[300px] lg:flex-row lg:justify-between lg:gap-0 ${motionStyles.rise}`}
      aria-hidden="true"
    >
      {/* RIGHT: Operational Signals (Lightweight, scattered) */}
      <div className="relative z-10 flex shrink-0 flex-row justify-center gap-4 lg:w-[120px] lg:flex-col lg:items-end lg:gap-6">
        {INPUTS.map(({ label, icon: Icon }, index) => (
          <div
            key={label}
            className={`flex items-center gap-2 ${motionStyles.rise}`}
            style={{
              animationDelay: `${100 + index * 100}ms`,
              // Slight vertical scatter on desktop
              transform: `translateY(${index === 0 ? "8px" : index === 2 ? "-8px" : "0px"})`,
            }}
          >
            <Icon className="h-4 w-4 text-slate-500" />
            <span className="text-[11px] font-medium text-slate-300 sm:text-xs">{label}</span>
            {/* Connector to stream (desktop only) */}
            <div className="hidden h-[1px] w-4 bg-slate-700 lg:block" />
          </div>
        ))}
      </div>

      {/* CENTER: Continuous Information Stream */}
      <div className="relative flex flex-1 flex-col items-center justify-center lg:h-full lg:flex-row">
        {/* The main flowing path */}
        <div
          className={`absolute left-0 right-0 top-1/2 hidden h-[1px] -translate-y-1/2 bg-gradient-to-l from-slate-700 via-blue-500/40 to-blue-400/80 lg:block ${motionStyles.drawX}`}
          style={{ animationDelay: "400ms", transformOrigin: "right" }}
        />
        {/* Mobile vertical path */}
        <div
          className={`absolute bottom-0 top-0 left-1/2 block w-[1px] -translate-x-1/2 bg-gradient-to-t from-blue-400/80 via-blue-500/40 to-slate-700 lg:hidden ${motionStyles.drawY}`}
          style={{ animationDelay: "400ms", transformOrigin: "top" }}
        />

        <div className="relative z-10 flex w-full flex-col items-center gap-8 py-4 lg:flex-row lg:justify-around lg:gap-0 lg:py-0">
          {CHANNEL.map((stage, index) => (
            <div
              key={stage}
              className={`flex flex-col items-center gap-2 lg:bg-slate-950/80 lg:px-2 ${motionStyles.rise}`}
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              <span className="text-[10px] font-medium text-slate-300 sm:text-[11px]">{stage}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT: Management Control Lens (Dominant focal element) */}
      <div
        className={`relative z-20 flex aspect-square w-full max-w-[220px] shrink-0 flex-col items-center justify-center rounded-full border border-blue-400/30 bg-slate-900/80 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-sm lg:w-[220px] ${motionStyles.coreIn}`}
        style={{ animationDelay: "1100ms" }}
      >
        <div className="mb-5 text-center">
          <p className="text-sm font-semibold text-slate-100">בקרה ניהולית</p>
          <p className="text-[10px] text-slate-400">תמונת מצב לקבלת החלטות</p>
        </div>

        <ul className="flex w-full flex-col gap-3 px-8">
          {OBSERVATIONS.map((label, index) => (
            <li
              key={label}
              className={`flex items-center justify-between border-t border-slate-800/60 pt-3 first:border-0 first:pt-0 ${motionStyles.rise}`}
              style={{ animationDelay: `${1300 + index * 100}ms` }}
            >
              <span className="text-[11px] text-slate-300 sm:text-xs">{label}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
