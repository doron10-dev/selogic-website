import { siteUrls } from "@/data/contact";
import type { BarTone } from "@/components/home/illustrative-bar";
import type { CtaLink, FaqItem, HeroCtaLink } from "@/types/service-page";

export type PortalDashboardRow = {
  title: string;
  badge: string;
  tone: BarTone;
  fillPercent: number;
};

export type PortalDashboardContent = {
  eyebrow: string;
  title: string;
  body: string;
  queueTitle: string;
  rows: PortalDashboardRow[];
  ticket: {
    title: string;
    badge: string;
    tone: BarTone;
    fields: { label: string; value: string }[];
  };
  lifecycleTitle: string;
  lifecycle: string[];
  historyTitle: string;
  history: { label: string; meta: string }[];
  views: { role: string; body: string }[];
  disclaimer: string;
};

export type ClientPortalContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: HeroCtaLink;
    secondaryCta: HeroCtaLink;
  };
  problem: {
    title: string;
    lead: string;
    points: string[];
  };
  dashboard: PortalDashboardContent;
  value: {
    title: string;
    body: string;
    points: { title: string; body: string }[];
  };
  reports: {
    title: string;
    body: string;
    reportTitle: string;
    reportItems: string[];
    kpiTitle: string;
    kpiItems: string[];
    disclaimer: string;
  };
  connection: {
    title: string;
    body: string;
    links: { title: string; href: string }[];
  };
  faq: {
    title: string;
    body: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    body: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};

export const clientPortalPage: ClientPortalContent = {
  hero: {
    eyebrow: "פורטל לקוח",
    title: "פורטל לקוח שמראה מה קורה, בלי לרדוף אחרי עדכונים",
    intro:
      "כששירות IT מתנהל בטלפון, וואטסאפ ומייל, קשה לדעת מה פתוח, מי אחראי ומה כבר הסתיים. פורטל הלקוח של סלוג׳יק מרכז את הקריאות, הסטטוסים, ההיסטוריה והדוחות במקום אחד — וכך הלקוח מקבל תמונה ברורה על השירות.",
    primaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
    secondaryCta: { label: "ראו שירותי IT מנוהלים", href: "/managed-it-services" },
  },
  problem: {
    title: "בלי פורטל, הלקוח רודף אחרי סטטוס",
    lead: "בלי מקום מרוכז למעקב, כל עדכון דורש טלפון או הודעה, וקשה לראות תמונה מלאה של השירות.",
    points: ["קריאות מתפזרות בין ערוצים", "אין סטטוס אחיד וברור", "צריך להתקשר כדי לדעת מה קורה"],
  },
  dashboard: {
    eyebrow: "מסך הפורטל",
    title: "ככה נראית קריאת שירות בפורטל",
    body: "כל קריאה מקבלת סטטוס, בעל טיפול, עדכונים והיסטוריה — הלקוח רואה מה פתוח, מה בטיפול ומה הסתיים, לפי הרשאות.",
    queueTitle: "קריאות אחרונות",
    rows: [
      { title: "תקלת דואר בעמדת עבודה", badge: "בטיפול", tone: "orange", fillPercent: 62 },
      { title: "הקמת משתמש חדש", badge: "ממתין לאישור", tone: "blue", fillPercent: 40 },
      { title: "בדיקת גיבוי חודשית", badge: "הושלם", tone: "green", fillPercent: 100 },
    ],
    ticket: {
      title: "תקלת דואר בעמדת עבודה · ‎#SL-1042",
      badge: "בטיפול",
      tone: "orange",
      fields: [
        { label: "סטטוס", value: "בטיפול" },
        { label: "בעל טיפול", value: "צוות התמיכה של סלוג׳יק" },
        { label: "עדכון אחרון", value: "הותקן עדכון, בבדיקה מול המשתמש" },
        { label: "שלב הבא", value: "אימות מול המשתמש וסגירה" },
      ],
    },
    lifecycleTitle: "מחזור החיים של קריאה",
    lifecycle: ["נפתחה", "בטיפול", "ממתינה ללקוח", "הושלמה", "מתועדת"],
    historyTitle: "עדכונים אחרונים",
    history: [
      { label: "עודכן סטטוס הקריאה", meta: "לפני שעה" },
      { label: "צורף תיעוד טיפול", meta: "היום" },
      { label: "נשלח דוח חודשי", meta: "1 בחודש" },
    ],
    views: [
      { role: "תצוגת מנהל", body: "תמונת מצב על כלל הקריאות, עומסים, מגמות ודוחות תקופתיים." },
      { role: "תצוגת משתמש", body: "הקריאות שהוא פתח, הסטטוס שלהן והעדכונים שנוגעים אליו." },
    ],
    disclaimer: "המחשה בלבד. נתונים אמיתיים מוצגים לאחר חיבור לסביבת הלקוח.",
  },
  value: {
    title: "למה זה משנה בעבודה השוטפת",
    body: "שקיפות היא לא רק נוחות — היא משנה איך מנהלים את השירות.",
    points: [
      {
        title: "פחות רדיפה אחרי סטטוס",
        body: "אין צורך להתקשר ולשאול מה קורה עם הקריאה — הסטטוס והעדכון גלויים בפורטל.",
      },
      {
        title: "החלטות על בסיס מידע",
        body: "רואים תקלות חוזרות ועומסים לאורך זמן, אז קל יותר להחליט מה כדאי לשפר.",
      },
      {
        title: "אחריות ברורה לכל קריאה",
        body: "לכל קריאה יש בעל טיפול, סטטוס ותיעוד — פחות דברים שנופלים בין הכיסאות.",
      },
    ],
  },
  reports: {
    title: "מקריאות שירות לדוח ניהולי",
    body: "המידע שנצבר בקריאות הופך לדוח תקופתי ולמדדים לאורך זמן, ולא רק לרשימת פניות.",
    reportTitle: "מה מסכם דוח הפורטל",
    reportItems: [
      "סקירת קריאות שירות",
      "קריאות פתוחות מול שהסתיימו",
      "אירועים שדרשו תשומת לב",
      "מגמות ותקלות חוזרות",
      "עומסים לפי תקופה",
      "המלצות להמשך",
    ],
    kpiTitle: "סוגי מדדים",
    kpiItems: [
      "קריאות שנפתחו",
      "קריאות שהסתיימו",
      "קריאות פתוחות",
      "תקלות חוזרות",
      "אירועים בולטים",
      "נושאים להחלטה",
    ],
    disclaimer: "להמחשה בלבד. הנתונים מוצגים לאחר חיבור לסביבת הלקוח.",
  },
  connection: {
    title: "הפורטל ותיק הלקוח משלימים זה את זה",
    body: "הפורטל מראה את תהליך השירות: קריאות, סטטוסים ודוחות. תיק הלקוח מרכז את המידע הטכני של סביבת המחשוב — משתמשים, ציוד, הרשאות וגיבויים. יחד הם נותנים שקיפות על השירות ושליטה על המידע.",
    links: [
      { title: "שירותי IT מנוהלים", href: "/managed-it-services" },
      { title: "ניטור ובקרה RMM", href: siteUrls.rmm },
      { title: "תיק אתר / תיק לקוח", href: siteUrls.siteDossier },
    ],
  },
  faq: {
    title: "שאלות נפוצות על פורטל הלקוח",
    body: "מה שחשוב לדעת על השקיפות, הקריאות והדוחות.",
    items: [
      {
        q: "מה ההבדל בין פורטל לקוח לתיק אתר?",
        a: "פורטל הלקוח מציג את קריאות השירות, הסטטוסים, ההיסטוריה והדוחות. תיק האתר מרכז את המידע הטכני והתפעולי על סביבת המחשוב של העסק.",
      },
      {
        q: "האם הפורטל מחליף פנייה לצוות?",
        a: "לא. הפורטל מסדר את הפנייה ואת המעקב אחריה. הוא עוזר ללקוח ולצוות לראות מה פתוח, מה בטיפול ומה הסתיים.",
      },
      {
        q: "מה רואים בקריאת שירות?",
        a: "רואים את נושא הקריאה, הסטטוס, בעל הטיפול, תיעוד הפעולות, עדכונים רלוונטיים והמשך טיפול לפי הצורך.",
      },
      {
        q: "למה זה חשוב למנהל?",
        a: "המנהל מקבל תמונת מצב ברורה יותר על השירות, עומסים, תקלות חוזרות, קריאות פתוחות ונושאים שדורשים החלטה.",
      },
    ],
  },
  finalCta: {
    title: "רוצים לראות את הפורטל בפעולה?",
    body: "נראה לכם איך הלקוח רואה את השירות, הקריאות, הסטטוסים והדוחות במקום אחד, ונבנה תהליך שקוף ומסודר.",
    primary: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis, sub: "הדגמה + תמונת מצב ראשונית" },
    secondary: { label: "ראו שירותי IT מנוהלים", href: "/managed-it-services", sub: "כתובת אחת אחראית לסביבת המחשוב" },
  },
};
