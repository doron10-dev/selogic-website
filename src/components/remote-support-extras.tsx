import { Button } from "@/components/button";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import { siteUrls } from "@/data/contact";
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
      <div className="mt-6 flex max-w-3xl flex-col gap-3 border-t border-slate-line/60 pt-5 sm:flex-row sm:flex-wrap">
        <Button href={siteUrls.technicalSupport} variant="primary" className="w-full sm:w-auto">
          פתחו קריאת שירות
        </Button>
        <Button href={siteUrls.contact} variant="secondary" className="w-full sm:w-auto">
          צרו קשר
        </Button>
      </div>
    </Section>
  );
}
