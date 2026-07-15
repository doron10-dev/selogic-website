import { siteUrls } from "@/data/contact";
import type { CtaLink, FaqItem, HeroCtaLink } from "@/types/service-page";

export type MonitorItem = {
  label: string;
  sub: string;
};

export type RmmContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: HeroCtaLink;
    secondaryCta: HeroCtaLink;
  };
  /** מסר מרכזי: מזהים · מטפלים · מדווחים · משפרים */
  flow: {
    title: string;
    body: string;
    steps: { title: string; body: string }[];
  };
  scope: {
    title: string;
    body: string;
    note: string;
    items: MonitorItem[];
    /** Merged management value (one concise paragraph, replaces the old BenefitsChecklist). */
    valueTitle: string;
    valueSummary: string;
    /** Compact report outputs — up to 4 plain tags (replaces the old standalone ReportsKpiSection). */
    reportTitle: string;
    reportOutputs: string[];
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

export const rmmPage: RmmContent = {
  hero: {
    eyebrow: "ניטור ובקרה RMM",
    title: "מזהים בעיות לפני שהן עוצרות את העסק",
    intro:
      "ניטור שוטף ברקע של סביבת המחשוב: מזהים חריגות מוקדם, מטפלים מרחוק, ומהמידע שנצבר בונים מדדים שאפשר לעקוב אחריהם ולנהל לפיהם. RMM הוא אצלנו שירות ניהולי, לא רק כלי טכני.",
    primaryCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
    secondaryCta: { label: "פתחו קריאת שירות", href: siteUrls.technicalSupport },
  },
  flow: {
    title: "איך הניטור עובד בפועל",
    body: "ארבעה שלבים שחוזרים על עצמם, כדי שסביבת המחשוב תישאר תחת שליטה לאורך זמן.",
    steps: [
      { title: "מזהים מוקדם", body: "ניטור מתמשך של רכיבי הסביבה, כדי לזהות חריגות לפני שהן הופכות להשבתה." },
      { title: "מטפלים מרחוק", body: "כשאפשר, מטפלים בחריגה מרחוק במהירות, בלי להמתין להגעה פיזית." },
      { title: "מדווחים ללקוח", body: "מה שנמצא ומה שטופל מתועד ונכנס לתמונת המצב ולדוח התקופתי." },
      { title: "משפרים לאורך זמן", body: "מזהים מגמות ופערים חוזרים ומתקנים את השורש, לא רק את התקלה." },
    ],
  },
  scope: {
    title: "מה מנטרים ברקע",
    body: "שישה תחומים שמחזיקים את העבודה השוטפת, עם התראה על חריגות.",
    note: "ניטור שוטף ברקע",
    items: [
      { label: "מחשבים ושרתים", sub: "זמינות, עומסים ומשאבים" },
      { label: "עדכונים ואבטחה", sub: "עדכוני מערכת ורכיבי הגנה" },
      { label: "גיבויים והתאוששות", sub: "שהגיבוי רץ והושלם" },
      { label: "רשת ותקשורת", sub: "קישוריות ורכיבי תקשורת" },
      { label: "אירועים וחריגות", sub: "מה פתוח וממתין לטיפול" },
      { label: "רכיבים קריטיים", sub: "תהליכים שחייבים לרוץ" },
    ],
    valueTitle: "מה זה נותן לניהול",
    valueSummary:
      "פחות הפתעות שעוצרות עבודה, טיפול מוקדם ולרוב מרחוק בחריגות, ותמונת מצב אמינה ומתועדת של מה שמנוטר, מה נמצא ומה טופל.",
    reportTitle: "מה מופיע בתמונת המצב",
    reportOutputs: [
      "התראות שנפתחו",
      "רכיבים בסיכון",
      "מה טופל",
      "מגמות לאורך זמן",
    ],
  },
  faq: {
    title: "שאלות נפוצות על ניטור ובקרה",
    body: "מה שחשוב לדעת לפני שמתחילים.",
    items: [
      {
        q: "מה זה RMM בעצם?",
        a: "כלי ניהול וניטור מרחוק שמאפשר לנו לראות את מצב רכיבי הסביבה, לזהות חריגות ולטפל מוקדם, בלי להמתין שתיתקלו בתקלה. אצלנו הוא מנוהל כשירות, לא רק כטכנולוגיה.",
      },
      {
        q: "האם הניטור מחליף גיבוי או אבטחת מידע?",
        a: "לא. הניטור משלים אותם. הוא עוקב אחרי מצב הגיבויים ורכיבי האבטחה ומתריע על חריגות, אבל הוא חלק ממערך רחב יותר של שירות מנוהל.",
      },
      {
        q: "מה קורה כשמזוהה חריגה?",
        a: "אנחנו מתעדים אותה, בודקים, מטפלים מרחוק כשאפשר ומעדכנים אתכם. מה שרלוונטי נכנס לתמונת המצב ולדוח התקופתי.",
      },
      {
        q: "איך אני רואה מה קורה בסביבה שלי?",
        a: "דרך תמונת מצב ודוח תקופתי שמסכמים מה נמצא ומה טופל. בהמשך אפשר גם דרך פורטל הלקוח.",
      },
    ],
  },
  finalCta: {
    title: "רוצים לראות את סביבת המחשוב שלכם בצורה מסודרת?",
    body: "נתחיל בשיחת אבחון קצרה, נבין מה חשוב לכם, ונראה מה אפשר להכניס לניטור ובקרה.",
    primary: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis, sub: "נחזור אליכם תוך יום עסקים אחד" },
    secondary: { label: "פתחו קריאת שירות", href: siteUrls.technicalSupport, sub: "לקוחות קיימים שצריכים טיפול" },
  },
};
