import { Cloud, Gauge, Headset, Monitor, ShieldCheck, Users, type LucideIcon } from "lucide-react";

type Domain = { label: string; icon: LucideIcon };

const DOMAINS: Domain[] = [
  { label: "משתמשים", icon: Users },
  { label: "מחשבים", icon: Monitor },
  { label: "ענן", icon: Cloud },
  { label: "תמיכה", icon: Headset },
  { label: "בקרה", icon: Gauge },
];

/**
 * Managed IT hero signature: one accountable ownership node at the top, with
 * the connected IT domains it is responsible for fanning out below it. It reads
 * as "one address owns the whole environment" — deliberately NOT the numbered
 * three-layer OperatingStackSection rendered lower on the page (different
 * metaphor: hub-and-responsibility, not a layered stack). Decorative only.
 */
export function ManagedOwnershipNode() {
  return (
    <div
      className="theme-card relative mx-auto w-full max-w-md p-5 sm:p-6"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-blue-600 px-4 py-3.5 text-white">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight">כתובת אחת אחראית</p>
          <p className="mt-0.5 text-xs text-blue-100">ניהול, אחריות ובקרה במקום אחד</p>
        </div>
      </div>

      <div className="flex justify-center py-1.5" aria-hidden="true">
        <span className="block h-4 w-px bg-blue-500/40" />
      </div>

      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {DOMAINS.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="theme-inner-card flex flex-col items-center gap-1.5 px-3 py-3 text-center"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="theme-text-heading text-[13px] font-medium">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
