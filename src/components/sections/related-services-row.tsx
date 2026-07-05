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
};

export function RelatedServicesRow({
  title,
  body,
  items,
  tone = "white",
  className = "",
  id = "related",
}: RelatedServicesRowProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading title={title} body={body} />
      <div className="mt-8 flex flex-wrap gap-3 lg:mt-10">
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
    </Section>
  );
}
