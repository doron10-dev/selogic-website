export type BreadcrumbItem = {
  label: string;
  href?: string;
};

/** Segments after "דף הבית"; last item is the current page (no href). */
const breadcrumbRoutes: Record<string, BreadcrumbItem[]> = {
  "/managed-it-services": [{ label: "שירותי IT מנוהלים" }],
  "/rmm": [{ label: "ניטור ובקרה RMM" }],
  "/site-dossier": [{ label: "תיק אתר / תיק לקוח" }],
  "/technical-support": [{ label: "תמיכה טכנית" }],
  "/client-portal": [{ label: "פורטל לקוחות" }],
  "/information-systems-and-control": [{ label: "מערכות מידע ובקרה" }],
  "/remote-support": [{ label: "תמיכה מרחוק" }],
  "/about": [{ label: "אודות" }],
  "/solutions": [{ label: "פתרונות" }],
  "/solutions/cybersecurity": [
    { label: "פתרונות", href: "/solutions" },
    { label: "אבטחת מידע וגיבוי" },
  ],
  "/solutions/backup-and-recovery": [
    { label: "פתרונות", href: "/solutions" },
    { label: "גיבוי והתאוששות" },
  ],
  "/solutions/microsoft-365-and-cloud": [
    { label: "פתרונות", href: "/solutions" },
    { label: "Microsoft 365 וענן" },
  ],
  "/solutions/networks-and-communication": [
    { label: "פתרונות", href: "/solutions" },
    { label: "רשתות ותקשורת" },
  ],
};

export function getBreadcrumbTrail(pagePath: string): BreadcrumbItem[] {
  return breadcrumbRoutes[pagePath] ?? [];
}

export function hasBreadcrumbTrail(pagePath: string): boolean {
  return pagePath in breadcrumbRoutes;
}
