import { siteUrls } from "@/data/contact";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "ראשי", href: "/" },
  { label: "שירותי IT מנוהלים", href: "/managed-it-services" },
  { label: "כל השירותים", href: "/solutions" },
  { label: "תמיכה טכנית לעסקים", href: siteUrls.technicalSupport },
  { label: "פורטל לקוחות", href: siteUrls.clientPortal },
  { label: "מערכות ובקרה", href: "/information-systems-and-control" },
  { label: "אודות", href: "/about" },
  { label: "צור קשר", href: siteUrls.contact },
];

export { contactChannels, siteLabels, siteUrls, getClientPortalHref } from "@/data/contact";
