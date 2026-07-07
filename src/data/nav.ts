import { siteUrls } from "@/data/contact";

export type NavItem = {
  label: string;
  href: string;
  /** Shorter label for desktop header when space is tight */
  shortLabel?: string;
};

/**
 * Main navigation — aligned to Selogic's three content worlds:
 * (1) managed IT, (2) monitoring/security/control, (3) information systems & processes.
 */
export const headerNavItems: NavItem[] = [
  { label: "ראשי", href: "/", shortLabel: "ראשי" },
  { label: "שירותי IT מנוהלים", href: "/managed-it-services", shortLabel: "IT מנוהלים" },
  { label: "ניטור ובקרה RMM", href: siteUrls.rmm, shortLabel: "ניטור RMM" },
  { label: "אבטחת מידע וגיבוי", href: "/solutions/cybersecurity", shortLabel: "אבטחה" },
  { label: "Microsoft 365 וענן", href: "/solutions/microsoft-365-and-cloud", shortLabel: "Microsoft 365" },
  { label: "מערכות מידע ובקרה", href: "/information-systems-and-control", shortLabel: "מערכות" },
  { label: "אודות", href: "/about", shortLabel: "אודות" },
  { label: "צור קשר", href: siteUrls.contact, shortLabel: "צור קשר" },
];

/**
 * Secondary routes — kept out of the primary bar but reachable on mobile and in the footer:
 * technical support, remote support, client portal.
 */
export const secondaryNavItems: NavItem[] = [
  { label: "תיק אתר / תיק לקוח", href: siteUrls.siteDossier },
  { label: "תמיכה טכנית", href: siteUrls.technicalSupport },
  { label: "תמיכה מרחוק", href: siteUrls.remoteSupport },
  { label: "פורטל לקוחות", href: siteUrls.clientPortal },
];

/** Mobile menu — primary items plus the secondary group so every page stays reachable. */
export const navItems: NavItem[] = [...headerNavItems, ...secondaryNavItems];

export { contactChannels, siteLabels, siteUrls, getClientPortalHref, getClientPortalLoginHref, hasExternalPortalLogin } from "@/data/contact";
