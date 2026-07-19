import { siteUrls } from "@/data/contact";
import type { ServicePageContent } from "@/types/service-page";

export type ManagedItLayer = {
  heading: string;
  summary: string;
  labels: string[];
};

export const managedItOperatingLayers: ManagedItLayer[] = [
  {
    heading: "שכבת משתמשים ותמיכה",
    summary: "הרשאות, מחשבים ותמיכה יומיומית — חלק מהאחריות השוטפת, לא טיפול נקודתי.",
    labels: ["משתמשים והרשאות", "מחשבים ותחזוקה", "תמיכה שוטפת"],
  },
  {
    heading: "שכבת מערכות וניטור",
    summary: "רשתות, ניטור ותחזוקה מונעת — מנהלים את התשתית לפני שהמשתמש נתקע.",
    labels: ["רשתות ותקשורת", "ניטור ותחזוקה", "עדכונים מונעים"],
  },
  {
    heading: "שכבת ספקים ותיאום",
    summary: "Selogic מדברת עם ספקי האינטרנט, הטלפוניה והענן — אחריות ייחודית של שירות מנוהל.",
    labels: ["תיאום ספקים", "אינטרנט וטלפוניה", "ענן ושירותים חיצוניים"],
  },
];

export const managedItVisibilitySection = {
  title: "SLA, תיעוד ושקיפות למנהל",
  body: "יעדי שירות מוסכמים, תיעוד החלטות וסטטוס עדכני — בלי לרדוף אחרי טכנאים.",
  points: [
    "SLA לפי הסכמה משותפת",
    "תיעוד סביבה והחלטות",
    "סטטוס ודיווח למנהל",
  ],
  portalLink: {
    label: "KPI ודוחות — פורטל הלקוחות",
    href: siteUrls.clientPortal,
  },
  supportLink: {
    label: "פתיחת קריאה — תמיכה טכנית",
    href: siteUrls.technicalSupport,
  },
};

export const managedItServicesPage: ServicePageContent = {
  hero: {
    eyebrow: "שירותי IT מנוהלים",
    title: "שירותי IT מנוהלים עם כתובת אחת אחראית",
    intro:
      "Selogic מנהלת את סביבת המחשוב של העסק: משתמשים, הרשאות, מחשבים, רשתות, ספקים, תמיכה, תיעוד ובקרה. כל פנייה הופכת לקריאת שירות עם בעל טיפול, סטטוס, SLA והיסטוריה בפורטל.",
    primaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
    secondaryCta: { label: "ראו כל השירותים", href: "/solutions" },
  },
  sectionNav: [
    { id: "ownership", label: "שכבות" },
    { id: "visibility", label: "שקיפות" },
    { id: "faq", label: "שאלות נפוצות" },
    { id: "contact", label: "יצירת קשר" },
  ],
  whatWeDo: {
    title: "מה Selogic מנהלת",
    body: "שלוש שכבות תפעוליות — ממשתמש ועד ספק — תחת אחריות Selogic השוטפת.",
  },
  sla: {
    title: "SLA, תיעוד ושקיפות",
    body: "שירות שנמדד לפי SLA, סטטוס, תיעוד והיסטוריה, לפי יעדים שהוגדרו יחד, גלוי בפורטל.",
  },
  faq: {
    title: "שאלות נפוצות",
    body: "תשובות ישירות על שירותי IT מנוהלים.",
    items: [
      {
        q: "מה ההבדל בין שירותי IT מנוהלים לבין טכנאי נקודתי?",
        a: "שירות מנוהל = אחריות שוטפת על כל סביבת המחשוב, עם ניטור, תיעוד, SLA ותהליך. טכנאי נקודתי = תיקון בודד, בלי בעלות על המערך.",
      },
      {
        q: "האם מתאים לעסק קטן?",
        a: "כן, אם צריך סדר, אחריות ושותף קבוע — לא טכנאי כשצריך.",
      },
      {
        q: "מה המנהל רואה בפועל?",
        a: "סטטוס, תיעוד ו-SLA בפורטל. KPI ודוחות ניהוליים — בפורטל הלקוחות.",
      },
    ],
  },
};
