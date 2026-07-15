import type { Metadata } from "next";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { Section, SectionHeading } from "@/components/section";
import { MonitoringScopeSection } from "@/components/sections/monitoring-scope";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { rmmNavSections } from "@/data/page-sections";
import { rmmPage } from "@/data/pages/rmm";
import { buildPageMetadata } from "@/lib/metadata";

const content = rmmPage;
const breadcrumbs = getBreadcrumbTrail("/rmm");

export const metadata: Metadata = buildPageMetadata({
  title: "ניטור ובקרה RMM",
  description:
    "ניטור שוטף ברקע של מחשבים, שרתים, גיבויים, עדכונים ורכיבי אבטחה — כדי לזהות חריגות מוקדם, לטפל מרחוק ולהציג תמונת מצב ברורה לעסק.",
  path: "/rmm",
});

export default function RmmPage() {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind="progress"
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        mockupVariant="monitoring"
        layout="split"
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={rmmNavSections} />

      <Section tone="muted" id="how" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.flow.title} body={content.flow.body} />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {content.flow.steps.map((step, index) => (
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

      <MonitoringScopeSection
        id="scope"
        title={content.scope.title}
        body={content.scope.body}
        note={content.scope.note}
        items={content.scope.items}
        valueTitle={content.scope.valueTitle}
        valueSummary={content.scope.valueSummary}
        reportTitle={content.scope.reportTitle}
        reportOutputs={content.scope.reportOutputs}
        tone="white"
        className="py-10 sm:py-14 lg:py-16"
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
