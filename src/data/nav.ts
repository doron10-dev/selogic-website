import { siteUrls } from "@/data/contact";

export type NavItem = {
  label: string;
  href: string;
  /** Shorter label for desktop header when space is tight */
  shortLabel?: string;
};

/** Approved main navigation — desktop and mobile (no /solutions in header) */
export const headerNavItems: NavItem[] = [
  { label: "ראשי", href: "/", shortLabel: "ראשי" },
  { label: "שירותי IT מנוהלים", href: "/managed-it-services", shortLabel: "IT מנוהלים" },
  { label: "תמיכה טכנית", href: siteUrls.technicalSupport, shortLabel: "תמיכה" },
  { label: "פורטל לקוחות", href: siteUrls.clientPortal, shortLabel: "פורטל" },
  { label: "מערכות ובקרה", href: "/information-systems-and-control", shortLabel: "מערכות" },
  { label: "אודות", href: "/about", shortLabel: "אודות" },
  { label: "צור קשר", href: siteUrls.contact, shortLabel: "צור קשר" },
];

/** Mobile menu — same routes; solutions hub remains in footer only */
export const navItems: NavItem[] = headerNavItems;

export { contactChannels, siteLabels, siteUrls, getClientPortalHref, getClientPortalLoginHref, hasExternalPortalLogin } from "@/data/contact";
