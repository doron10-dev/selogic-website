import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import type { CardItem } from "@/types/service-page";

type BenefitsChecklistProps = {
  title: string;
  body: string;
  items: CardItem[];
  tone?: "muted" | "tint";
  className?: string;
  id?: string;
};

export function BenefitsChecklist({
  title,
  body,
  items,
  tone = "muted",
  className = "",
  id = "benefits",
}: BenefitsChecklistProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} />
      <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:mt-10">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div className="min-w-0">
              <p className="theme-text-heading font-semibold">{item.title}</p>
              <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
