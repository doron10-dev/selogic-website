import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { managedItServicesPage } from "@/data/pages/managed-it-services";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "שירותי IT מנוהלים",
  description: "ניהול מלא של סביבת המחשוב לעסק, תשתית, משתמשים, ניטור, תמיכה, תיעוד ו-SLA.",
  path: "/managed-it-services",
});

export default function Page() {
  return <ServicePage content={managedItServicesPage} pagePath="/managed-it-services" variant="flagship" mockupVariant="dispatch" />;
}
