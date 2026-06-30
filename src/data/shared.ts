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
  title: "רוצים לדעת איפה המחשוב בעסק עומד?",
  body: "נבדוק את סביבת המחשוב, נזהה סיכונים ותקלות חוזרות, ונבנה לכם תהליך שירות ברור.",
  primary: {
    label: "קבעו שיחת אבחון",
    href: siteUrls.contactDiagnosis,
    sub: "נבין את המצב ונציע צעד ראשון.",
  },
  secondary: {
    label: "פתחו קריאת שירות",
    href: siteUrls.technicalSupport,
    sub: "שלחו הודעה ונחזור אליכם.",
  },
} satisfies { title: string; body: string; primary: CtaLink; secondary: CtaLink };
