import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { managedItServicesPage } from "@/data/pages/managed-it-services";

export const metadata: Metadata = {
  title: "שירותי מחשוב מנוהלים | Selogic",
  description: "ניהול מלא של סביבת המחשוב לעסק — תשתית, משתמשים, ניטור, תמיכה, תיעוד ו-SLA.",
};

export default function Page() {
  return <ServicePage content={managedItServicesPage} variant="flagship" />;
}
