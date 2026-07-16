import { KeyRound, Mail, MessagesSquare, Cloud, FolderOpen } from "lucide-react";
import motionStyles from "./hero-visual-motion.module.css";

const GOVERNANCE_GATES = ["קבוצה", "תפקיד", "הרשאה"] as const;

const DESTINATIONS = [
  { label: "Teams", icon: MessagesSquare },
  { label: "SharePoint", icon: FolderOpen },
  { label: "OneDrive", icon: Cloud },
  { label: "דואר", icon: Mail },
] as const;

/**
 * Microsoft 365 hero signature: identity passes through governance gates before
 * reaching controlled collaboration destinations. A governed access rail — not
 * a cloud network map or ownership tree.
 */
export function MicrosoftAccessGovernance() {
  return (
    <div
      className={`mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/95 p-4 shadow-sm sm:min-h-[340px] sm:p-5 ${motionStyles.rise}`}
      aria-hidden="true"
    >
      <div className="flex min-h-[280px] flex-col sm:min-h-[300px]">
        {/* Identity source */}
        <div className="flex flex-col items-center">
          <div
            className={`flex items-center gap-2.5 rounded-xl border border-blue-400/30 bg-slate-900 px-4 py-2.5 ${motionStyles.riseFromTop}`}
            style={{ animationDelay: "80ms" }}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-400/15">
              <KeyRound className="h-4 w-4 text-blue-300" />
            </span>
            <div className="min-w-0 text-center">
              <p className="text-sm font-semibold text-slate-100">זהות משתמש</p>
              <p className="text-[10px] text-slate-500 sm:text-[11px]">Microsoft 365</p>
            </div>
          </div>
          <span
            className={`h-5 w-px bg-blue-400/35 ${motionStyles.drawY}`}
            style={{ animationDelay: "200ms" }}
          />
        </div>

        {/* Governance gates */}
        <div className="mx-auto flex w-full max-w-xs flex-col gap-2">
          {GOVERNANCE_GATES.map((gate, index) => (
            <div key={gate} className="flex flex-col items-center">
              <div
                className={`flex w-full items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 ${motionStyles.filterIn}`}
                style={{ animationDelay: `${240 + index * 100}ms` }}
              >
                <span className="text-[11px] font-semibold text-slate-300 sm:text-xs">{gate}</span>
              </div>
              {index < GOVERNANCE_GATES.length - 1 ? (
                <span
                  className={`h-3 w-px bg-slate-700 ${motionStyles.drawY}`}
                  style={{ animationDelay: `${320 + index * 100}ms` }}
                />
              ) : null}
            </div>
          ))}
        </div>

        {/* Access rail to destinations */}
        <span
          className={`mx-auto mt-1 h-4 w-px bg-blue-400/30 ${motionStyles.drawY}`}
          style={{ animationDelay: "560ms" }}
        />
        <span
          className={`mx-[12%] h-px bg-blue-400/30 ${motionStyles.drawX}`}
          style={{ animationDelay: "640ms" }}
        />

        {/* Destinations */}
        <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
          {DESTINATIONS.map(({ label, icon: Icon }, index) => (
            <li
              key={label}
              className={`flex flex-col items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2 py-2.5 text-center ${motionStyles.rise}`}
              style={{ animationDelay: `${720 + index * 80}ms` }}
            >
              <Icon className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[10px] font-medium text-slate-300 sm:text-[11px]">{label}</span>
            </li>
          ))}
        </ul>

        {/* Final business state */}
        <div className="mt-auto pt-4">
          <div
            className={`mx-auto flex w-max max-w-full items-center justify-center rounded-full border border-blue-400/25 bg-blue-600/10 px-5 py-2 ${motionStyles.coreIn}`}
            style={{ animationDelay: "1120ms" }}
          >
            <span className="text-xs font-semibold text-blue-100 sm:text-sm">גישה מסודרת ומנוהלת</span>
          </div>
        </div>
      </div>
    </div>
  );
}
