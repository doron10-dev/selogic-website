import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { networksPage } from "@/data/pages/networks-and-communication";

export const metadata: Metadata = {
  title: "רשתות ותקשורת | Selogic",
  description: "אינטרנט, רשת אלחוטית, חומות אש, טלפוניה — חיבור יציב ותיאום ספקים.",
};

export default function Page() {
  return <ServicePage content={networksPage} />;
}
