import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר | Selogic",
  description:
    "רוצים להבין איפה ה-IT של העסק עומד? דברו איתנו במייל, בטלפון או בטופס — כל פנייה הופכת לקריאת שירות מסודרת.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
