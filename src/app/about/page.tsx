import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { aboutPage } from "@/data/pages/about";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "חברת IT בוטיק מטבריה — תהליך שירות מסודר, פורטל לקוחות, SLA ותיעוד לעסקים בישראל.",
};

export default function Page() {
  return <ServicePage content={aboutPage} />;
}
