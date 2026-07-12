import type { Metadata } from "next";
import { RemoteSupportExtras } from "@/components/remote-support-extras";
import { ServicePage } from "@/components/service-page";
import { remoteSupportPage } from "@/data/pages/remote-support";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "תמיכה מרחוק",
  description: "תמיכה מרחוק מסודרת ובטוחה, רק לאחר תיאום עם נציג. כל חיבור מתועד כקריאת שירות.",
  path: "/remote-support",
});

export default function Page() {
  return (
    <ServicePage
      content={remoteSupportPage}
      pagePath="/remote-support"
      afterHero={<RemoteSupportExtras />}
      variant="compact"
    />
  );
}
