import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { informationSystemsPage } from "@/data/pages/information-systems-and-control";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "מערכות מידע ובקרה",
  description:
    "Zendesk, Atera, IT Glue, Priority, Microsoft 365, Power BI ו-Selogic Control Tower, סדר, תיעוד ובקרה עסקית.",
  path: "/information-systems-and-control",
});

export default function Page() {
  return <ServicePage content={informationSystemsPage} pagePath="/information-systems-and-control" mockupVariant="monitoring" />;
}
