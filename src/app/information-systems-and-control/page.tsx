import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { Section } from "@/components/section";
import { informationSystemsPage } from "@/data/pages/information-systems-and-control";
import { doronInfoSystemsNote } from "@/data/credentials";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "מערכות מידע ובקרה",
  description:
    "Zendesk, Atera, IT Glue, Priority, Microsoft 365, Power BI ו-Selogic Control Tower, סדר, תיעוד ובקרה עסקית.",
  path: "/information-systems-and-control",
});

export default function Page() {
  return (
    <ServicePage
      content={informationSystemsPage}
      pagePath="/information-systems-and-control"
      mockupVariant="monitoring"
      afterHero={
        <Section tone="muted" className="py-8 sm:py-10">
          <p className="theme-eyebrow mb-2">מי מוביל את התחום</p>
          <p className="theme-text-body max-w-3xl text-[17px] leading-relaxed">{doronInfoSystemsNote}</p>
        </Section>
      }
    />
  );
}
