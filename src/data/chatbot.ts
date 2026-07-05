import {
  contactChannels,
  contactDetails,
  getClientPortalLoginHref,
  getPhoneDisplayLabel,
  siteUrls,
} from "@/data/contact";

export type ChatAction =
  | { kind: "link"; label: string; href: string; description?: string; external?: boolean }
  | { kind: "step"; label: string; stepId: string; description?: string };

export type ChatStep = {
  id: string;
  title: string;
  body?: string;
  actions: ChatAction[];
};

export const chatRootStepId = "root";

export const chatSteps: Record<string, ChatStep> = {
  root: {
    id: "root",
    title: "איך אפשר לעזור?",
    body: "בחרו את סוג הפנייה וננתב אתכם לערוץ המתאים.",
    actions: [
      {
        kind: "step",
        label: "תמיכה דחופה",
        stepId: "urgent",
        description: "תקלה פעילה, מערכת לא עובדת או דחיפות גבוהה.",
      },
      {
        kind: "link",
        label: "שיחת אבחון / הצעת מחיר",
        href: siteUrls.contactDiagnosis,
        description: "לעסק חדש או שדרוג של שירות IT קיים.",
      },
      {
        kind: "step",
        label: "שאלה כללית",
        stepId: "general",
        description: "מידע, תיאום שיחה או פנייה שאינה דחופה.",
      },
      {
        kind: "link",
        label: "כניסה לפורטל לקוחות",
        href: getClientPortalLoginHref(),
        description: "צפייה בקריאות, סטטוסים ו-SLA.",
      },
    ],
  },
  urgent: {
    id: "urgent",
    title: "תמיכה דחופה",
    body: "לקוח קיים: פתחו קריאת שירות כדי שנוכל לתעד, לעקוב ולטפל לפי SLA.",
    actions: [
      {
        kind: "link",
        label: "פתיחת קריאת שירות",
        href: siteUrls.technicalSupport,
        description: "טופס מסודר עם דחיפות ותיעוד.",
      },
      ...(contactChannels.phone
        ? [
            {
              kind: "link" as const,
              label: `חיוג: ${getPhoneDisplayLabel()}`,
              href: contactChannels.phone,
              description: "לתיאום מיידי עם נציג.",
            },
          ]
        : []),
      ...(contactChannels.whatsapp
        ? [
            {
              kind: "link" as const,
              label: "וואטסאפ",
              href: contactChannels.whatsapp,
              external: true,
              description: "ערוץ מהיר, עם מעקב בקריאה.",
            },
          ]
        : []),
      {
        kind: "step",
        label: "חזרה לתפריט",
        stepId: chatRootStepId,
      },
    ],
  },
  general: {
    id: "general",
    title: "שאלה כללית",
    body: "נשמח לעזור. אפשר לכתוב לנו או לתאם שיחה קצרה.",
    actions: [
      {
        kind: "link",
        label: "טופס צור קשר",
        href: siteUrls.contact,
        description: "פרטים, תיאום שיחה או שאלה עסקית.",
      },
      ...(contactChannels.email
        ? [
            {
              kind: "link" as const,
              label: contactDetails.email,
              href: contactChannels.email,
              description: "מייל ישיר לצוות Selogic.",
            },
          ]
        : []),
      {
        kind: "link",
        label: "שאלות נפוצות",
        href: "/#faq",
        description: "תשובות קצרות על שירות, SLA ופורטל.",
      },
      {
        kind: "step",
        label: "חזרה לתפריט",
        stepId: chatRootStepId,
      },
    ],
  },
};
