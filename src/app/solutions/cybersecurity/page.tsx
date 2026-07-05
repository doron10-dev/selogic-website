import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { cybersecurityPage } from "@/data/pages/cybersecurity";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "אבטחת מידע וסייבר",
  description: "הגנה מעשית על משתמשים, ציוד וגישה, הרשאות, עדכונים, גיבוי ומודעות.",
  path: "/solutions/cybersecurity",
});

export default function Page() {
  return <ServicePage content={cybersecurityPage} pagePath="/solutions/cybersecurity" mockupVariant="security" />;
}
