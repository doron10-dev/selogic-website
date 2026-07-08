import Link from "next/link";
import { Section, SectionHeading, type SectionTone } from "@/components/section";
import type { CardItem } from "@/types/service-page";

type RelatedServicesRowProps = {
  title: string;
  body: string;
  items: CardItem[];
  tone?: SectionTone;
  className?: string;
  id?: string;
  /** Quiet footer-like treatment, so it does not read as another full mid-page section. */
  quiet?: boolean;
};

function Pills({ items }: { items: CardItem[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) =>
        item.href ? (
          <Link key={item.title} href={item.href} className="theme-pill group">
            {item.title}
            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
              ←
            </span>
          </Link>
        ) : (
          <span key={item.title} className="theme-pill">
            {item.title}
          </span>
        ),
      )}
    </div>
  );
}

export function RelatedServicesRow({
  title,
  body,
  items,
  tone = "white",
  className = "",
  id = "related",
  quiet = false,
}: RelatedServicesRowProps) {
  if (quiet) {
    return (
      <Section tone={tone} id={id} className={className}>
        <div className="border-t pt-8" style={{ borderColor: "var(--theme-border)" }}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className="theme-text-heading text-lg font-semibold sm:text-xl">{title}</h2>
            <p className="theme-text-muted max-w-md text-sm">{body}</p>
          </div>
          <div className="mt-5">
            <Pills items={items} />
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} />
      <div className="mt-8 lg:mt-10">
        <Pills items={items} />
      </div>
    </Section>
  );
}
