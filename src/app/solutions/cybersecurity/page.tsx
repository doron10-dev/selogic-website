import type { Metadata } from "next";
import { CheckCircle2, Scale } from "lucide-react";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { Section, SectionHeading } from "@/components/section";
import { ReportsKpiSection } from "@/components/sections/reports-kpi";
import { RelatedServicesRow } from "@/components/sections/related-services-row";
import { SecurityLayers } from "@/components/sections/security-layers";
import { SecurityPostureSignal } from "@/components/sections/hero-visuals/security-posture-signal";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { cybersecurityNavSections } from "@/data/page-sections";
import { cybersecurityPage } from "@/data/pages/cybersecurity";
import { buildPageMetadata } from "@/lib/metadata";

const content = cybersecurityPage;
const breadcrumbs = getBreadcrumbTrail("/solutions/cybersecurity");

export const metadata: Metadata = buildPageMetadata({
  title: "אבטחת מידע וגיבוי לעסקים",
  description:
    "סלוג׳יק מספקת שירותי אבטחת מידע וגיבוי לעסקים, כולל ניהול סיכונים, הרשאות, EDR/XDR, Mail Relay, Firewall, גיבוי תיבות דואר, ניטור, דוחות וסיוע טכנולוגי להיערכות לתיקון 13.",
  path: "/solutions/cybersecurity",
});

export default function CybersecurityPage() {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind="progress"
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        visual={<SecurityPostureSignal />}
        layout="split"
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={cybersecurityNavSections} />

      <Section tone="muted" id="method" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <SectionHeading title={content.method.title} />
            <p className="theme-text-body mt-4 leading-relaxed">{content.method.lead}</p>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {content.method.closing}
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {content.method.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <SecurityLayers
        id="layers"
        tone="white"
        title={content.layers.title}
        body={content.layers.body}
        coreLabel={content.layers.coreLabel}
        coreSub={content.layers.coreSub}
        items={content.layers.items}
      />

      <ReportsKpiSection
        id="reports"
        title={content.reports.title}
        body={content.reports.body}
        reportTitle={content.reports.reportTitle}
        reportItems={content.reports.reportItems}
        reportCaption={content.reports.reportCaption}
        kpiTitle={content.reports.kpiTitle}
        kpiItems={content.reports.kpiItems}
        disclaimer={content.reports.disclaimer}
        tone="tint"
        className="py-10 sm:py-14 lg:py-16"
      />

      <Section tone="white" id="tikkun-13" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <SectionHeading title={content.tikkun13.title} />
          <div>
            <div className="space-y-3">
              {content.tikkun13.paragraphs.map((para) => (
                <p key={para} className="theme-text-body leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <p
              className="mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed theme-text-muted"
              style={{ borderColor: "var(--theme-border)" }}
            >
              <Scale className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <span>{content.tikkun13.legalNote}</span>
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" id="connected" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.connected.title} body={content.connected.body} />
        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:mt-10">
          {content.connected.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <span className="theme-text-body text-[15px] leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
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
