import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר",
  description:
    "קבעו שיחת אבחון ומיפוי מצב קיים — בטלפון, במייל, בוואטסאפ או בטופס. כתובת: רחוב העמקים 3, ת.ד 1582, טבריה.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
