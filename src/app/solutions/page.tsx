import type { Metadata } from "next";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageFaq } from "@/components/page-faq";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { JsonLd } from "@/components/json-ld";
import { FeatureCard } from "@/components/feature-card";
import { FeaturedServiceCard } from "@/components/featured-service-card";
import { BenefitsChecklist } from "@/components/sections/benefits-checklist";
import { Section, SectionHeading } from "@/components/section";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { solutionsHubNavSections } from "@/data/page-sections";
import { defaultFinalCta } from "@/data/shared";
import {
  solutionsHubCards,
  solutionsHubCardsSection,
  solutionsHubFaq,
  solutionsHubHero,
  solutionsHubMetadata,
  solutionsHubSharedSection,
} from "@/data/pages/solutions-hub";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: solutionsHubMetadata.title,
  description: solutionsHubMetadata.description,
  path: "/solutions",
});

export default function Page() {
  const featured = solutionsHubCards.find((card) => card.featured);
  const regular = solutionsHubCards.filter((card) => !card.featured);
  const breadcrumbs = getBreadcrumbTrail("/solutions");

  return (
    <>
      <JsonLd data={buildFaqJsonLd(solutionsHubFaq.items)} />
      <JsonLd data={buildBreadcrumbJsonLd("/solutions", breadcrumbs)} />
      <PageHero
        eyebrow={solutionsHubHero.eyebrow}
        title={solutionsHubHero.title}
        intro={solutionsHubHero.intro}
        primaryCta={solutionsHubHero.primaryCta}
        secondaryCta={solutionsHubHero.secondaryCta}
        layout="editorial"
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={solutionsHubNavSections} />

      <Section tone="white" id="solutions-list" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading
          title={solutionsHubCardsSection.title}
          body={solutionsHubCardsSection.body}
        />

        {featured ? (
          <div className="mt-10">
            <FeaturedServiceCard item={featured} />
          </div>
        ) : null}

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regular.slice(0, 6).map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
        {regular.length > 6 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl lg:grid-cols-2">
            {regular.slice(6).map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        ) : null}
      </Section>

      <BenefitsChecklist
        title={solutionsHubSharedSection.title}
        body={solutionsHubSharedSection.body}
        items={solutionsHubSharedSection.items}
        tone="muted"
        className="py-10 sm:py-14 lg:py-16"
      />

      <PageFaq
        title={solutionsHubFaq.title}
        body={solutionsHubFaq.body}
        items={solutionsHubFaq.items}
        tone="white"
      />

      <PageFinalCta
        title={defaultFinalCta.title}
        body={defaultFinalCta.body}
        primary={defaultFinalCta.primary}
        secondary={defaultFinalCta.secondary}
        compact
      />
    </>
  );
}
