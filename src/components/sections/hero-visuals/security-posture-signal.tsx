import { DatabaseBackup, KeyRound, Laptop, Mail, Network, ShieldHalf } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const PERIMETER = [
  {
    label: "זהויות",
    icon: KeyRound,
    pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
    labelClassName: "bottom-full left-1/2 mb-2.5 -translate-x-1/2 text-center",
  },
  {
    label: "דואר",
    icon: Mail,
    pos: "right-0 top-[22%] translate-x-1/4",
    labelClassName: "left-full top-1/2 ml-2.5 -translate-y-1/2 text-right",
  },
  {
    label: "קצה",
    icon: Laptop,
    pos: "right-0 bottom-[22%] translate-x-1/4",
    labelClassName: "left-full top-1/2 ml-2.5 -translate-y-1/2 text-right",
  },
  {
    label: "רשת",
    icon: Network,
    pos: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
    labelClassName: "top-full left-1/2 mt-2.5 -translate-x-1/2 text-center",
  },
  {
    label: "שחזור",
    icon: DatabaseBackup,
    pos: "left-0 top-1/3 -translate-x-1/4",
    labelClassName: "right-full top-1/2 mr-2.5 -translate-y-1/2 text-left",
  },
] as const;

/**
 * Cybersecurity hero signature: a concentric defensive perimeter. A central
 * business core is wrapped by segmented rings; defence domains sit around the
 * perimeter and an incoming signal is contained before reaching the core.
 * Radial silhouette — deliberately not a tree, ladder, funnel or card row.
 */
export function SecurityPostureSignal() {
  return (
    <div className="mx-auto flex w-full max-w-sm items-center justify-center px-4 py-8 sm:px-6" aria-hidden="true">
      <div className="relative aspect-square w-[16rem] sm:w-[18rem]">
        {/* Outer segmented perimeter */}
        <div
          className={`absolute inset-3 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700/70 sm:inset-4 ${motionStyles.emphasis}`}
          style={{ animationDelay: "260ms" }}
        />
        {/* Inner perimeter */}
        <div
          className={`absolute inset-[3rem] rounded-full border border-blue-300 dark:border-blue-400/30 sm:inset-[3.25rem] ${motionStyles.emphasis}`}
          style={{ animationDelay: "160ms" }}
        />

        {/* Contained incoming signal (stops before core, upper-left approach) */}
        <span
          className={`absolute left-[18%] top-[18%] h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-blue-400/70 ${motionStyles.emphasis}`}
          style={{ animationDelay: "900ms" }}
        />

        {/* Business core */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-blue-300 bg-indigo-50 text-center shadow-sm backdrop-blur-sm dark:border-blue-500/40 dark:bg-blue-600/10 ${motionStyles.coreIn}`}
          style={{ animationDelay: "60ms" }}
        >
          <ShieldHalf className="h-5 w-5 text-blue-600 dark:text-blue-300" />
          <span className="px-1 text-[10px] font-semibold leading-tight text-slate-900 dark:text-blue-100">ליבה עסקית</span>
        </div>

        {/* Perimeter defence domains */}
        {PERIMETER.map((domain, index) => (
          <div
            key={domain.label}
            className={`absolute ${domain.pos} ${motionStyles.emphasis}`}
            style={{ animationDelay: `${480 + index * 90}ms` }}
          >
            <div className="relative">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                <domain.icon className="h-4 w-4" />
              </span>
              <span
                className={`absolute whitespace-nowrap text-[10px] font-medium text-slate-600 dark:text-slate-400 ${domain.labelClassName}`}
              >
                {domain.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
