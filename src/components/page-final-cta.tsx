import { Button } from "@/components/button";
import { Section, SectionHeading } from "@/components/section";
import { siteUrls } from "@/data/contact";
import type { CtaLink } from "@/types/service-page";

type PageFinalCtaProps = {
  title: string;
  body: string;
  primary: CtaLink;
  secondary: CtaLink;
  compact?: boolean;
  id?: string;
};

export function PageFinalCta({
  title,
  body,
  primary,
  secondary,
  compact = false,
  id = "contact",
}: PageFinalCtaProps) {
  return (
    <Section tone="tint" id={id} className={compact ? "py-10 sm:py-14 lg:py-16" : undefined}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={title} body={body} align="center" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="theme-card min-w-0 p-6 text-right">
            <Button
              href={primary.href}
              variant={primary.href === siteUrls.contactDiagnosis ? "diagnosis" : "primary"}
              className="w-full"
            >
              {primary.label}
            </Button>
            <p className="theme-text-body mt-3 text-xs">{primary.sub}</p>
          </div>
          <div className="theme-card min-w-0 p-6 text-right">
            <Button href={secondary.href} variant="secondary" className="w-full">
              {secondary.label}
            </Button>
            <p className="theme-text-body mt-3 text-xs">{secondary.sub}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
