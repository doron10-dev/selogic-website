import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { ReportsKpiSection } from "@/components/sections/reports-kpi";
import { TrustBar } from "@/components/sections/trust-bar";
import { cybersecurityPage } from "@/data/pages/cybersecurity";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "אבטחת מידע וסייבר",
  description: "הגנה מעשית על משתמשים, ציוד וגישה, הרשאות, עדכונים, גיבוי ומודעות.",
  path: "/solutions/cybersecurity",
});

const securityReport = {
  title: "דוח אבטחה, סיכונים והמלצות",
  body: "אבטחת מידע דורשת בקרה מתמשכת, לא רק התקנת מוצרים. סלוג׳יק מרכזת בדוח את מצב ההגנה, הגיבויים, ההרשאות, אירועי האבטחה, הפערים הפתוחים וההמלצות לשיפור.",
  reportTitle: "מבנה דוח אבטחה",
  reportCaption: "הדוח עוזר למנהל להבין איפה קיימים סיכונים, מה טופל, ומה דורש החלטה או פעולה.",
  reportItems: [
    "מצב הגנה",
    "מצב גיבויים",
    "הרשאות",
    "אירועי אבטחה",
    "פערים פתוחים",
    "המלצות לשיפור",
  ],
  kpiTitle: "מדדים אפשריים",
  kpiItems: [
    "גיבויים",
    "עדכונים",
    "הרשאות",
    "EDR או אנטי וירוס",
    "אירועי אבטחה",
    "גיבוי תיבות דואר",
    "Firewall",
    "Mail Relay",
    "סיכונים פתוחים",
    "המלצות להמשך",
  ],
  disclaimer: "להמחשה בלבד. הנתונים מוצגים לאחר חיבור לסביבת הלקוח.",
};

export default function Page() {
  return (
    <ServicePage
      content={cybersecurityPage}
      pagePath="/solutions/cybersecurity"
      mockupVariant="security"
      afterHero={
        <>
          <TrustBar heading="אבטחת מידע מבוססת סטנדרטים וניסיון" showPublicBodies={false} tone="muted" />
          <ReportsKpiSection
            title={securityReport.title}
            body={securityReport.body}
            reportTitle={securityReport.reportTitle}
            reportItems={securityReport.reportItems}
            reportCaption={securityReport.reportCaption}
            kpiTitle={securityReport.kpiTitle}
            kpiItems={securityReport.kpiItems}
            disclaimer={securityReport.disclaimer}
            tone="white"
          />
        </>
      }
    />
  );
}
