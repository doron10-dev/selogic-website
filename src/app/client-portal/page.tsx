import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { clientPortalPage } from "@/data/pages/client-portal";

export const metadata: Metadata = {
  title: "פורטל לקוחות",
  description: "פורטל ארגוני עם שקיפות מלאה — קריאות, סטטוסים, SLA, היסטוריה ופחות שיחות סטטוס.",
};

export default function Page() {
  return <ServicePage content={clientPortalPage} />;
}
