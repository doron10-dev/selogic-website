import { XCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import type { CardItem } from "@/types/service-page";

export type PainLayout = "grid" | "cards" | "checklist" | "list";

type PainSectionProps = {
  title: string;
  body: string;
  items: CardItem[];
  tone?: "tint" | "dark" | "muted" | "white";
  layout?: PainLayout;
  className?: string;
  id?: string;
};

export function PainSection({
  title,
  body,
  items,
  tone = "tint",
  layout = "grid",
  className = "",
  id = "pain",
}: PainSectionProps) {
  const isDark = tone === "dark";
  const headText = isDark ? "text-white" : "theme-text-heading";
  const subText = isDark ? "text-slate-400" : "theme-text-muted";
  const icon = (
    <XCircle
      className={`mt-0.5 h-5 w-5 shrink-0 ${isDark ? "text-red-400/80" : "text-red-400"}`}
      aria-hidden="true"
    />
  );

  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} invert={isDark} />

      {layout === "grid" ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 lg:mt-10">
          {items.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              {icon}
              <div className="min-w-0">
                <p className={`font-medium ${headText}`}>{item.title}</p>
                <p className={`mt-1 text-sm leading-relaxed ${subText}`}>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {layout === "cards" ? (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="theme-card p-5">
              <div className="flex items-start gap-2.5">
                {icon}
                <div className="min-w-0">
                  <p className={`text-sm font-semibold ${headText}`}>{item.title}</p>
                  <p className={`mt-1 text-sm leading-relaxed ${subText}`}>{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {layout === "checklist" ? (
        <div className="theme-card mt-8 max-w-2xl p-5 sm:p-6 lg:mt-10">
          <ul>
            {items.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-start gap-3 py-3.5 first:pt-0 last:pb-0 ${index > 0 ? "theme-divider" : ""}`}
              >
                {icon}
                <div className="min-w-0">
                  <p className={`font-medium ${headText}`}>{item.title}</p>
                  <p className={`mt-1 text-sm leading-relaxed ${subText}`}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {layout === "list" ? (
        <ul className="mt-8 max-w-3xl lg:mt-10">
          {items.map((item, index) => (
            <li
              key={item.title}
              className={`flex items-start gap-4 py-4 first:pt-0 ${index > 0 ? "theme-divider" : ""}`}
            >
              {icon}
              <div className="min-w-0 flex-1">
                <p className={`font-semibold ${headText}`}>{item.title}</p>
                <p className={`mt-1 text-sm leading-relaxed ${subText}`}>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
