import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { Section, SectionHeading } from "@/components/section";
import { CloudAccessMap } from "@/components/sections/cloud-access-map";
import { RelatedServicesRow } from "@/components/sections/related-services-row";
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
        mockupVariant="m365"
        layout="split"
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={microsoft365NavSections} />

      <Section tone="muted" id="why" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <SectionHeading title={content.why.title} />
            <p className="theme-text-body mt-4 leading-relaxed">{content.why.body}</p>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {content.why.closing}
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {content.why.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CloudAccessMap
        id="manage"
        tone="white"
        title={content.manage.title}
        body={content.manage.body}
        stages={content.manage.stages}
      />

      <Section tone="tint" id="backup" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <SectionHeading title={content.backup.title} />
          <div className="space-y-3">
            {content.backup.paragraphs.map((para) => (
              <p key={para} className="theme-text-body leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted" id="connected" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <SectionHeading title={content.connected.title} />
            <p className="theme-text-body mt-4 leading-relaxed">{content.connected.body}</p>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {content.connected.closing}
            </p>
          </div>
          <ul className="grid gap-3">
            {content.connected.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="theme-text-body text-[15px] leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
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

      <RelatedServicesRow
        id="related"
        title={content.related.title}
        body={content.related.body}
        items={content.related.items}
        tone="white"
        quiet
        className="pb-12 pt-4 sm:pb-16"
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
