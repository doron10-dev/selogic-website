import { PageFinalCta } from "@/components/page-final-cta";
import { PageFaq } from "@/components/page-faq";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { JsonLd } from "@/components/json-ld";
import type { MiniMockupVariant } from "@/components/mini-mockup";
import { BenefitsChecklist } from "@/components/sections/benefits-checklist";
import { PainSection } from "@/components/sections/pain-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { RelatedServicesRow } from "@/components/sections/related-services-row";
import { SlaBand } from "@/components/sections/sla-band";
import { CardGrid } from "@/components/feature-card";
import { Section, SectionHeading } from "@/components/section";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { servicePageNavSections } from "@/data/page-sections";
import { defaultFinalCta } from "@/data/shared";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/json-ld";
import type { ServicePageContent } from "@/types/service-page";
import { ReactNode } from "react";

const gridSectionClass = "py-10 sm:py-14 lg:py-16";
const compactSectionClass = "py-8 sm:py-11 lg:py-14";

export function ServicePage({
  content,
  pagePath,
  afterHero,
  variant = "default",
  mockupVariant = "dispatch",
}: {
  content: ServicePageContent;
  pagePath: string;
  afterHero?: ReactNode;
  variant?: "default" | "flagship" | "compact";
  mockupVariant?: MiniMockupVariant;
}) {
  const cta = content.finalCta ?? defaultFinalCta;
  const isCompact = variant === "compact";
  const sectionPad = isCompact ? compactSectionClass : gridSectionClass;
  const gridDensity = isCompact ? "compact" : "default";
  const breadcrumbs = getBreadcrumbTrail(pagePath);

  return (
    <>
      <JsonLd data={buildFaqJsonLd(content.faq.items)} />
      {breadcrumbs.length > 0 ? <JsonLd data={buildBreadcrumbJsonLd(pagePath, breadcrumbs)} /> : null}
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind={content.hero.statusKind}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        mockupVariant={mockupVariant}
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={servicePageNavSections} />

      {afterHero}

      <PainSection
        title={content.pain.title}
        body={content.pain.body}
        items={content.pain.items}
        tone="tint"
        className={sectionPad}
      />

      <Section tone="white" id="what-we-do" className={sectionPad}>
        <SectionHeading title={content.whatWeDo.title} body={content.whatWeDo.body} />
        <CardGrid items={content.whatWeDo.items} cols={3} density={gridDensity} />
      </Section>

      <BenefitsChecklist
        title={content.clientGains.title}
        body={content.clientGains.body}
        items={content.clientGains.items}
        tone="muted"
        className={sectionPad}
      />

      <ProcessTimeline
        title={content.howItWorks.title}
        body={content.howItWorks.body}
        steps={content.howItWorks.steps}
        className={sectionPad}
      />

      <SlaBand
        title={content.sla.title}
        body={content.sla.body}
        items={content.sla.items}
        className="py-10 sm:py-14 lg:py-16"
      />

      <RelatedServicesRow
        title={content.related.title}
        body={content.related.body}
        items={content.related.items}
        className={isCompact ? "py-8 sm:py-10 lg:py-12" : sectionPad}
      />

      <PageFaq
        title={content.faq.title}
        body={content.faq.body}
        items={content.faq.items}
        compact
      />

      <PageFinalCta
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
        compact
      />
    </>
  );
}
