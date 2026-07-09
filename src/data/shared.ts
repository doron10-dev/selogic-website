import type { CtaLink } from "@/types/service-page";
import { siteUrls } from "@/data/contact";

export const defaultFinalCta = {
  title: "רוצים להבין איפה ה-IT של העסק עומד?",
  body: "דברו איתנו ונבנה יחד תמונת מצב ראשונית, ונראה איך תהליך שירות מסודר נראה אצלכם.",
  primary: {
    label: "קבעו שיחת אבחון",
    href: siteUrls.contactDiagnosis,
    sub: "שיחה ראשונית, בלי התחייבות.",
  },
  secondary: {
    label: "פתחו קריאת שירות",
    href: siteUrls.technicalSupport,
    sub: "כבר לקוח? פתחו קריאה.",
  },
} satisfies { title: string; body: string; primary: CtaLink; secondary: CtaLink };
