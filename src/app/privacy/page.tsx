import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacyPage } from "@/data/pages/privacy";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של Selogic: איסוף מידע, שימוש, שמירה וזכויות במסגרת שימוש באתר.",
  path: "/privacy",
});

export default function Page() {
  return <LegalPage content={privacyPage} />;
}
