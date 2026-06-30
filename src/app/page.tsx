import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Section, SectionHeading } from "@/components/section";
import { CardGrid } from "@/components/feature-card";
import { PortalSection } from "@/components/home/portal-section";
import { FaqSection } from "@/components/home/faq-section";
import {
  ComparisonSection,
  SlaSection,
  WorkflowSection,
  BeforeAfterSection,
  TechStackSection,
  FinalCtaSection,
} from "@/components/home/sections";
import {
  painPoints,
  serviceProcess,
  channels,
  services,
  audience,
  trust,
} from "@/data/home";

export const metadata: Metadata = {
  title: "סלוג׳יק | שירותי מחשוב מנוהלים לעסקים בישראל",
  description:
    "חברת מחשוב בוטיק לניהול IT, תמיכה, אבטחה, גיבויים, פורטל לקוחות, SLA ושקיפות מלאה לעסקים בישראל.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section tone="paper">
        <SectionHeading title={painPoints.title} body={painPoints.body} />
        <CardGrid items={painPoints.items} cols={3} />
      </Section>

      <Section tone="mute">
        <SectionHeading title={serviceProcess.title} body={serviceProcess.body} />
        <CardGrid items={serviceProcess.items} cols={3} />
      </Section>

      <Section tone="paper">
        <SectionHeading title={channels.title} body={channels.body} />
        <CardGrid items={channels.items} cols={4} />
      </Section>

      <PortalSection />

      <SlaSection />

      <ComparisonSection />

      <TechStackSection />

      <WorkflowSection />

      <BeforeAfterSection />

      <Section tone="paper">
        <SectionHeading title={services.title} body={services.body} />
        <CardGrid items={services.items} cols={4} />
      </Section>

      <Section tone="mute">
        <SectionHeading title={audience.title} body={audience.body} />
        <CardGrid items={audience.items} cols={4} />
      </Section>

      <Section tone="paper">
        <SectionHeading title={trust.title} body={trust.body} />
        <CardGrid items={trust.items} cols={3} />
      </Section>

      <FaqSection />

      <FinalCtaSection />
    </>
  );
}
