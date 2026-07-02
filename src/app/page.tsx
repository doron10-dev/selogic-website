import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Section, SectionHeading } from "@/components/section";
import { CardGrid } from "@/components/feature-card";
import { PortalSection } from "@/components/home/portal-section";
import { FaqSection } from "@/components/home/faq-section";
import {
  TrustStripSection,
  ManagedItSection,
  HowWeWorkSection,
  ServicesHubSection,
  ComparisonSection,
  SlaSection,
  CompactTechStackSection,
  FinalCtaSection,
} from "@/components/home/sections";
import { painPoints, audience } from "@/data/home";

export const metadata: Metadata = {
  title: "שירותי IT מנוהלים לעסקים בישראל",
  description:
    "שירותי IT מנוהלים, תמיכה טכנית, פורטל לקוחות ו-SLA לעסקים בישראל — כולל אזור טבריה והצפון.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStripSection />

      <Section tone="paper">
        <SectionHeading title={painPoints.title} body={painPoints.body} />
        <CardGrid items={painPoints.items} cols={3} density="compact" />
      </Section>

      <ManagedItSection />
      <HowWeWorkSection />
      <ServicesHubSection />
      <PortalSection />
      <SlaSection />
      <CompactTechStackSection />
      <ComparisonSection />

      <Section tone="mute">
        <SectionHeading title={audience.title} body={audience.body} />
        <CardGrid items={audience.items} cols={4} density="compact" />
      </Section>

      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
