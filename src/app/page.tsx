import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { PortalSection } from "@/components/home/portal-section";
import { FaqSection } from "@/components/home/faq-section";
import { WhySection, ServicesBentoSection, ProcessSection, FinalCtaSection } from "@/components/home/sections";
import { TrustBar } from "@/components/sections/trust-bar";
import { ReportsKpiSection } from "@/components/sections/reports-kpi";
import { JsonLd } from "@/components/json-ld";
import { faq, reportsKpi } from "@/data/home";
import { buildFaqJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "שירותי IT מנוהלים לעסקים בישראל",
  description:
    "שירותי IT מנוהלים, תמיכה טכנית, פורטל לקוחות ותהליך שירות מסודר לעסקים בישראל, כולל אזור טבריה והצפון.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(faq.items)} />
      <Hero />
      <TrustBar heading="אמון, תקנים וניסיון" />
      <WhySection />
      <ServicesBentoSection />
      <ReportsKpiSection
        title={reportsKpi.title}
        body={reportsKpi.body}
        reportTitle={reportsKpi.reportTitle}
        reportItems={reportsKpi.reportItems}
        reportCaption={reportsKpi.reportCaption}
        kpiTitle={reportsKpi.kpiTitle}
        kpiItems={reportsKpi.kpiItems}
        kpiCaption={reportsKpi.kpiCaption}
        disclaimer={reportsKpi.disclaimer}
        tone="muted"
      />
      <PortalSection />
      <ProcessSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
