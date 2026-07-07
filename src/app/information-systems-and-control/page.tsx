import type { Metadata } from "next";
import { ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { Section, SectionHeading } from "@/components/section";
import { ProcessFlow } from "@/components/sections/process-flow";
import { RelatedServicesRow } from "@/components/sections/related-services-row";
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
        mockupVariant="dispatch"
        layout="split"
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={informationSystemsNavSections} />

      <Section tone="muted" id="process" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            <SectionHeading title={content.processFirst.title} />
            <p className="theme-text-body mt-4 text-[17px] font-semibold leading-relaxed">
              {content.processFirst.lead}
            </p>
            <p className="theme-text-body mt-3 leading-relaxed">{content.processFirst.question}</p>
            <p className="theme-text-body mt-3 leading-relaxed">{content.processFirst.body}</p>
          </div>
          <div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {content.processFirst.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {content.processFirst.closing}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" id="build" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.build.title} body={content.build.body} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {content.build.items.map((item) => (
            <li key={item.title} className="theme-card p-5">
              <p className="theme-text-heading font-semibold">{item.title}</p>
              <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tint" id="manager" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeading title={content.managerValue.title} body={content.managerValue.body} />
          <div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {content.managerValue.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {content.managerValue.closing}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" id="work-process" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.workProcess.title} body={content.workProcess.body} />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5">
          {content.workProcess.steps.map((step, index) => (
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

      <Section tone="muted" id="leadership" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionHeading title={content.doron.title} />
          <div className="theme-card p-6 sm:p-7">
            <div className="space-y-3">
              {content.doron.paragraphs.map((para) => (
                <p key={para} className="theme-text-body text-[15px] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" id="examples" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.examples.title} body={content.examples.body} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {content.examples.items.map((item) => (
            <li key={item.title} className="theme-card flex items-start gap-3 p-5">
              <ArrowLeftRight className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div className="min-w-0">
                <p className="theme-text-heading font-semibold">{item.title}</p>
                <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <ProcessFlow
        id="flow"
        title={content.flow.title}
        steps={content.flow.steps}
        disclaimer={content.flow.disclaimer}
        tone="tint"
        className="py-10 sm:py-14 lg:py-16"
      />

      <RelatedServicesRow
        id="related"
        title={content.related.title}
        body={content.related.body}
        items={content.related.items}
        tone="muted"
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
