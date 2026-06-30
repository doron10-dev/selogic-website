import Link from "next/link";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import { contactChannels, siteLabels, siteUrls } from "@/data/contact";
import {
  remoteSupportGuidance,
  remoteSupportSafetyRules,
} from "@/data/pages/remote-support";

export function RemoteSupportExtras() {
  return (
    <>
      <Section tone="mute" className="!py-12 sm:!py-16">
        <SectionHeading
          title="כללי בטיחות — חשוב לקרוא"
          body="תמיכה מרחוק מעניקה גישה למחשב. אלה הכללים שמגנים על העסק."
        />
        <ul className="mt-8 max-w-3xl space-y-3">
          {remoteSupportSafetyRules.map((rule) => (
            <li
              key={rule}
              className="flex items-start gap-3 rounded-card border border-signal/30 bg-signal-soft p-4 text-sm font-medium text-slate-ink"
            >
              <StatusDot kind="progress" />
              {rule}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" className="!py-12 sm:!py-16">
        <div className="mx-auto max-w-2xl min-w-0 rounded-card border border-slate-line bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-xl font-bold text-slate-ink">{remoteSupportGuidance.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-body">{remoteSupportGuidance.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {contactChannels.phone && (
              <a
                href={contactChannels.phone}
                className="inline-flex rounded-pill bg-signal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
              >
                {siteLabels.callSupport}
              </a>
            )}
            <Link
              href={siteUrls.contact}
              className="inline-flex rounded-pill border border-slate-line bg-paper px-5 py-2.5 text-sm font-semibold text-slate-ink transition-colors hover:border-signal/40 hover:text-signal"
            >
              {siteLabels.contact}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
