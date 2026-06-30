import type { CtaLink, SlaItem } from "@/types/service-page";
import { siteUrls } from "@/data/contact";

/** Portal / SLA feature tiles — badges instead of fabricated KPI numbers. */
export const portalFeatureTiles = [
  { label: "קריאות פתוחות", badge: "בפורטל", sub: "מעקב בזמן אמת", status: "open" as const },
  { label: "עמידה ב-SLA", badge: "לפי SLA", sub: "יעדי שירות", status: "progress" as const },
  { label: "זמן תגובה", badge: "מדיד", sub: "מדד שירות", status: "waiting" as const },
  { label: "תיעוד מלא", badge: "מתועד", sub: "היסטוריית שירות", status: "closed" as const },
];

/** Non-numeric SLA tiles — no fabricated KPI values until live data is connected. */
export const neutralSlaItems: SlaItem[] = portalFeatureTiles.map(({ label, badge, status }) => ({
  label,
  badge,
  status,
}));

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
