import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { technicalSupportPage } from "@/data/pages/technical-support";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "תמיכה טכנית לעסקים",
  description:
    "פתחו קריאת שירות, כל פנייה מקבלת סטטוס, בעל טיפול ותיעוד. מייל, טלפון או טופס.",
  path: "/technical-support",
});

const breadcrumbs = getBreadcrumbTrail("/technical-support");

export default function TechnicalSupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(technicalSupportPage.faq.items)} />
      <JsonLd data={buildBreadcrumbJsonLd("/technical-support", breadcrumbs)} />
      {children}
    </>
  );
}
