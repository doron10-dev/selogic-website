/**
 * Central site configuration — contact channels, URLs, and labels.
 *
 * TODO: connect contact form backend
 * TODO: connect support ticket backend
 * TODO(production): Set external client portal login URL when available (clientPortalExternal).
 * TODO(production): Set WhatsApp number when available.
 */

export const contactDetails = {
  companyName: "Selogic",
  phone: "072-777-7777",
  phoneHref: "tel:0727777777",
  whatsapp: null as string | null,
  email: "info@selogic.co.il",
  address: "רחוב העמקים 3, ת.ד 1582, טבריה",
} as const;

export const siteUrls = {
  contact: "/contact",
  clientPortal: "/client-portal",
  /** TODO(production): External portal login URL — falls back to clientPortal page */
  clientPortalExternal: null as string | null,
  remoteSupport: "/remote-support",
  technicalSupport: "/technical-support",
} as const;

export const siteLabels = {
  contact: "צרו קשר",
  clientPortal: "כניסה לפורטל לקוחות",
  remoteSupport: "תמיכה מרחוק",
  contactCta: "קבעו שיחת אבחון",
  callSupport: "התקשרו לתמיכה",
} as const;

export type ContactChannelLinks = {
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
};

export function getClientPortalHref(): string {
  return siteUrls.clientPortalExternal ?? siteUrls.clientPortal;
}

export function getContactChannels(): ContactChannelLinks {
  return {
    phone: contactDetails.phoneHref,
    whatsapp: contactDetails.whatsapp
      ? `https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}`
      : null,
    email: contactDetails.email ? `mailto:${contactDetails.email}` : null,
  };
}

/** Resolved channel links — use in components. */
export const contactChannels = getContactChannels();

/** Visible label for phone in UI. */
export function getPhoneDisplayLabel(): string | null {
  return contactDetails.phone;
}
