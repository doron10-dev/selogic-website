import { Cloud, Gauge, Headset, Monitor, Settings, Users, type LucideIcon } from "lucide-react";

function Node({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div className="flex w-28 items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2.5 backdrop-blur-sm">
      <Icon className="h-4 w-4 shrink-0 text-slate-400" />
      <span className="text-xs font-medium text-slate-300">{label}</span>
    </div>
  );
}

/**
 * Managed IT hero signature: one accountable ownership node connecting the full IT
 * environment. Uses an asymmetric vertical spine topology rather than a flat card
 * grid. No decorative check marks, shields, or fake dashboard metrics.
 */
export function ManagedOwnershipNode() {
  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col gap-0 py-4" aria-hidden="true">
      {/* Central Spine */}
      <div className="absolute bottom-10 left-1/2 top-8 w-px -translate-x-1/2 bg-blue-500/20" />

      {/* Hub */}
      <div className="relative z-10 mx-auto flex w-max items-center gap-3 rounded-full border border-blue-500/30 bg-slate-900 px-5 py-2.5 shadow-sm">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
          <Settings className="h-3.5 w-3.5 text-blue-400" />
        </span>
        <span className="text-sm font-semibold text-slate-200">כתובת אחת אחראית</span>
      </div>

      {/* Nodes */}
      <div className="relative z-10 mt-6 grid grid-cols-2 gap-x-12 gap-y-8 px-2 sm:gap-x-16 sm:px-4">
        <div className="flex flex-col items-end gap-8">
          <Node label="משתמשים" icon={Users} />
          <Node label="ענן" icon={Cloud} />
        </div>
        <div className="flex flex-col items-start gap-8 pt-10">
          <Node label="מחשבים" icon={Monitor} />
          <Node label="תמיכה" icon={Headset} />
        </div>
      </div>

      {/* Bottom Node */}
      <div className="relative z-10 mx-auto mt-4">
        <Node label="בקרה" icon={Gauge} />
      </div>
    </div>
  );
}
