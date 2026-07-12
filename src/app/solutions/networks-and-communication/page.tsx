import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { networksPage } from "@/data/pages/networks-and-communication";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "רשתות ותקשורת",
  description: "אינטרנט, רשת אלחוטית, חומות אש, טלפוניה, חיבור יציב ותיאום ספקים.",
  path: "/solutions/networks-and-communication",
});

export default function Page() {
  return <ServicePage content={networksPage} pagePath="/solutions/networks-and-communication" />;
}
