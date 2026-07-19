import { ClipboardList, Package, Zap } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const INPUTS = [
  { label: "פנייה", icon: Zap },
  { label: "הזמנה", icon: Package },
  { label: "משימה", icon: ClipboardList },
] as const;

const CORE_STAGES = ["איסוף", "סדר", "אוטומציה"] as const;

const OUTPUTS = ["מה פתוח", "מה תקוע", "מה דורש החלטה"] as const;

const INPUT_PATH_CLASS = "stroke-slate-400/80 dark:stroke-slate-600/50";
const OUTPUT_PATH_CLASS = "stroke-indigo-300 dark:stroke-blue-500/40";

/**
 * Information Systems hero signature: Ordered Sankey Flow
 * Several operational events enter one organised information core and become
 * three clear management answers.
 */
export function OperationalControlLoop() {
  return (
    <div aria-hidden="true">
      {/* DESKTOP LAYOUT */}
      <div className="mx-auto hidden w-full max-w-[540px] items-center px-8 lg:flex lg:h-[300px]">
        {/* RIGHT: Operational Inputs */}
        <div className="relative z-10 flex w-[100px] shrink-0 flex-col justify-center gap-8">
          {INPUTS.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex h-10 items-center justify-end gap-2 ${motionStyles.rise}`}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <Icon className="h-4 w-4 text-slate-600 dark:text-slate-500" />
              <span className="text-[11px] font-medium text-slate-700 sm:text-xs dark:text-slate-300">{label}</span>
            </div>
          ))}
        </div>

        {/* GAP 1: Inputs to Core */}
        <svg className="h-full flex-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g className={motionStyles.drawX} style={{ animationDelay: "300ms", transformOrigin: "right" }}>
            <path d="M 100 26 C 50 26, 50 50, 0 50" fill="none" className={INPUT_PATH_CLASS} strokeWidth="3" vectorEffect="non-scaling-stroke" />
            <path d="M 100 50 L 0 50" fill="none" className={INPUT_PATH_CLASS} strokeWidth="3" vectorEffect="non-scaling-stroke" />
            <path d="M 100 74 C 50 74, 50 50, 0 50" fill="none" className={INPUT_PATH_CLASS} strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>

        {/* CENTRE: Information Core */}
        <div className="flex shrink-0 flex-col items-center gap-4 pt-4">
          <p
            className={`text-xs font-medium tracking-wide text-slate-900 dark:text-slate-300 ${motionStyles.rise}`}
            style={{ animationDelay: "500ms" }}
          >
            מפעילות לתמונת מצב
          </p>
          <div
            className={`relative z-10 flex w-[130px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white py-6 shadow-lg dark:border-blue-500/20 dark:bg-slate-900/90 ${motionStyles.coreIn}`}
            style={{ animationDelay: "600ms" }}
          >
            <p className="mb-4 text-xs font-semibold text-slate-900 dark:text-blue-100">מערכת מידע</p>
            <div className="flex flex-col gap-3">
              {CORE_STAGES.map((stage, index) => (
                <div
                  key={stage}
                  className={`flex items-center gap-2 ${motionStyles.rise}`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <span className="h-1 w-1 rounded-full bg-blue-500/70 dark:bg-blue-400/60" />
                  <span className="text-[11px] text-slate-700 dark:text-slate-300">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GAP 2: Core to Outputs */}
        <svg className="h-full flex-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g className={motionStyles.drawX} style={{ animationDelay: "900ms", transformOrigin: "right" }}>
            <path d="M 100 50 C 50 50, 50 26, 0 26" fill="none" className={OUTPUT_PATH_CLASS} strokeWidth="3" vectorEffect="non-scaling-stroke" />
            <path d="M 100 50 L 0 50" fill="none" className={OUTPUT_PATH_CLASS} strokeWidth="3" vectorEffect="non-scaling-stroke" />
            <path d="M 100 50 C 50 50, 50 74, 0 74" fill="none" className={OUTPUT_PATH_CLASS} strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>

        {/* LEFT: Management Outputs */}
        <div className="relative z-10 flex w-[120px] shrink-0 flex-col justify-center">
          <div className="flex flex-col gap-8">
            {OUTPUTS.map((label, index) => (
              <div
                key={label}
                className={`flex h-10 items-center justify-start gap-2 ${motionStyles.rise}`}
                style={{ animationDelay: `${1300 + index * 100}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span className="text-[11px] font-medium text-slate-700 sm:text-xs dark:text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="relative mx-auto flex w-full max-w-[300px] flex-col items-center px-4 py-6 lg:hidden">
        {/* TOP: Operational Inputs */}
        <div className="relative z-10 flex w-full justify-evenly">
          {INPUTS.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1.5 ${motionStyles.rise}`}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <Icon className="h-4 w-4 text-slate-600 dark:text-slate-500" />
              <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">{label}</span>
            </div>
          ))}
        </div>

        {/* GAP 1: Inputs to Core */}
        <svg className="h-[60px] w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g className={motionStyles.drawY} style={{ animationDelay: "300ms", transformOrigin: "top" }}>
            <path d="M 16 0 C 16 50, 50 50, 50 100" fill="none" className={INPUT_PATH_CLASS} strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d="M 50 0 L 50 100" fill="none" className={INPUT_PATH_CLASS} strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d="M 84 0 C 84 50, 50 50, 50 100" fill="none" className={INPUT_PATH_CLASS} strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>

        {/* CENTRE: Information Core */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <p
            className={`text-[11px] font-medium tracking-wide text-slate-900 dark:text-slate-300 ${motionStyles.rise}`}
            style={{ animationDelay: "500ms" }}
          >
            מפעילות לתמונת מצב
          </p>
          <div
            className={`relative z-10 flex w-[160px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white py-5 shadow-lg dark:border-blue-500/20 dark:bg-slate-900/90 ${motionStyles.coreIn}`}
            style={{ animationDelay: "600ms" }}
          >
            <p className="mb-3 text-xs font-semibold text-slate-900 dark:text-blue-100">מערכת מידע</p>
            <div className="flex w-full justify-center gap-4">
              {CORE_STAGES.map((stage, index) => (
                <div
                  key={stage}
                  className={`flex flex-col items-center gap-1.5 ${motionStyles.rise}`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <span className="h-1 w-1 rounded-full bg-blue-500/70 dark:bg-blue-400/60" />
                  <span className="text-[10px] text-slate-700 dark:text-slate-300">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GAP 2: Core to Outputs */}
        <svg className="h-[40px] w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g className={motionStyles.drawY} style={{ animationDelay: "900ms", transformOrigin: "top" }}>
            <path d="M 50 0 L 50 100" fill="none" className={OUTPUT_PATH_CLASS} strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>

        {/* BOTTOM: Management Outputs */}
        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="flex w-full flex-col gap-3">
            {OUTPUTS.map((label, index) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-2 ${motionStyles.rise}`}
                style={{ animationDelay: `${1300 + index * 100}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
