import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const PRINCIPLES = [
  { k: "אנשים", v: "קשר אישי והיכרות עם העסק, לא נציג אחר בכל פעם." },
  { k: "תהליכים", v: "קריאה, בעל טיפול ותיעוד לכל פנייה, כמו בחברה גדולה." },
  { k: "מחשבים", v: "התשתית עצמה, מנוהלת ומנוטרת, לא רק כשמשהו נשבר." },
];

/**
 * About signature: editorial trust story — human, not a service-page grid.
 * Narrative column + a "people / process / computers" philosophy strip.
 */
export function EditorialTrustSection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  return (
    <Section tone="white" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="איך אנחנו חושבים" title={content.whatWeDo?.title ?? ""} body={content.whatWeDo?.body ?? ""} />
          <p className="theme-text-muted mt-5 max-w-prose text-[17px] leading-relaxed">{content.clientGains?.body}</p>
        </div>

        <ul className="space-y-3">
          {PRINCIPLES.map((p, index) => (
            <li key={p.k} className="theme-card flex items-start gap-4 p-5">
              <span className="font-mono text-sm font-bold text-blue-600">{`0${index + 1}`}</span>
              <div className="min-w-0">
                <p className="theme-text-heading text-lg font-semibold">{p.k}</p>
                <p className="theme-text-muted mt-1 text-sm leading-relaxed">{p.v}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
