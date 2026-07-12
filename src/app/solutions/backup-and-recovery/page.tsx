import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { backupRecoveryPage } from "@/data/pages/backup-and-recovery";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "גיבוי והתאוששות",
  description: "המשכיות עסקית, ניטור גיבויים, בדיקות שחזור ותהליך התאוששות מסודר.",
  path: "/solutions/backup-and-recovery",
});

export default function Page() {
  return <ServicePage content={backupRecoveryPage} pagePath="/solutions/backup-and-recovery" />;
}
