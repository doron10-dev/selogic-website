import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { microsoft365Page } from "@/data/pages/microsoft-365-and-cloud";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Microsoft 365 וענן",
  description: "ניהול Microsoft 365, דואר, צוותים, קבצים, הרשאות, רישיונות וסדר.",
  path: "/solutions/microsoft-365-and-cloud",
});

export default function Page() {
  return <ServicePage content={microsoft365Page} pagePath="/solutions/microsoft-365-and-cloud" mockupVariant="m365" />;
}
