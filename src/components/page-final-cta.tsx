import { Button } from "@/components/button";
import { Section, SectionHeading } from "@/components/section";
import type { CtaLink } from "@/types/service-page";

type PageFinalCtaProps = {
  title: string;
  body: string;
  primary: CtaLink;
  secondary: CtaLink;
  compact?: boolean;
};

export function PageFinalCta({ title, body, primary, secondary, compact = false }: PageFinalCtaProps) {
  return (
    <Section tone="ink" className={compact ? "py-10 sm:py-14 lg:py-16" : undefined}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={title} body={body} align="center" invert />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-6 text-right">
            <Button href={primary.href} variant="primary" className="w-full">
              {primary.label}
            </Button>
            <p className="mt-3 text-xs text-paper/60">{primary.sub}</p>
          </div>
          <div className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-6 text-right">
            <Button href={secondary.href} variant="ghost" className="w-full">
              {secondary.label}
            </Button>
            <p className="mt-3 text-xs text-paper/60">{secondary.sub}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
