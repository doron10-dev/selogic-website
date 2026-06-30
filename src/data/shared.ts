import type { CtaLink, SlaItem } from "@/types/service-page";
import { siteUrls } from "@/data/contact";

/** Non-numeric display for SLA tiles — real values live in the client portal. */
export const portalMetricDisplay = {
  count: "בפורטל",
  percent: "לפי SLA",
  score: "מתועד",
  time: "מדיד",
} as const;

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

export const defaultSlaItems: SlaItem[] = [
  { value: portalMetricDisplay.time, label: "זמן תגובה ממוצע" },
  { value: portalMetricDisplay.percent, label: "עמידה ב-SLA" },
  { value: portalMetricDisplay.count, label: "קריאות שטופלו החודש" },
  { value: portalMetricDisplay.score, label: "שביעות רצון לקוחות" },
];
