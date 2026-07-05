import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/button";
import { Section, SectionHeading } from "@/components/section";
import { siteUrls } from "@/data/contact";
import {
  remoteSupportGuidance,
  remoteSupportSafetyRules,
} from "@/data/pages/remote-support";

export function RemoteSupportExtras() {
  return (
    <Section tone="muted" className="!py-8 sm:!py-10">
      <SectionHeading
        title="כללי בטיחות"
        body="תמיכה מרחוק מעניקה גישה למחשב. אלה הכללים שמגנים על העסק."
      />
      <ul className="mt-5 grid max-w-3xl gap-2 sm:grid-cols-1">
        {remoteSupportSafetyRules.map((rule) => (
          <li key={rule} className="theme-alert-rule">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
            <span>{rule}</span>
          </li>
        ))}
      </ul>
      <div className="theme-inner-card mt-5 max-w-3xl">
        <h2 className="theme-text-heading text-base font-semibold">{remoteSupportGuidance.title}</h2>
        <p className="theme-text-body mt-2 text-sm leading-relaxed">{remoteSupportGuidance.body}</p>
      </div>
      <div className="theme-divider mt-6 flex max-w-3xl flex-col gap-3 pt-5 sm:flex-row sm:flex-wrap">
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
