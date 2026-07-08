import type { Metadata } from "next";
import { AlertCircle, CheckCircle2, Eye } from "lucide-react";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { PortalLoginBand } from "@/components/portal-login-band";
import { Section, SectionHeading } from "@/components/section";
import { RelatedServicesRow } from "@/components/sections/related-services-row";
import { ReportsKpiSection } from "@/components/sections/reports-kpi";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { clientPortalNavSections } from "@/data/page-sections";
import { clientPortalPage } from "@/data/pages/client-portal";
import { buildPageMetadata } from "@/lib/metadata";

const content = clientPortalPage;
const breadcrumbs = getBreadcrumbTrail("/client-portal");

export const metadata: Metadata = buildPageMetadata({
  title: "פורטל לקוח IT ושקיפות שירות",
  description:
    "פורטל הלקוח של סלוג׳יק מציג קריאות שירות, סטטוסים, היסטוריה, דוחות, תיעוד והמשך טיפול, כדי לתת לעסק שקיפות ובקרה על שירותי ה־IT.",
  path: "/client-portal",
});

export default function ClientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind="progress"
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        mockupVariant="portal"
        layout="split"
        breadcrumbs={breadcrumbs}
      />

      <PortalLoginBand />

      <PageSectionNav sections={clientPortalNavSections} />

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
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {content.why.cards.map((item) => (
            <li key={item.title} className="theme-card flex items-start gap-3 p-5">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div className="min-w-0">
                <p className="theme-text-heading font-semibold">{item.title}</p>
                <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" id="see" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.see.title} body={content.see.body} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {content.see.items.map((item) => (
            <li key={item.title} className="theme-card flex flex-col gap-2 p-5">
              <Eye className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <p className="theme-text-heading font-semibold">{item.title}</p>
              <p className="theme-text-muted text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tint" id="transparency" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <SectionHeading title={content.transparency.title} />
          <div className="space-y-3">
            {content.transparency.paragraphs.map((para) => (
              <p key={para} className="theme-text-body leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white" id="how" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.how.title} body={content.how.body} />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5">
          {content.how.steps.map((step, index) => (
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

      <Section tone="muted" id="reports" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <SectionHeading title={content.reports.title} />
            <p className="theme-text-body mt-4 leading-relaxed">{content.reports.lead}</p>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {content.reports.closing}
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {content.reports.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ReportsKpiSection
        id="reports-kpi"
        title="דוגמה לתצוגת דוחות ומדדים"
        body=""
        reportTitle={content.reports.reportTitle}
        reportItems={content.reports.reportItems}
        kpiTitle={content.reports.kpiTitle}
        kpiItems={content.reports.kpiItems}
        disclaimer={content.reports.disclaimer}
        tone="white"
        className="pb-10 sm:pb-14 lg:pb-16"
      />

      <Section tone="tint" id="dossier" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <SectionHeading title={content.dossier.title} />
          <div className="space-y-3">
            {content.dossier.paragraphs.map((para) => (
              <p key={para} className="theme-text-body leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <RelatedServicesRow
        id="related"
        title={content.related.title}
        body={content.related.body}
        items={content.related.items}
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
