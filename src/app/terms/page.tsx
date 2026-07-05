import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsPage } from "@/data/pages/terms";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "תנאי שימוש",
  description: "תנאי השימוש באתר Selogic: שימוש מותר, טפסים, קניין רוחני ויצירת קשר.",
  path: "/terms",
});

export default function Page() {
  return <LegalPage content={termsPage} />;
}
