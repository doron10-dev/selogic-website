import { DatabaseBackup, KeyRound, Laptop, Lock, Mail, Network, type LucideIcon } from "lucide-react";

type Signal = { label: string; icon: LucideIcon };

const SIGNALS: Signal[] = [
  { label: "זהויות", icon: KeyRound },
  { label: "קצה", icon: Laptop },
  { label: "דואר", icon: Mail },
  { label: "רשת", icon: Network },
  { label: "שחזור", icon: DatabaseBackup },
];

/**
 * Cybersecurity hero signature: a protected business core with several control
 * signals converging into it — security as one coordinated method, not a single
 * product. Deliberately NOT the numbered vertical defense-in-depth list of
 * SecurityLayers (different composition: convergent signals around a core, no
 * numbering, no per-item paragraphs, short signal words). No live status,
 * scores, percentages or incident counts. Decorative only.
 */
export function SecurityPostureSignal() {
  return (
    <div
      className="theme-card mx-auto w-full max-w-md p-5 sm:p-6"
      aria-hidden="true"
    >
      <ul className="grid grid-cols-3 gap-2.5">
        {SIGNALS.slice(0, 3).map(({ label, icon: Icon }) => (
          <SignalChip key={label} label={label} icon={Icon} />
        ))}
      </ul>

      <div className="flex justify-center py-2" aria-hidden="true">
        <span className="block h-4 w-px bg-blue-500/40" />
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-blue-500/40 bg-blue-600 px-4 py-3.5 text-white">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
          <Lock className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight">הליבה העסקית</p>
          <p className="mt-0.5 text-xs text-blue-100">מידע ומערכות שכל השכבות מגנות עליהן</p>
        </div>
      </div>

      <div className="flex justify-center py-2" aria-hidden="true">
        <span className="block h-4 w-px bg-blue-500/40" />
      </div>

      <ul className="grid grid-cols-2 gap-2.5">
        {SIGNALS.slice(3).map(({ label, icon: Icon }) => (
          <SignalChip key={label} label={label} icon={Icon} />
        ))}
      </ul>
    </div>
  );
}

function SignalChip({ label, icon: Icon }: Signal) {
  return (
    <li className="theme-inner-card flex flex-col items-center gap-1.5 px-2 py-3 text-center">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="theme-text-heading text-[13px] font-medium">{label}</span>
    </li>
  );
}
