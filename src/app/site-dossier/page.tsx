import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { Section, SectionHeading } from "@/components/section";
import { DossierBoard } from "@/components/sections/dossier-board";
import { RelatedServicesRow } from "@/components/sections/related-services-row";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { siteDossierNavSections } from "@/data/page-sections";
import { siteDossierPage } from "@/data/pages/site-dossier";
import { buildPageMetadata } from "@/lib/metadata";

const content = siteDossierPage;
const breadcrumbs = getBreadcrumbTrail("/site-dossier");

export const metadata: Metadata = buildPageMetadata({
  title: "תיק אתר IT ותיק לקוח מסודר",
  description:
    "סלוג׳יק מנהלת תיק אתר IT מסודר ומתוחזק לעסק, הכולל משתמשים, ציוד, שרתים, ספקים, הרשאות, גיבויים, סיכונים והמלצות. תיק האתר נשאר נכס של הלקוח.",
  path: "/site-dossier",
});

export default function SiteDossierPage() {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind="closed"
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        layout="split"
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={siteDossierNavSections} />

      <Section tone="muted" id="why" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.why.title} body={content.why.body} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {content.why.items.map((item) => (
            <li key={item.title} className="theme-card p-5">
              <p className="theme-text-heading font-semibold">{item.title}</p>
              <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" id="contents" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.contents.title} body={content.contents.body} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {content.contents.items.map((item) => (
            <li key={item.title} className="theme-card p-5">
              <p className="theme-text-heading font-semibold">{item.title}</p>
              <p className="theme-text-muted mt-1 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tint" id="asset" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeading title={content.asset.title} body={content.asset.body} />
          <div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {content.asset.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="theme-card mt-6 p-4 text-sm font-semibold theme-text-heading">
              {content.asset.note}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" id="maintain" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.maintain.title} body={content.maintain.body} />
        <ul className="mt-6 flex flex-wrap gap-2">
          {content.maintain.triggers.map((trigger) => (
            <li
              key={trigger}
              className="rounded-full border px-3 py-1.5 text-sm theme-text-body"
              style={{ borderColor: "var(--theme-border)" }}
            >
              {trigger}
            </li>
          ))}
        </ul>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5">
          {content.maintain.steps.map((step, index) => (
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

      <Section tone="muted" id="security" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeading title={content.security.title} body={content.security.body} />
          <ul className="space-y-3">
            {content.security.items.map((item) => (
              <li key={item} className="theme-card flex items-start gap-3 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="theme-text-body text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <DossierBoard
        id="example"
        title={content.example.title}
        disclaimer={content.example.disclaimer}
        categories={content.example.categories}
        tone="white"
        className="py-10 sm:py-14 lg:py-16"
      />

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
