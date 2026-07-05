export type PageSectionLink = {
  id: string;
  label: string;
};

export const servicePageNavSections: PageSectionLink[] = [
  { id: "pain", label: "אתגרים" },
  { id: "what-we-do", label: "מה עושים" },
  { id: "benefits", label: "יתרונות" },
  { id: "process", label: "תהליך" },
  { id: "sla", label: "SLA" },
  { id: "related", label: "שירותים קשורים" },
  { id: "faq", label: "שאלות נפוצות" },
  { id: "contact", label: "יצירת קשר" },
];

export const solutionsHubNavSections: PageSectionLink[] = [
  { id: "solutions-list", label: "פתרונות" },
  { id: "benefits", label: "יתרונות" },
  { id: "faq", label: "שאלות נפוצות" },
  { id: "contact", label: "יצירת קשר" },
];

export const technicalSupportNavSections: PageSectionLink[] = [
  { id: "audience", label: "למי זה מתאים" },
  { id: "pain", label: "אתגרים" },
  { id: "support-process", label: "תהליך" },
  { id: "channels", label: "ערוצי פנייה" },
  { id: "support-form", label: "פתיחת קריאה" },
  { id: "faq", label: "שאלות נפוצות" },
  { id: "contact", label: "יצירת קשר" },
];
