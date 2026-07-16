import { DatabaseBackup, KeyRound, Laptop, Mail, Network, ShieldHalf } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const PERIMETER = [
  { label: "זהויות", icon: KeyRound, pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
  { label: "דואר", icon: Mail, pos: "right-0 top-1/4 translate-x-1/3" },
  { label: "קצה", icon: Laptop, pos: "right-0 bottom-1/4 translate-x-1/3" },
  { label: "רשת", icon: Network, pos: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" },
  { label: "שחזור", icon: DatabaseBackup, pos: "left-0 top-1/3 -translate-x-1/3" },
] as const;

/**
 * Cybersecurity hero signature: a concentric defensive perimeter. A central
 * business core is wrapped by segmented rings; defence domains sit around the
 * perimeter and an incoming signal is contained before reaching the core.
 * Radial silhouette — deliberately not a tree, ladder, funnel or card row.
 */
export function SecurityPostureSignal() {
  return (
    <div className="mx-auto flex w-full max-w-sm items-center justify-center py-6" aria-hidden="true">
      <div className="relative aspect-square w-[17rem] sm:w-[19rem]">
        {/* Outer segmented perimeter */}
        <div
          className={`absolute inset-0 rounded-full border-2 border-dashed border-slate-700/70 ${motionStyles.emphasis}`}
          style={{ animationDelay: "260ms" }}
        />
        {/* Inner perimeter */}
        <div
          className={`absolute inset-[3.25rem] rounded-full border border-blue-400/30 ${motionStyles.emphasis}`}
          style={{ animationDelay: "160ms" }}
        />

        {/* Contained incoming signal (stops before core, upper-left approach) */}
        <span
          className={`absolute left-[16%] top-[16%] h-2.5 w-2.5 rounded-full bg-blue-400/70 ${motionStyles.emphasis}`}
          style={{ animationDelay: "900ms" }}
        />

        {/* Business core */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-blue-500/40 bg-blue-600/10 text-center backdrop-blur-sm ${motionStyles.coreIn}`}
          style={{ animationDelay: "60ms" }}
        >
          <ShieldHalf className="h-5 w-5 text-blue-300" />
          <span className="px-1 text-[10px] font-semibold leading-tight text-blue-100">ליבה עסקית</span>
        </div>

        {/* Perimeter defence domains */}
        {PERIMETER.map((domain, index) => (
          <div
            key={domain.label}
            className={`absolute ${domain.pos} flex flex-col items-center gap-1 ${motionStyles.emphasis}`}
            style={{ animationDelay: `${480 + index * 90}ms` }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-300 shadow-sm">
              <domain.icon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-medium text-slate-400">{domain.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
