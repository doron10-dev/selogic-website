import type { Metadata } from "next";
import { CardGrid } from "@/components/feature-card";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageFaq } from "@/components/page-faq";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { defaultFinalCta } from "@/data/shared";
import {
  solutionsHubCards,
  solutionsHubCardsSection,
  solutionsHubFaq,
  solutionsHubHero,
  solutionsHubMetadata,
  solutionsHubSharedSection,
} from "@/data/pages/solutions-hub";

export const metadata: Metadata = {
  title: solutionsHubMetadata.title,
  description: solutionsHubMetadata.description,
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={solutionsHubHero.eyebrow}
        title={solutionsHubHero.title}
        intro={solutionsHubHero.intro}
        primaryCta={solutionsHubHero.primaryCta}
        secondaryCta={solutionsHubHero.secondaryCta}
      />

      <Section tone="paper" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading
          title={solutionsHubCardsSection.title}
          body={solutionsHubCardsSection.body}
        />
        <CardGrid items={solutionsHubCards} cols={3} />
      </Section>

      <Section tone="mute" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading
          title={solutionsHubSharedSection.title}
          body={solutionsHubSharedSection.body}
        />
        <CardGrid items={solutionsHubSharedSection.items} cols={3} density="compact" />
      </Section>

      <PageFaq
        title={solutionsHubFaq.title}
        body={solutionsHubFaq.body}
        items={solutionsHubFaq.items}
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
