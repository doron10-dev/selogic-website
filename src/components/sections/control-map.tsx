import { ChevronLeft } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import type { CardItem, ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const BUSINESS: CardItem[] = [
  { title: "פנייה או תקלה", body: "משהו קורה בעסק ודורש טיפול." },
  { title: "בקשת שינוי", body: "משתמש חדש, הרשאה, מערכת." },
  { title: "צורך בתמונת מצב", body: "המנהל רוצה לדעת מה קורה." },
];

/**
 * Information systems signature: business process → system workflow → management control.
 * A three-column control map (with connectors), managerial rather than helpdesk.
 */
export function ControlMapSection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  const columns = [
    { label: "תהליך עסקי", tag: "מה שקורה בעסק", items: BUSINESS },
    { label: "מערכת ותהליך", tag: "מה ש-Selogic מריצה", items: content.whatWeDo.items.slice(0, 3) },
    { label: "בקרת מנהל", tag: "מה שמגיע למנהל", items: content.clientGains.items.slice(0, 3) },
  ];

  return (
    <Section tone="tint" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading eyebrow="Selogic Control Tower" title={content.whatWeDo.title} body={content.whatWeDo.body} />

      <div className="mt-8 grid gap-3 lg:mt-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-2">
        {columns.map((col, index) => (
          <div key={col.label} className="contents">
            <div className="theme-card flex flex-col p-5">
              <div className="mb-3">
                <p className="theme-text-heading text-base font-semibold">{col.label}</p>
                <p className="theme-text-muted mt-0.5 text-xs">{col.tag}</p>
              </div>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.title} className="theme-inner-card px-3 py-2">
                    <p className="theme-text-heading text-sm font-semibold">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            {index < columns.length - 1 ? (
              <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
                <ChevronLeft className="hidden h-6 w-6 text-blue-500/60 lg:block" />
                <ChevronLeft className="h-5 w-5 rotate-[-90deg] text-blue-500/60 lg:hidden" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
