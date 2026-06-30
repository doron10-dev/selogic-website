import { siteUrls } from "@/data/contact";
import { defaultSlaItems } from "@/data/shared";
import type { ServicePageContent } from "@/types/service-page";

export const informationSystemsPage: ServicePageContent = {
  hero: {
    eyebrow: "מערכות מידע ובקרה",
    title: "מערכות שנותנות שליטה — לא רק לטכנאי",
    intro:
      "Selogic משתמשת ב-Zendesk, Atera, IT Glue, Priority, Microsoft 365, Power BI ו-Selogic Control Tower — כדי לתת ללקוח סדר, שקיפות, מדידה ושליטה עסקית. לא רשימת כלים — תהליך שירות שלם.",
    primaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
    secondaryCta: { label: "ראו פורטל לקוחות", href: siteUrls.clientPortal },
  },
  pain: {
    title: "בלי מערכות — אין שליטה",
    body: "בלי תיעוד, דיווח ובקרה — המנהל לא יודע מה קורה בשירות ובתשתית.",
    items: [
      { title: "אין תמונת מצב", body: "לא ברור מה פתוח, מה SLA, מה חוזר." },
      { title: "מידע מפוזר", body: "קבצים, מייל, טלפון — בלי מקור אמת." },
      { title: "אין תיעוד", body: "«מי יודע איך המערכת מוגדרת?»" },
      { title: "דוחות ידניים", body: "שעות על נתונים שלא מעודכנים." },
      { title: "IT מנותק מהעסק", body: "מערכות שלא משרתות החלטות." },
      { title: "אין שקיפות", body: "הלקוח תלוי בשיחות לדעת מה קורה." },
    ],
  },
  whatWeDo: {
    title: "ערך עסקי — לא רשימת כלים",
    body: "כל מערכת נותנת משהו ללקוח:",
    items: [
      { title: "Zendesk", body: "מי מטפל · מה הסטטוס · מה ההיסטוריה — לכל קריאה." },
      { title: "Atera", body: "ניטור — לטפל לפני שהמשתמש נתקע." },
      { title: "IT Glue", body: "תיעוד סביבה — לא «מתחילים מאפס»." },
      { title: "Priority", body: "חיבור לתהליכים עסקיים — כשצריך." },
      { title: "Microsoft 365", body: "סביבת עבודה מסודרת — משתמשים, הרשאות, דואר." },
      { title: "Power BI", body: "דוחות למנהל — מה קורה בשירות ובתשתית." },
      { title: "Selogic Control Tower", body: "מבט-על — קריאות, ניטור, מדדים, שליטה." },
    ],
  },
  clientGains: {
    title: "מה הלקוח מרוויח",
    body: "שקיפות, מדידה ושליטה — בלי להיכנס לפרטים הטכניים.",
    items: [
      { title: "תמונת מצב", body: "מה פתוח, מה הסטטוס, איך השירות עומד." },
      { title: "פחות רעש", body: "הכל בפורטל — לא «מה קורה?»", href: siteUrls.clientPortal },
      { title: "תיעוד", body: "היסטוריה לכל קריאה ולכל סביבה." },
      { title: "דוחות", body: "מדדים שמאפשרים החלטות." },
      { title: "שירות מדיד", body: "SLA, סטטוס, תיעוד — גלויים." },
      { title: "שליטה", body: "Selogic Control Tower — מבט-על על המערך." },
    ],
  },
  howItWorks: {
    title: "איך המערכות עובדות יחד",
    body: "פנייה אחת → תהליך אחד → דיווח ללקוח.",
    steps: [
      { n: 1, title: "פנייה", body: "מייל, טלפון או טופס קריאה." },
      { n: 2, title: "קריאה", body: "Zendesk — סטטוס, בעל טיפול, תיעוד." },
      { n: 3, title: "טיפול", body: "Atera + IT Glue — ניטור ותיעוד." },
      { n: 4, title: "דיווח", body: "Power BI + Selogic Control Tower — למנהל." },
      { n: 5, title: "שיפור", body: "בקרה, ניתוח, התפתחות." },
    ],
  },
  sla: {
    title: "SLA, תיעוד ושקיפות",
    body: "שירות שנמדד לפי SLA, סטטוס, תיעוד והיסטוריה — בפורטל ובדוחות, לפי יעדים שהוגדרו יחד.",
    items: defaultSlaItems,
  },
  related: {
    title: "פתרונות קשורים",
    body: "המערכות משרתות את השירות — הפורטל משרת אתכם.",
    items: [
      { title: "פורטל לקוחות", body: "הממשק שלכם.", href: siteUrls.clientPortal },
      { title: "מחשוב מנוהל", body: "הבסיס.", href: "/managed-it-services" },
      { title: "פתרונות IT", body: "כל השירותים.", href: "/solutions" },
      { title: "תמיכה טכנית", body: "פתיחת קריאות.", href: siteUrls.technicalSupport },
      { title: "אודות", body: "הגישה של Selogic.", href: "/about" },
      { title: "קביעת שיחת אבחון", body: "תמונת מצב.", href: siteUrls.contactDiagnosis },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    body: "שאלות על מערכות, בקרה ודיווח.",
    items: [
      { q: "הלקוח רואה את המערכות?", a: "רואה את הפורטל והדוחות — זה הממשק. לא את המערכות הפנימיות." },
      { q: "מה זה Selogic Control Tower?", a: "מבט-על תפעולי — קריאות, ניטור, מדדים, שליטה על מערך המחשוב." },
      { q: "צריך ללמוד מערכות?", a: "לא. הפורטל פשוט — רואים מה שרלוונטי." },
      { q: "איך נמדד SLA?", a: "לפי סטטוס, תיעוד והיסטוריה — בפורטל, לפי יעדים שהוגדרו יחד." },
    ],
  },
};
