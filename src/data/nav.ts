import { siteLabels, siteUrls, getClientPortalHref } from "@/data/contact";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "בית", href: "/" },
  { label: "שירותי מחשוב מנוהלים", href: "/managed-it-services" },
  { label: "פתרונות", href: "/solutions" },
  { label: "מערכות ובקרה", href: "/information-systems-and-control" },
  { label: "פורטל לקוחות", href: siteUrls.clientPortal },
  { label: siteLabels.remoteSupport, href: siteUrls.remoteSupport },
  { label: "אודות", href: "/about" },
  { label: siteLabels.contact, href: siteUrls.contact },
];

export { contactChannels, siteLabels, siteUrls, getClientPortalHref } from "@/data/contact";
