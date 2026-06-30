import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תמיכה טכנית | Selogic",
  description:
    "פתחו קריאת שירות — כל פנייה מקבלת סטטוס, בעל טיפול ותיעוד מלא. מלאו את הפרטים ונחזור אליכם.",
};

export default function TechnicalSupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
