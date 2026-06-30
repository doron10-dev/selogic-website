import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { aboutPage } from "@/data/pages/about";

export const metadata: Metadata = {
  title: "אודות | Selogic",
  description: "חברת מחשוב בוטיק לעסקים בישראל — שירות אישי, אחריות, תיעוד, פורטל ו-SLA.",
};

export default function Page() {
  return <ServicePage content={aboutPage} />;
}
