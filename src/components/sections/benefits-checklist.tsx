import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { CardItem } from "@/types/service-page";

export type BenefitsVariant = "default" | "split" | "manager";

type BenefitsChecklistProps = {
  title: string;
  body: string;
  items: CardItem[];
  tone?: "muted" | "tint" | "white";
  variant?: BenefitsVariant;
  className?: string;
  id?: string;
};

export function BenefitsChecklist({
  title,
  body,
  items,
  tone = "muted",
  variant = "default",
  className = "",
  id = "benefits",
}: BenefitsChecklistProps) {
  if (variant === "split") {
    return (
      <Section tone={tone} id={id} className={className}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="lg:pt-2">
            <SectionHeading title={title} body={body} />
          </div>
          <ul className="space-y-4">
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
        </div>
      </Section>
    );
  }

  if (variant === "manager") {
    return (
      <Section tone={tone} id={id} className={className}>
        <SectionHeading title={title} body={body} />
        <div className="theme-card mt-8 overflow-hidden lg:mt-10">
          <div
            className="flex items-center justify-between border-b px-5 py-3"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <span className="theme-text-muted font-mono text-[11px] font-semibold uppercase tracking-[0.2em]">
              MANAGER VIEW
            </span>
            <span className="theme-badge-note">המחשה</span>
          </div>
          <ul>
            {items.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-start gap-3 px-5 py-4 ${index > 0 ? "theme-divider" : ""}`}
              >
                <span className="mt-0.5">
                  <StatusDot kind="closed" />
                </span>
                <div className="min-w-0">
                  <p className="theme-text-heading font-semibold">{item.title}</p>
                  <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
  }

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
