import { Cloud, Gauge, Headset, Monitor, Settings, Users, type LucideIcon } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const DOMAINS = [
  { label: "משתמשים", icon: Users },
  { label: "מחשבים", icon: Monitor },
  { label: "ענן", icon: Cloud },
  { label: "תמיכה", icon: Headset },
  { label: "בקרה", icon: Gauge },
] satisfies { label: string; icon: LucideIcon }[];

function DomainNode({ label, icon: Icon, index }: { label: string; icon: LucideIcon; index: number }) {
  return (
    <li
      className={`min-w-0 ${motionStyles.rise}`}
      style={{ animationDelay: `${580 + index * 100}ms` }}
    >
      <span
        className={`mx-auto block h-4 w-px bg-blue-300/70 dark:bg-blue-400/35 ${motionStyles.drawY}`}
        style={{ animationDelay: `${500 + index * 100}ms` }}
      />
      <div className="flex h-[4.75rem] w-full flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-1.5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
        <Icon className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300/80" aria-hidden="true" />
        <span className="text-[10px] font-medium leading-tight text-slate-700 sm:text-[11px] dark:text-slate-300">{label}</span>
      </div>
    </li>
  );
}

/**
 * Managed IT hero signature: one accountable ownership node connecting the full IT
 * environment through a single controlled backbone. The entrance sequence explains
 * ownership once, then settles completely.
 */
export function ManagedOwnershipNode() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden px-1 py-4" aria-hidden="true">
      <div
        className={`relative z-10 mx-auto flex w-max max-w-full items-center gap-3 rounded-full border border-blue-200 bg-white px-5 py-2.5 shadow-sm dark:border-blue-400/30 dark:bg-slate-950 ${motionStyles.riseFromTop}`}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-400/15">
          <Settings className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" />
        </span>
        <span className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">כתובת אחת אחראית</span>
      </div>

      <div
        className={`mx-auto h-5 w-px bg-blue-300/70 dark:bg-blue-400/40 ${motionStyles.drawY}`}
        style={{ animationDelay: "200ms" }}
      />
      <div
        className={`mx-[10%] h-px bg-blue-300/60 dark:bg-blue-400/35 ${motionStyles.drawX}`}
        style={{ animationDelay: "340ms" }}
      />
      <ol className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {DOMAINS.map((domain, index) => (
          <DomainNode key={domain.label} {...domain} index={index} />
        ))}
      </ol>
    </div>
  );
}
