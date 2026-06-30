import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { informationSystemsPage } from "@/data/pages/information-systems-and-control";

export const metadata: Metadata = {
  title: "מערכות מידע ובקרה | Selogic",
  description:
    "Zendesk, Atera, IT Glue, Priority, Microsoft 365, Power BI ו-Selogic Control Tower — סדר, תיעוד ובקרה עסקית.",
};

export default function Page() {
  return <ServicePage content={informationSystemsPage} />;
}
