import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { PortalLoginBand } from "@/components/portal-login-band";
import { clientPortalPage } from "@/data/pages/client-portal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "פורטל לקוחות",
  description: "פורטל ארגוני עם שקיפות מלאה, קריאות, סטטוסים, SLA, היסטוריה ופחות שיחות סטטוס.",
  path: "/client-portal",
});

export default function Page() {
  return <ServicePage content={clientPortalPage} pagePath="/client-portal" mockupVariant="portal" afterHero={<PortalLoginBand />} />;
}
