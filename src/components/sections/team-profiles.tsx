import { Section, SectionHeading, type SectionTone } from "@/components/section";
import { teamProfiles } from "@/data/credentials";

type TeamProfilesProps = {
  title?: string;
  body?: string;
  tone?: SectionTone;
  className?: string;
};

/** Founders / leadership profiles — the human anchors behind Selogic. */
export function TeamProfiles({
  title = "מי עומד מאחורי סלוג׳יק",
  body = "חיבור בין ראייה עסקית ותפעולית לבין עומק טכנולוגי ואבטחת מידע.",
  tone = "white",
  className = "py-10 sm:py-14 lg:py-16",
}: TeamProfilesProps) {
  return (
    <Section tone={tone} className={className}>
      <SectionHeading title={title} body={body} />
      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2">
        {teamProfiles.map((profile) => (
          <article key={profile.name} className="theme-card p-6 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="theme-text-heading text-xl font-bold">{profile.name}</h3>
              <span className="theme-text-muted text-sm">{profile.role}</span>
            </div>
            <p className="mt-1 text-sm font-semibold text-blue-600">{profile.lead}</p>
            <div className="mt-4 space-y-3">
              {profile.paragraphs.map((para) => (
                <p key={para} className="theme-text-muted text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border px-2.5 py-1 text-xs theme-text-muted"
                  style={{ borderColor: "var(--theme-border)" }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
