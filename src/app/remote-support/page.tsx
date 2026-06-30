import type { Metadata } from "next";
import { RemoteSupportExtras } from "@/components/remote-support-extras";
import { ServicePage } from "@/components/service-page";
import { remoteSupportPage } from "@/data/pages/remote-support";

export const metadata: Metadata = {
  title: "תמיכה מרחוק | Selogic",
  description: "תמיכה מרחוק מסודרת ובטוחה — רק לאחר תיאום עם נציג. כל חיבור מתועד כקריאת שירות.",
};

export default function Page() {
  return <ServicePage content={remoteSupportPage} afterHero={<RemoteSupportExtras />} />;
}
