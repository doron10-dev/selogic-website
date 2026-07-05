import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { PortalSection } from "@/components/home/portal-section";
import { FaqSection } from "@/components/home/faq-section";
import { WhySection, ServicesBentoSection, ProcessSection, FinalCtaSection } from "@/components/home/sections";
import { JsonLd } from "@/components/json-ld";
import { faq } from "@/data/home";
import { buildFaqJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "שירותי IT מנוהלים לעסקים בישראל",
  description:
    "שירותי IT מנוהלים, תמיכה טכנית, פורטל לקוחות ו-SLA לעסקים בישראל, כולל אזור טבריה והצפון.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(faq.items)} />
      <Hero />
      <WhySection />
      <ServicesBentoSection />
      <PortalSection />
      <ProcessSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
