import { defaultSlaItems } from "@/data/shared";
import { siteUrls } from "@/data/contact";
import type { ServicePageContent } from "@/types/service-page";

export const clientPortalPage: ServicePageContent = {
  hero: {
    eyebrow: "פורטל לקוחות",
    title: "מנהל רואה הכל. משתמש רואה שלו.",
    intro:
      "לכל לקוח Selogic יש פורטל ארגוני. מנהל רואה את כל קריאות הארגון — סטטוס, SLA, תקלות חוזרות והיסטוריה. משתמש רואה את הקריאות שלו, מה תועד ומה ההמשך. פחות שיחות «מה קורה?» — יותר שליטה.",
    statusKind: "closed",
    primaryCta: { label: "ראו איך הפורטל עובד", href: siteUrls.clientPortal },
    secondaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
  },
  pain: {
    title: "בלי פורטל — אין שקיפות",
    body: "כשאין מקום אחד לראות מה קורה, המנהל והעובדים תלויים בטלפון ובמייל.",
    items: [
      { title: "«מה קורה?»", body: "שיחות סטטוס חוזרות — בלי תשובה ברורה." },
      { title: "אין היסטוריה", body: "לא ברור מה טופל בעבר." },
      { title: "מידע מפוזר", body: "מייל, טלפון — בלי מקור אמת." },
      { title: "מנהל עיוור", body: "לא רואה את כל הקריאות בארגון." },
      { title: "משתמש ממתין", body: "לא יודע מי מטפל ומתי." },
      { title: "אין SLA גלוי", body: "לא ברור איך השירות עומד ביעדים." },
    ],
  },
  whatWeDo: {
    title: "מה יש בפורטל",
    body: "ממשק ללקוח — לא למערכות הפנימיות.",
    items: [
      { title: "תצוגת מנהל", body: "כל הקריאות · SLA · תקלות חוזרות · היסטוריה." },
      { title: "תצוגת משתמש", body: "הקריאות שלי · סטטוס · עדכונים · מה תועד." },
      { title: "סטטוסים", body: "פתוח, בטיפול, ממתין, נסגר — תמיד ברור." },
      { title: "בעל טיפול", body: "לכל קריאה — מי אחראי." },
      { title: "SLA גלוי", body: "איך השירות עומד ביעדים שהוגדרו." },
      { title: "פתיחת קריאה", body: "מכל ערוץ — הכל נכנס לפורטל.", href: siteUrls.technicalSupport },
    ],
  },
  clientGains: {
    title: "מה זה נותן",
    body: "פחות אי-ודאות. יותר שליטה. רשומת שירות מלאה.",
    items: [
      { title: "פחות רעש", body: "הכל בפורטל — לא צריך לרדוף אחרי עדכונים." },
      { title: "שקיפות למנהל", body: "תמונת מצב על כל הארגון." },
      { title: "עצמאות למשתמש", body: "רואה סטטוס ועדכונים — בלי להמתין." },
      { title: "תיעוד", body: "מה נעשה, מתי, ולמה — לכל קריאה." },
      { title: "מדידה", body: "SLA וסטטוס — גלויים, לא מוסתרים." },
      { title: "אמון", body: "תהליך ברור — לא «נבדוק ונחזור»." },
    ],
  },
  howItWorks: {
    title: "איך זה עובד בפועל",
    body: "פונים כרגיל — ורואים הכל בפורטל.",
    steps: [
      { n: 1, title: "פנייה", body: "מייל, טלפון או טופס קריאה." },
      { n: 2, title: "קריאה", body: "נוצרת עם סטטוס ובעל טיפול." },
      { n: 3, title: "טיפול", body: "כל פעולה מתועדת." },
      { n: 4, title: "מעקב", body: "מנהל ומשתמש רואים בפורטל." },
      { n: 5, title: "סגירה", body: "היסטוריה נשמרת לעתיד." },
    ],
  },
  sla: {
    title: "SLA בפורטל",
    body: "שירות שנמדד לפי SLA, סטטוס, תיעוד והיסטוריה — גלוי למנהלים, לפי יעדים שהוגדרו יחד.",
    items: defaultSlaItems,
  },
  related: {
    title: "שירותים קשורים",
    body: "הפורטל הוא החלון — אלה השירותים שמאחוריו.",
    items: [
      { title: "מחשוב מנוהל", body: "הבסיס.", href: "/managed-it-services" },
      { title: "תמיכה טכנית", body: "פתיחת קריאות.", href: siteUrls.technicalSupport },
      { title: "מערכות ובקרה", body: "Selogic Control Tower.", href: "/information-systems-and-control" },
      { title: "תמיכה מרחוק", body: "חיבור מסודר.", href: siteUrls.remoteSupport },
      { title: "פתרונות", body: "כל השירותים.", href: "/solutions" },
      { title: "קביעת שיחת אבחון", body: "נראה לכם את הפורטל.", href: siteUrls.contactDiagnosis },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    body: "שאלות על הפורטל והשקיפות.",
    items: [
      { q: "מי רואה מה?", a: "מנהל — כל קריאות הארגון. משתמש — רק שלו." },
      { q: "צריך התקנה?", a: "לא. נגיש מהדפדפן." },
      { q: "אפשר לפתוח קריאה?", a: "כן — וגם ממייל, טלפון או טופס. הכל בפורטל." },
      { q: "מה רואים ב-SLA?", a: "איך השירות עומד ביעדים — סטטוס, תיעוד, קריאות פתוחות." },
      { q: "יש היסטוריה?", a: "כן — כל קריאה עם תיעוד טיפול מלא." },
    ],
  },
  finalCta: {
    title: "רוצים לראות את הפורטל בפעולה?",
    body: "נראה לכם איך מנהל ומשתמש רואים את השירות — ונבנה תהליך מותאם.",
    primary: {
      label: "קבעו שיחת אבחון",
      href: siteUrls.contactDiagnosis,
      sub: "הדגמה + תמונת מצב ראשונית.",
    },
    secondary: {
      label: "פתחו קריאת שירות",
      href: siteUrls.technicalSupport,
      sub: "כבר לקוח? פתחו קריאה.",
    },
  },
};
