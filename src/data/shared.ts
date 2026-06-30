import type { CtaLink, SlaItem } from "@/types/service-page";
import { siteUrls } from "@/data/contact";

/** Non-numeric SLA tiles — no fabricated KPI values until live data is connected. */
export const neutralSlaItems: SlaItem[] = [
  { label: "קריאות פתוחות", main: "בפורטל" },
  { label: "עמידה ב-SLA", main: "לפי SLA" },
  { label: "זמן תגובה", main: "מדיד" },
  { label: "תיעוד מלא", main: "מתועד" },
];

export const defaultSlaItems: SlaItem[] = neutralSlaItems;

export const defaultFinalCta = {
  title: "רוצים להבין איפה ה-IT של העסק עומד?",
  body: "דברו איתנו ונבנה יחד תמונת מצב ראשונית — ונראה איך תהליך שירות מסודר נראה אצלכם.",
  primary: {
    label: "קבעו שיחת אבחון",
    href: siteUrls.contactDiagnosis,
    sub: "שיחה ראשונית — בלי התחייבות.",
  },
  secondary: {
    label: "פתחו קריאת שירות",
    href: siteUrls.technicalSupport,
    sub: "כבר לקוח? פתחו קריאה.",
  },
} satisfies { title: string; body: string; primary: CtaLink; secondary: CtaLink };
