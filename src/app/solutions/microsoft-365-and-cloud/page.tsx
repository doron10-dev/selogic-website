import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { microsoft365Page } from "@/data/pages/microsoft-365-and-cloud";

export const metadata: Metadata = {
  title: "Microsoft 365 וענן",
  description: "ניהול Microsoft 365 — דואר, צוותים, קבצים, הרשאות, רישיונות וסדר.",
};

export default function Page() {
  return <ServicePage content={microsoft365Page} />;
}
