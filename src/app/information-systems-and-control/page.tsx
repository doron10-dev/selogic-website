import type { Metadata } from "next";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { ProcessFlow } from "@/components/sections/process-flow";
import { TransformationExamples } from "@/components/sections/transformation-examples";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { informationSystemsNavSections } from "@/data/page-sections";
import { informationSystemsPage } from "@/data/pages/information-systems-and-control";
import { buildPageMetadata } from "@/lib/metadata";

const content = informationSystemsPage;
const breadcrumbs = getBreadcrumbTrail("/information-systems-and-control");

export const metadata: Metadata = buildPageMetadata({
  title: "מערכות מידע ובקרה לעסקים",
  description:
    "סלוג׳יק מאפיינת ובונה מערכות מידע, אוטומציות, דוחות ובקרות מנהלים לעסקים, מתוך מיפוי תהליכים עסקיים, זיהוי צווארי בקבוק והטמעה בפועל.",
  path: "/information-systems-and-control",
});

export default function InformationSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind="progress"
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        layout="split"
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={informationSystemsNavSections} />

      <ProcessFlow
        id="flow"
        title={content.process.title}
        body={content.process.body}
        steps={content.process.steps}
        disclaimer={content.process.disclaimer}
        tone="muted"
        className="py-10 sm:py-14 lg:py-16"
      />

      <TransformationExamples
        id="examples"
        title={content.examples.title}
        body={content.examples.body}
        items={content.examples.items}
        closing={content.examples.closing}
        tone="white"
      />

      <PageFaq title={content.faq.title} body={content.faq.body} items={content.faq.items} compact />

      <PageFinalCta
        title={content.finalCta.title}
        body={content.finalCta.body}
        primary={content.finalCta.primary}
        secondary={content.finalCta.secondary}
        compact
      />
    </>
  );
}
