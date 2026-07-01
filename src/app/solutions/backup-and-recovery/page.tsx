import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { backupRecoveryPage } from "@/data/pages/backup-and-recovery";

export const metadata: Metadata = {
  title: "גיבוי והתאוששות",
  description: "המשכיות עסקית — ניטור גיבויים, בדיקות שחזור ותהליך התאוששות מסודר.",
};

export default function Page() {
  return <ServicePage content={backupRecoveryPage} />;
}
