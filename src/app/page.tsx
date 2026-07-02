import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Section, SectionHeading } from "@/components/section";
import { CardGrid } from "@/components/feature-card";
import { PortalSection } from "@/components/home/portal-section";
import { FaqSection } from "@/components/home/faq-section";
import {
  TrustStrip,
  FlagshipSection,
  WorkflowSection,
  ServicesHubSection,
  SlaControlSection,
  ComparisonSection,
  FinalCtaSection,
} from "@/components/home/sections";
import { painPoints, audience } from "@/data/home";

export const metadata: Metadata = {
  title: "סלוג׳יק | IT מנוהל עם קריאות, סטטוס ושקיפות למנהל",
  description:
    "סלוג׳יק מנהלת לעסקים את התמיכה, התשתיות, הענן, האבטחה והמעקב השוטף — עם קריאות, סטטוס, תיעוד ופורטל לקוחות.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — headline, short text, CTAs, compact illustrative board */}
      <Hero />

      {/* 2. Trust strip — מי מטפל · מה הסטטוס · מה תועד · מה ההמשך */}
      <TrustStrip />

      {/* 3. Pain points — the business reality before Selogic (kept tight) */}
      <Section tone="paper">
        <SectionHeading title={painPoints.title} body={painPoints.body} />
        <CardGrid items={painPoints.items} cols={3} />
      </Section>

      {/* 4. Flagship managed IT — the main offering */}
      <FlagshipSection />

      {/* 5. How Selogic works — one clear flow */}
      <WorkflowSection />

      {/* 6. Services hub — choose the right service, "כל השירותים" prominent */}
      <ServicesHubSection />

      {/* 7. Portal and transparency — manager vs user, illustrative */}
      <PortalSection />

      {/* 8. SLA and control — badge tiles, no fake numbers */}
      <SlaControlSection />

      {/* 9. Trust comparison — respectful boutique positioning */}
      <ComparisonSection />

      {/* 10. Audience — who the service fits */}
      <Section tone="mute">
        <SectionHeading title={audience.title} body={audience.body} />
        <CardGrid items={audience.items} cols={4} />
      </Section>

      {/* 11. FAQ — accordion, incl. honest SLA question */}
      <FaqSection />

      {/* 12. Final CTA — separate prospects from existing clients */}
      <FinalCtaSection />
    </>
  );
}
