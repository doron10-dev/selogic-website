import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Section, SectionHeading } from "@/components/section";
import { CardGrid } from "@/components/feature-card";
import { PortalSection } from "@/components/home/portal-section";
import { FaqSection } from "@/components/home/faq-section";
import {
  ManagedItSection,
  SupportProcessSection,
  ComparisonSection,
  SlaSection,
  WorkflowSection,
  TechStackSection,
  FinalCtaSection,
} from "@/components/home/sections";
import {
  painPoints,
  services,
  audience,
} from "@/data/home";

export const metadata: Metadata = {
  title: "סלוג׳יק | שירותי מחשוב מנוהלים לעסקים בישראל",
  description:
    "חברת מחשוב בוטיק לניהול IT, תמיכה, אבטחה, גיבויים, פורטל לקוחות, SLA ושקיפות מלאה לעסקים בישראל.",
};

export default function HomePage() {
  const trustPrinciples = ["מי מטפל", "מה הסטטוס", "מה תועד", "מה ההמשך"];
  const coreServiceHrefs = new Set([
    "/solutions/cybersecurity",
    "/solutions/backup-and-recovery",
    "/solutions/microsoft-365-and-cloud",
    "/solutions/networks-and-communication",
  ]);
  const coreServiceItems = services.items.filter((item) => item.href && coreServiceHrefs.has(item.href));

  return (
    <>
      <Hero />

      <div className="border-y border-slate-line bg-paper">
        <div className="container-page grid grid-cols-2 gap-2 py-4 sm:grid-cols-4">
          {trustPrinciples.map((item) => (
            <div key={item} className="rounded-pill bg-paper-mute px-4 py-2 text-center text-sm font-semibold text-slate-ink">
              {item}
            </div>
          ))}
        </div>
      </div>

      <Section tone="paper">
        <SectionHeading title={painPoints.title} body={painPoints.body} />
        <CardGrid items={painPoints.items} cols={3} />
      </Section>

      <ManagedItSection />

      <SupportProcessSection />

      <PortalSection />

      <SlaSection />

      <TechStackSection />

      <Section tone="paper">
        <SectionHeading title={services.title} body={services.body} />
        <CardGrid items={coreServiceItems} cols={4} />
      </Section>

      <WorkflowSection />

      <ComparisonSection />

      <Section tone="mute">
        <SectionHeading title={audience.title} body={audience.body} />
        <CardGrid items={audience.items} cols={4} />
      </Section>

      <FaqSection />

      <FinalCtaSection />
    </>
  );
}
