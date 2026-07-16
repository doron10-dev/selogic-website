import { siteUrls } from "@/data/contact";
import type { CloudGovernanceStage } from "@/components/sections/cloud-access-map";
import type { CtaLink, FaqItem, HeroCtaLink } from "@/types/service-page";

export type Microsoft365Content = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: HeroCtaLink;
    secondaryCta: HeroCtaLink;
  };
  manage: {
    title: string;
    body: string;
    stages: CloudGovernanceStage[];
    footnote: string;
  };
  challenges: {
    title: string;
    body: string;
    items: string[];
    closing: string;
  };
  process: {
    title: string;
    body: string;
    steps: { title: string; body: string }[];
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

export const microsoft365Page: Microsoft365Content = {
  hero: {
    eyebrow: "Microsoft 365 וענן",
    title: "Microsoft 365 וענן שמנוהלים בצורה מסודרת, מאובטחת ומתועדת",
    intro:
      "Microsoft 365 הוא לב סביבת העבודה: דואר, קבצים, Teams, SharePoint, OneDrive, משתמשים והרשאות. אנחנו מסדרים משתמשים, הרשאות, קבוצות, קבצים, Teams וגיבויים, כדי שהארגון יעבוד נקי ובטוח.",
    primaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
    secondaryCta: { label: "ראו אבטחת מידע וגיבוי", href: "/solutions/cybersecurity" },
  },
  challenges: {
    title: "Microsoft 365 צריך ניהול, לא רק התקנה",
    body: "הרבה עסקים משתמשים ב־Microsoft 365 בכל יום, אבל לא תמיד מנהלים אותו בצורה מסודרת.",
    items: [
      "משתמשים נשארים פעילים אחרי שעובד עוזב",
      "הרשאות נפתחות ולא נסגרות",
      "קבצים מפוזרים בין OneDrive, Teams ו־SharePoint",
      "תיבות דואר לא תמיד מגובות",
      "אין תיעוד מסודר של קבוצות, הרשאות ותפקידים",
      "הנהלה לא תמיד יודעת למי יש גישה למידע רגיש",
    ],
    closing:
      "בסלוג׳יק מתייחסים לזהויות ולהרשאות כחלק מאבטחת המידע — ניהול מסודר של Microsoft 365 עוזר לעסק לעבוד מסודר, בטוח ושקוף יותר.",
  },
  manage: {
    title: "מזהות המשתמש ועד הבקרה — הכול מנוהל כתהליך אחד",
    body: "לא רשימת פיצ׳רים: כל רכיב בסביבת Microsoft 365 מנוהל כשלב במפת גישה וממשל אחת, מהמשתמש ועד התיעוד.",
    stages: [
      {
        label: "זהויות ומשתמשים",
        caption: "מי קיים ומי עדיין פעיל",
        chips: ["משתמשים", "קבוצות", "תפקידים"],
      },
      {
        label: "גישה והרשאות",
        caption: "מי ניגש למה, ובאיזו רמת אבטחה",
        chips: ["הרשאות", "שיתופים", "אימות רב־שלבי", "מדיניות גישה"],
      },
      {
        label: "עומסי עבודה",
        caption: "איפה יושב המידע העסקי",
        chips: ["תיבות דואר", "Teams", "SharePoint", "OneDrive"],
      },
      {
        label: "בקרה והמשכיות",
        caption: "שמירה, תיעוד ושליטה לאורך זמן",
        chips: ["גיבוי ייעודי", "תיעוד בתיק הלקוח", "דוחות והמלצות"],
      },
    ],
    footnote:
      "Microsoft 365 מספקת תשתית ענן חזקה, אבל לעיתים נדרש פתרון גיבוי ייעודי לתיבות דואר, קבצים, SharePoint, OneDrive ו־Teams. סלוג׳יק בודקת את הצורך, ממפה את המידע, ומסייעת לבנות מדיניות גיבוי שמתאימה לסביבת העבודה של הלקוח.",
  },
  process: {
    title: "איך מסדרים סביבת Microsoft 365",
    body: "ארבעה שלבים, ממיפוי המשתמשים ועד תיעוד ובקרה בתיק הלקוח — כך סביבת הענן הופכת לחלק מתהליך IT מסודר, ולא לאוסף הגדרות שמצטברות לאורך זמן.",
    steps: [
      {
        title: "מיפוי משתמשים והרשאות",
        body: "בודקים מי פעיל, אילו קבוצות קיימות, מי מחזיק גישה ומה דורש ניקוי.",
      },
      {
        title: "בדיקת תיבות, קבצים ועומסי עבודה",
        body: "ממפים תיבות דואר, תיבות משותפות, SharePoint, OneDrive ו־Teams.",
      },
      {
        title: "אבטחה, גיבוי והמשכיות",
        body: "בודקים אימות, מדיניות גישה, הרשאות יתר, צורך בגיבוי ייעודי ומדיניות שחזור.",
      },
      {
        title: "תיעוד ובקרה",
        body: "מרכזים את המידע בתיק הלקוח ומגדירים דוחות והמלצות להמשך.",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות על Microsoft 365 וענן",
    body: "מה שחשוב לדעת על ניהול סביבת העבודה, ההרשאות והגיבוי.",
    items: [
      {
        q: "האם Microsoft 365 מתאים רק למיילים?",
        a: "לא. Microsoft 365 כולל דואר, קבצים, Teams, SharePoint, OneDrive, משתמשים, קבוצות, הרשאות ושירותי ענן נוספים. לכן צריך לנהל אותו כסביבת עבודה מלאה.",
      },
      {
        q: "האם צריך לגבות Microsoft 365?",
        a: "במקרים רבים כן. Microsoft מספקת תשתית ענן וזמינות, אבל עסקים רבים צריכים פתרון גיבוי ייעודי לתיבות דואר, קבצים וסביבות עבודה, לפי הצורך והסיכון.",
      },
      {
        q: "מה קורה כשעובד עוזב?",
        a: "צריך לסגור או לשנות גישות, לטפל בתיבה, להעביר מידע לפי הצורך, לתעד את השינוי ולוודא שאין הרשאות מיותרות שנשארו פתוחות.",
      },
      {
        q: "איך יודעים למי יש גישה למידע?",
        a: "בודקים משתמשים, קבוצות, הרשאות, שיתופים ותפקידים. את המידע מתעדים בתיק הלקוח ומעדכנים לפי שינויים בסביבה.",
      },
      {
        q: "איך Microsoft 365 מתחבר לאבטחת מידע?",
        a: "דרך ניהול הרשאות, אימות רב־שלבי, מדיניות גישה, הגנה על דואר, גיבויים, תיעוד ובקרה על משתמשים ומידע.",
      },
    ],
  },
  finalCta: {
    title: "רוצים לנהל את סביבת Microsoft 365 בצורה מסודרת?",
    body: "בואו נמפה יחד את המשתמשים, ההרשאות, התיבות, הקבצים והגיבויים, ונבנה סביבת עבודה מסודרת, מאובטחת ומתועדת.",
    primary: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis, sub: "נחזור אליכם תוך יום עסקים אחד" },
    secondary: { label: "ראו אבטחת מידע וגיבוי", href: "/solutions/cybersecurity", sub: "הרשאות, הקשחה וגיבוי כחלק מהמערך" },
  },
};
