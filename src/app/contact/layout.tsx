import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר | Selogic",
  description:
    "פנו אלינו במייל, טלפון או טופס — כל פנייה הופכת לקריאת שירות מסודרת עם סטטוס, בעל טיפול ותיעוד.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
