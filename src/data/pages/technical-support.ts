import { contactChannels, contactDetails, siteUrls } from "@/data/contact";
import type { CardItem, CtaLink, FaqItem } from "@/types/service-page";

export type RequestChannel = {
  title: string;
  body: string;
  href: string;
};

export type TechnicalSupportPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    diagnosisCta: { label: string; href: string };
  };
  audience: {
    title: string;
    body: string;
    items: CardItem[];
  };
  pain: {
    title: string;
    body: string;
    items: CardItem[];
  };
  process: {
    id: string;
    title: string;
    body: string;
    steps: string[];
  };
  channels: {
    title: string;
    body: string;
    items: RequestChannel[];
  };
  form: {
    id: string;
    title: string;
    body: string;
    loadingText: string;
  };
  afterForm: {
    title: string;
    body: string;
  };
  portal: {
    title: string;
    body: string;
    cta: { label: string; href: string };
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

export const requestChannels: RequestChannel[] = [
  {
    title: "טלפון",
    body: contactDetails.phone,
    href: contactDetails.phoneHref,
  },
  {
    title: "מייל",
    body: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    title: "וואטסאפ",
    body: "ערוץ מהיר לפנייה.",
    href: contactChannels.whatsapp ?? "https://wa.me/97246712500",
  },
  {
    title: "טופס פתיחת קריאה",
    body: "פתיחה מסודרת עם פרטי התקלה.",
    href: "#support-form",
  },
  {
    title: "כלי עזר ללקוח",
    body: "פתיחה מהירה מהעמדה לפי תהליך השירות.",
    href: siteUrls.clientPortal,
  },
];

export const technicalSupportPage: TechnicalSupportPageContent = {
  hero: {
    eyebrow: "תמיכה טכנית",
    title: "תמיכה טכנית מסודרת לעסקים",
    intro:
      "כל פנייה הופכת לקריאה עם סטטוס, בעל טיפול ותיעוד. לקוח קיים יכול לפתוח קריאה, ועסק שבודק ספק IT יכול לראות איך תהליך התמיכה עובד.",
    primaryCta: { label: "פתחו קריאת שירות", href: "#support-form" },
    secondaryCta: { label: "איך עובד תהליך התמיכה", href: "#support-process" },
    diagnosisCta: { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
  },
  audience: {
    title: "שני מסלולים באותו עמוד",
    body: "העמוד מיועד גם להבנת תהליך התמיכה וגם לפתיחת קריאה קיימת.",
    items: [
      {
        title: "לעסק שבודק ספק IT חדש",
        body: "כך נראה שירות תמיכה מסודר: פנייה, קריאה, בעל טיפול, סטטוס, תיעוד והמשך.",
      },
      {
        title: "ללקוח קיים שצריך לפתוח קריאה",
        body: "אפשר לפתוח קריאה בטופס, בטלפון או במייל. כל פנייה נכנסת לתהליך שירות מסודר.",
      },
    ],
  },
  pain: {
    title: "מה קורה כשאין תהליך תמיכה מסודר",
    body: "תקלות קטנות הופכות לרעש כשאין קריאה, סטטוס ותיעוד.",
    items: [
      { title: "עובד תקוע בלי סטטוס", body: "אין ודאות מתי חוזרים לעבוד." },
      { title: "פניות שמתפזרות", body: "טלפון ומייל בלי מעקב מסודר." },
      { title: "לא ברור מי מטפל", body: "אין בעל טיפול לקריאה." },
      { title: "אין היסטוריית טיפול", body: "לא רואים מה כבר נעשה." },
      { title: "מנהל לא רואה מה פתוח", body: "אין תמונת מצב על הקריאות." },
      { title: "תקלה חוזרת מתחילה מאפס", body: "בלי תיעוד, אין המשכיות." },
    ],
  },
  process: {
    id: "support-process",
    title: "איך קריאת שירות עובדת",
    body: "פנייה אחת נכנסת לתהליך ברור, עד סגירה עם היסטוריה.",
    steps: [
      "פנייה מתקבלת",
      "נפתחת קריאת שירות",
      "מוגדר בעל טיפול",
      "מתועד מה נעשה",
      "הלקוח מקבל סטטוס והמשך",
      "הקריאה נסגרת עם היסטוריה",
    ],
  },
  channels: {
    title: "איך פונים אלינו",
    body: "אלה ערוצי הפנייה הבטוחים לתהליך השירות.",
    items: requestChannels,
  },
  form: {
    id: "support-form",
    title: "פתחו קריאת שירות",
    body: "הטופס נשאר הפעולה המרכזית ללקוחות קיימים. אם השליחה אינה פעילה, תוצג הודעת fallback עם פרטי קשר.",
    loadingText: "בודקים אם הטופס זמין...",
  },
  afterForm: {
    title: "מה קורה אחרי פתיחת הקריאה",
    body: "לאחר פתיחת הקריאה, היא נכנסת לתהליך טיפול. לפי סוג הקריאה יוגדר בעל טיפול, יתועדו הפעולות, והסטטוס יתעדכן לפי תהליך השירות.",
  },
  portal: {
    title: "סטטוס, תיעוד ופורטל לקוחות",
    body: "קריאת שירות היא לא רק הודעה. היא כוללת סטטוס, בעל טיפול, תיעוד והיסטוריה. בפורטל הלקוח ניתן לראות מה פתוח, מה בטיפול ומה ההמשך.",
    cta: { label: "ראו פורטל לקוחות", href: siteUrls.clientPortal },
  },
  faq: {
    title: "שאלות נפוצות",
    body: "תשובות קצרות על פתיחת קריאה ותהליך התמיכה.",
    items: [
      {
        q: "איך פותחים קריאת שירות?",
        a: "בטופס בעמוד הזה, בטלפון, במייל או בוואטסאפ. כל פנייה נכנסת לתהליך שירות מסודר.",
      },
      {
        q: "מה קורה אם הטופס לא פעיל?",
        a: "מוצגת הודעת fallback עם טלפון, מייל או וואטסאפ, כדי שאפשר יהיה לפנות בלי שליחה אוטומטית.",
      },
      {
        q: "האם אפשר לפנות בטלפון או במייל?",
        a: "כן. גם פנייה בטלפון, במייל או בוואטסאפ נכנסת לתהליך שירות עם סטטוס ותיעוד.",
      },
      {
        q: "מה קורה אחרי פתיחת הקריאה?",
        a: "הקריאה נכנסת לטיפול, מוגדר בעל טיפול, הפעולות מתועדות והסטטוס מתעדכן לפי תהליך השירות.",
      },
      {
        q: "האם מנהל יכול לראות את סטטוס הקריאות?",
        a: "כן. בפורטל הלקוח ניתן לראות מה פתוח, מה בטיפול ומה ההמשך.",
      },
    ],
  },
  finalCta: {
    title: "צריכים לפתוח קריאה או לבדוק את תהליך התמיכה?",
    body: "לקוחות קיימים יכולים לפתוח קריאה. עסקים שבודקים ספק IT יכולים להתחיל בשיחת אבחון.",
    primary: {
      label: "פתחו קריאת שירות",
      href: "#support-form",
      sub: "המסלול המהיר ללקוחות קיימים.",
    },
    secondary: {
      label: "קבעו שיחת אבחון",
      href: siteUrls.contactDiagnosis,
      sub: "מתאים לעסק שבודק שירות IT מסודר.",
    },
  },
};
