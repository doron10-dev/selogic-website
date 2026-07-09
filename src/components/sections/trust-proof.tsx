import { Section, SectionHeading, type SectionTone } from "@/components/section";

export type TrustProofItem = { title: string; body: string };

type TrustProofProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  items: TrustProofItem[];
  tone?: SectionTone;
  className?: string;
};

/**
 * Process-based proof ("how responsible work looks"). Trust is built from
 * documentation, ownership, reporting and discipline — not logos, numbers or
 * testimonials. Numbered, calm cards; no fabricated proof of any kind.
 */
export function TrustProof({
  eyebrow,
  title,
  body,
  items,
  tone = "muted",
  className = "py-12 sm:py-16 lg:py-20",
}: TrustProofProps) {
  return (
    <Section tone={tone} className={className}>
      <SectionHeading eyebrow={eyebrow} title={title} body={body} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item.title} className="theme-card p-5">
            <span className="theme-step-dot h-9 w-9 text-sm" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="theme-text-heading mt-4 font-semibold">{item.title}</h3>
            <p className="theme-text-muted mt-2 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
