import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import {
  remoteSupportGuidance,
  remoteSupportSafetyRules,
} from "@/data/pages/remote-support";

export function RemoteSupportExtras() {
  return (
    <Section tone="mute" className="!py-8 sm:!py-10">
      <SectionHeading
        title="כללי בטיחות — חשוב לקרוא"
        body="תמיכה מרחוק מעניקה גישה למחשב. אלה הכללים שמגנים על העסק."
      />
      <ul className="mt-5 grid max-w-3xl gap-2 sm:grid-cols-1">
        {remoteSupportSafetyRules.map((rule) => (
          <li
            key={rule}
            className="flex items-start gap-2.5 rounded-card border border-signal/25 bg-signal-soft/80 px-3 py-2.5 text-sm leading-snug text-slate-ink"
          >
            <span className="mt-0.5 shrink-0">
              <StatusDot kind="progress" />
            </span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 max-w-3xl rounded-card border border-slate-line/80 bg-white/90 p-4 sm:p-5">
        <h2 className="text-base font-bold text-slate-ink">{remoteSupportGuidance.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-body">{remoteSupportGuidance.body}</p>
      </div>
    </Section>
  );
}
