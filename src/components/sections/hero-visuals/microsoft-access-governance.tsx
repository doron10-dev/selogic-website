import { Cloud, FolderOpen, Mail, MessagesSquare, UserCircle2, type LucideIcon } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const APPS: { label: string; icon: LucideIcon }[] = [
  { label: "Teams", icon: MessagesSquare },
  { label: "SharePoint", icon: FolderOpen },
  { label: "OneDrive", icon: Cloud },
  { label: "דואר", icon: Mail },
];

const GOVERNANCE = ["קבוצה", "תפקיד", "הרשאה"] as const;

// One coherent governed access path: the highlighted intersection per row.
const ACCESS_PATH = [0, 2, 1] as const;

/**
 * Microsoft 365 hero signature: a permissions matrix / access ledger. Governance
 * rows meet application columns; a single governed access path is highlighted
 * through selected intersections. A grid silhouette — not a vertical ladder,
 * tree, funnel or destination row with a centred terminal pill.
 */
export function MicrosoftAccessGovernance() {
  return (
    <div
      className={`mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-950/95 shadow-sm ${motionStyles.rise}`}
      aria-hidden="true"
    >
      {/* Identity header */}
      <div
        className={`flex items-center gap-2.5 border-b border-slate-800 px-4 py-3 ${motionStyles.riseFromTop}`}
        style={{ animationDelay: "120ms" }}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/15">
          <UserCircle2 className="h-4 w-4 text-blue-300" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-100">זהות משתמש</p>
          <p className="text-[10px] text-slate-500">גישה מנוהלת בסביבת Microsoft 365</p>
        </div>
      </div>

      {/* Matrix: governance rows × application columns */}
      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-[auto_repeat(4,1fr)] gap-1.5 sm:gap-2">
          {/* Column headers */}
          <span aria-hidden="true" />
          {APPS.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 rounded-md border border-slate-800 bg-slate-900/70 px-1 py-1.5 ${motionStyles.rise}`}
              style={{ animationDelay: `${520 + index * 70}ms` }}
            >
              <Icon className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[9px] font-medium leading-none text-slate-400 sm:text-[10px]">{label}</span>
            </div>
          ))}

          {/* Governance rows */}
          {GOVERNANCE.map((row, rowIndex) => (
            <Row key={row} row={row} rowIndex={rowIndex} highlightCol={ACCESS_PATH[rowIndex]} />
          ))}
        </div>

        {/* Footer outcome caption */}
        <p
          className={`mt-3 border-t border-slate-800 pt-3 text-right text-[11px] font-semibold text-blue-200/90 sm:text-xs ${motionStyles.rise}`}
          style={{ animationDelay: "1160ms" }}
        >
          גישה מסודרת ומנוהלת ←
        </p>
      </div>
    </div>
  );
}

function Row({ row, rowIndex, highlightCol }: { row: string; rowIndex: number; highlightCol: number }) {
  return (
    <>
      <div
        className={`flex items-center rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-2 ${motionStyles.drawX}`}
        style={{ animationDelay: `${300 + rowIndex * 90}ms`, transformOrigin: "right" }}
      >
        <span className="whitespace-nowrap text-[10px] font-semibold text-slate-300 sm:text-[11px]">{row}</span>
      </div>
      {APPS.map((_, colIndex) => {
        const active = colIndex === highlightCol;
        return (
          <div
            key={colIndex}
            className={`flex items-center justify-center rounded-md border py-2 ${
              active ? "border-blue-400/40 bg-blue-500/15" : "border-slate-800/80 bg-slate-900/40"
            } ${motionStyles.emphasis}`}
            style={{ animationDelay: `${active ? 780 + rowIndex * 110 : 620 + rowIndex * 60 + colIndex * 30}ms` }}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${active ? "bg-blue-300" : "bg-slate-600"}`}
              aria-hidden="true"
            />
          </div>
        );
      })}
    </>
  );
}
