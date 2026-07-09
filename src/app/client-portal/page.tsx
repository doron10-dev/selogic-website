import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { PortalLoginBand } from "@/components/portal-login-band";
import { Section, SectionHeading } from "@/components/section";
import { PortalDashboard } from "@/components/sections/portal-dashboard";
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <SectionHeading title={content.problem.title} body={content.problem.lead} />
          <ul className="grid gap-3 sm:grid-cols-3 lg:gap-4">
            {content.problem.points.map((point) => (
              <li key={point} className="theme-card flex items-start gap-2.5 p-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                <span className="theme-text-body text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <PortalDashboard id="see" tone="white" content={content.dashboard} />

      <Section tone="tint" id="transparency" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.value.title} body={content.value.body} />
        <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-3 lg:mt-10">
          {content.value.points.map((point) => (
            <li key={point.title} className="border-r-2 border-blue-600 pr-4">
              <p className="theme-text-heading font-semibold">{point.title}</p>
              <p className="theme-text-muted mt-1.5 text-sm leading-relaxed">{point.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ReportsKpiSection
        id="reports"
        title={content.reports.title}
        body={content.reports.body}
        reportTitle={content.reports.reportTitle}
        reportItems={content.reports.reportItems}
        kpiTitle={content.reports.kpiTitle}
        kpiItems={content.reports.kpiItems}
        disclaimer={content.reports.disclaimer}
        tone="muted"
      />

      <Section tone="white" id="connection" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-12">
          <div>
            <SectionHeading title={content.connection.title} />
            <p className="theme-text-body mt-4 leading-relaxed">{content.connection.body}</p>
          </div>
          <ul className="grid gap-2.5">
            {content.connection.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="theme-pill group w-full justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    {link.title}
                  </span>
                  <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                    ←
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
