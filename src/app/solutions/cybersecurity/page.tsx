import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { TrustBar } from "@/components/sections/trust-bar";
import { cybersecurityPage } from "@/data/pages/cybersecurity";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "אבטחת מידע וסייבר",
  description: "הגנה מעשית על משתמשים, ציוד וגישה, הרשאות, עדכונים, גיבוי ומודעות.",
  path: "/solutions/cybersecurity",
});

export default function Page() {
  return (
    <ServicePage
      content={cybersecurityPage}
      pagePath="/solutions/cybersecurity"
      mockupVariant="security"
      afterHero={<TrustBar heading="אבטחת מידע מבוססת סטנדרטים וניסיון" showPublicBodies={false} tone="muted" />}
    />
  );
}
