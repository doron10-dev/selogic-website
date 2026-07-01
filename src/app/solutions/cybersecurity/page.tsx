import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { cybersecurityPage } from "@/data/pages/cybersecurity";

export const metadata: Metadata = {
  title: "אבטחת מידע וסייבר",
  description: "הגנה מעשית על משתמשים, ציוד וגישה — הרשאות, עדכונים, גיבוי ומודעות.",
};

export default function Page() {
  return <ServicePage content={cybersecurityPage} />;
}
