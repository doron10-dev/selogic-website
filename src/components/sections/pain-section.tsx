import { XCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import type { CardItem } from "@/types/service-page";

type PainSectionProps = {
  title: string;
  body: string;
  items: CardItem[];
  tone?: "tint" | "dark";
  className?: string;
  id?: string;
};

export function PainSection({
  title,
  body,
  items,
  tone = "tint",
  className = "",
  id = "pain",
}: PainSectionProps) {
  const isDark = tone === "dark";

  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} invert={isDark} />
      <ul className={`mt-8 grid gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 lg:mt-10 ${isDark ? "" : ""}`}>
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <XCircle
              className={`mt-1 h-5 w-5 shrink-0 ${isDark ? "text-red-400/80" : "text-red-400"}`}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className={`font-medium ${isDark ? "text-white" : "theme-text-heading"}`}>{item.title}</p>
              <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-slate-400" : "theme-text-muted"}`}>
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
