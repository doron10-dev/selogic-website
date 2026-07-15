import { DatabaseBackup, KeyRound, Laptop, Lock, Mail, Network, type LucideIcon } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

type Signal = { label: string; icon: LucideIcon };

const SIGNALS: Signal[] = [
  { label: "זהויות", icon: KeyRound },
  { label: "קצה", icon: Laptop },
  { label: "דואר", icon: Mail },
  { label: "רשת", icon: Network },
  { label: "שחזור", icon: DatabaseBackup },
];

/**
 * Cybersecurity hero signature: several coordinated defenses protecting the business core.
 * Uses a layered "funnel" or "filter" topology rather than a flat card grid.
 * No decorative check marks, generic shields, or fake "secure" status.
 */
export function SecurityPostureSignal() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-0 py-4" aria-hidden="true">
      {/* Incoming Signals */}
      <div className="flex w-full justify-between px-2 sm:px-6">
        {SIGNALS.map((s, index) => (
          <div
            key={s.label}
            className={`flex flex-col items-center gap-2 ${motionStyles.riseFromTop}`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400">
              <s.icon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-medium text-slate-500">{s.label}</span>
            <span
              className={`h-5 w-px bg-slate-700 ${motionStyles.drawY}`}
              style={{ animationDelay: `${340 + index * 40}ms` }}
            />
          </div>
        ))}
      </div>

      {/* Filter Layer 1 */}
      <div
        className={`h-2 w-full rounded-full border border-slate-700 bg-slate-900/70 ${motionStyles.filterIn}`}
        style={{ animationDelay: "480ms" }}
      />
      <div className="flex w-full justify-evenly px-8">
        {[0, 1, 2].map((connector) => (
          <span
            key={connector}
            className={`h-5 w-px bg-slate-700 ${motionStyles.drawY}`}
            style={{ animationDelay: `${640 + connector * 40}ms` }}
          />
        ))}
      </div>

      {/* Filter Layer 2 */}
      <div
        className={`h-2 w-4/5 rounded-full border border-blue-400/25 bg-slate-800/70 ${motionStyles.filterIn}`}
        style={{ animationDelay: "750ms" }}
      />
      <div className="flex w-3/5 justify-evenly">
        {[0, 1].map((connector) => (
          <span
            key={connector}
            className={`h-5 w-px bg-blue-400/30 ${motionStyles.drawY}`}
            style={{ animationDelay: `${870 + connector * 50}ms` }}
          />
        ))}
      </div>

      {/* Core */}
      <div
        className={`z-10 mt-1 flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-600/10 px-6 py-4 backdrop-blur-sm ${motionStyles.coreIn}`}
        style={{ animationDelay: "980ms" }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
          <Lock className="h-4 w-4 text-blue-400" />
        </span>
        <div>
          <p className="text-sm font-semibold text-blue-100">הליבה העסקית</p>
          <p className="text-[11px] text-blue-300/70">מערכות ומידע מוגנים</p>
        </div>
      </div>
    </div>
  );
}
