import { siteUrls } from "@/data/contact";
import type { CardItem, HeroCtaLink } from "@/types/service-page";

export const solutionsHubHero = {
  eyebrow: "שירותי Selogic",
  title: "כל שירותי Selogic — בחרו מה מתאים לעסק",
  intro:
    "כל שירות נכנס לאותו תהליך: קריאת שירות, סטטוס, בעל טיפול, תיעוד ובקרה. לא חייבים להתחיל מהכל. אפשר להתחיל משיחת אבחון, להבין איפה הפערים, ולבחור את השירות שמתאים לעסק.",
  primaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis } satisfies HeroCtaLink,
  secondaryCta: { label: "ראו שירותי IT מנוהלים", href: "/managed-it-services" } satisfies HeroCtaLink,
};

export const solutionsHubCardsSection = {
  title: "בחרו את השירות שמתאים לעסק",
  body: "כל שירות נכנס לאותו תהליך — קריאה, סטטוס, בעל טיפול, תיעוד ובקרה.",
};

export const solutionsHubCards: CardItem[] = [
  {
    title: "שירותי IT מנוהלים",
    body: "כתובת אחת אחראית לסביבת המחשוב — משתמשים, הרשאות, תמיכה, תיעוד ובקרה.",
    href: "/managed-it-services",
    featured: true,
  },
  {
    title: "תמיכה טכנית לעסקים",
    body: "כל פנייה הופכת לקריאה עם סטטוס, בעל טיפול ותיעוד — במייל, בטלפון או בטופס.",
    href: "/technical-support",
  },
  {
    title: "אבטחת מידע וסייבר",
    body: "הרשאות, גישה, עדכונים ותיעוד — כחלק מתהליך שירות עם קריאות ומעקב.",
    href: "/solutions/cybersecurity",
  },
  {
    title: "גיבוי והתאוששות",
    body: "מה לגבות, ניטור, בדיקות שחזור ותהליך התאוששות — עם קריאות על כשלים.",
    href: "/solutions/backup-and-recovery",
  },
  {
    title: "Microsoft 365 וענן",
    body: "משתמשים, דואר, קבצים, הרשאות ורישיונות — מנוהלים עם קריאות שירות.",
    href: "/solutions/microsoft-365-and-cloud",
  },
  {
    title: "רשתות ותקשורת",
    body: "אינטרנט, Wi-Fi, טלפוניה ותיאום ספקים — עם גורם אחד אחראי.",
    href: "/solutions/networks-and-communication",
  },
  {
    title: "מערכות ובקרה",
    body: "בקרה תפעולית על קריאות, ניטור, תיעוד ודוחות — למנהל.",
    href: "/information-systems-and-control",
  },
  {
    title: "פורטל לקוחות",
    body: "מנהל רואה את כל הקריאות. משתמש רואה את שלו — סטטוס, SLA והיסטוריה.",
    href: "/client-portal",
  },
  {
    title: "תמיכה מרחוק",
    body: "חיבור מתואם בלבד — עם קריאה, בעל טיפול ותיעוד הפעולה.",
    href: "/remote-support",
  },
];

export const solutionsHubSharedSection = {
  title: "מה משותף לכל השירותים",
  body: "תהליך שירות אחד — קריאות, תיעוד ובקרה.",
  items: [
    { title: "קריאות מסודרות", body: "כל פנייה — במייל, בטלפון או בטופס — הופכת לקריאה עם סטטוס ובעל טיפול." },
    { title: "פורטל לקוחות", body: "מנהל רואה את כל הקריאות. משתמש רואה את שלו — סטטוס, SLA והיסטוריה." },
    { title: "תיעוד", body: "כל טיפול, החלטה ופעולה — נשמרים." },
    { title: "SLA, סטטוס ותיעוד", body: "לפי יעדים שהוגדרו יחד — גלויים בפורטל." },
    { title: "כתובת אחת אחראית", body: "Selogic מרכזת אחריות — לא אתם." },
    { title: "בקרה", body: "דוחות, ניטור ומעקב — חלק מאותו תהליך." },
  ] satisfies CardItem[],
};

export const solutionsHubFaq = {
  title: "שאלות נפוצות",
  body: "איך בוחרים את השירות הנכון לעסק?",
  items: [
    {
      q: "האם צריך את כל השירותים?",
      a: "לא בהכרח. בשיחת האבחון נבין מה העסק צריך — ונבנה חבילה מותאמת.",
    },
    {
      q: "איך יודעים מאיפה להתחיל?",
      a: "משיחת אבחון — מבינים איפה הפערים, ובוחרים את השירות שמתאים. הרבה מתחילים מ-IT מנוהל או תמיכה.",
    },
    {
      q: "מה משותף לכל השירותים?",
      a: "קריאה, סטטוס, בעל טיפול, תיעוד ובקרה — בפורטל, לפי יעדים שהוגדרו יחד.",
    },
    {
      q: "האם אפשר להתחיל משירות אחד?",
      a: "כן. הרבה לקוחות מתחילים מתמיכה או IT מנוהל, ומרחיבים לפי הצורך.",
    },
    {
      q: "האם מנהל רואה את הקריאות בפורטל?",
      a: "כן. מנהל רואה את כל קריאות הארגון — סטטוס, SLA, תיעוד והיסטוריה.",
    },
  ],
};

export const solutionsHubMetadata = {
  title: "שירותי Selogic | Selogic",
  description:
    "שירותי IT לעסקים — IT מנוהל, תמיכה, אבטחה, גיבוי, Microsoft 365, רשתות, בקרה, פורטל לקוחות ותמיכה מרחוק. כל שירות עם קריאות, סטטוס ותיעוד.",
};
