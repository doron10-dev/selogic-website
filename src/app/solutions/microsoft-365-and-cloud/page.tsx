import type { Metadata } from "next";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { Section, SectionHeading } from "@/components/section";
import { CloudAccessMap } from "@/components/sections/cloud-access-map";
import { MicrosoftAccessGovernance } from "@/components/sections/hero-visuals/microsoft-access-governance";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { microsoft365NavSections } from "@/data/page-sections";
import { microsoft365Page } from "@/data/pages/microsoft-365-and-cloud";
import { buildPageMetadata } from "@/lib/metadata";

const content = microsoft365Page;
const breadcrumbs = getBreadcrumbTrail("/solutions/microsoft-365-and-cloud");

export const metadata: Metadata = buildPageMetadata({
  title: "Microsoft 365 וענן לעסקים",
  description:
    "סלוג׳יק מנהלת Microsoft 365 וענן לעסקים, כולל משתמשים, תיבות דואר, Teams, SharePoint, OneDrive, הרשאות, אבטחת חשבונות, גיבוי תיבות דואר וקבצים ותיעוד בתיק הלקוח.",
  path: "/solutions/microsoft-365-and-cloud",
});

export default function Microsoft365Page() {
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
        visual={<MicrosoftAccessGovernance />}
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={microsoft365NavSections} />

      <CloudAccessMap
        id="manage"
        tone="muted"
        title={content.manage.title}
        body={content.manage.body}
        stages={content.manage.stages}
        challenges={content.challenges}
        footnote={content.manage.footnote}
      />

      <Section tone="white" id="process" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.process.title} body={content.process.body} />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10">
          {content.process.steps.map((step, index) => (
            <li key={step.title} className="theme-card flex flex-col gap-3 p-5">
              <span className="theme-step-dot h-9 w-9 text-sm" aria-hidden="true">
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="theme-text-heading font-semibold">{step.title}</p>
                <p className="theme-text-muted mt-1 text-sm leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

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
