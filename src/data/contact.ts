/**
 * Central site configuration — contact channels, URLs, and labels.
 *
 * Forms: gated by FORMS_ENABLED + Resend env vars (see .env.example).
 * TODO(production): Set external client portal login URL when available (clientPortalExternal).
 */

export const contactDetails = {
  companyName: "Selogic",
  phone: "072-777-7777",
  phoneHref: "tel:0727777777",
  whatsapp: "97246712500",
  email: "info@selogic.co.il",
  address: "רחוב העמקים 3, ת.ד 1582, טבריה",
} as const;

export const siteUrls = {
  contact: "/contact",
  /** טופס קביעת שיחת אבחון — נפרד מעמוד צור קשר הכללי */
  contactDiagnosis: "/contact#diagnosis",
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
export function getPhoneDisplayLabel(): string {
  return contactDetails.phone;
}

/** Visible label for email in UI. */
export function getEmailDisplayLabel(): string {
  return contactDetails.email;
}

/** Shown when forms are disabled or mail is not configured yet. */
export const formNotConnectedMessage = {
  title: "הטופס עדיין לא מחובר לשליחה אוטומטית",
  lead: "כדי לקבל מענה, צרו קשר בטלפון",
  phone: contactDetails.phone,
  phoneHref: contactDetails.phoneHref,
  emailLead: "או במייל",
  email: contactDetails.email,
  emailHref: `mailto:${contactDetails.email}`,
} as const;

export const formSuccessMessages = {
  contact: {
    title: "הבקשה נשלחה",
    body: "קיבלנו את הפרטים. נחזור אליכם בהקדם לתיאום שיחת אבחון.",
  },
  support: {
    title: "הקריאה נשלחה",
    body: "קיבלנו את הפרטים. נחזור אליכם בהקדם.",
  },
} as const;

export const formErrorMessage = {
  title: "לא הצלחנו לשלוח",
  validation: "יש למלא את השדות הנדרשים ולנסות שוב.",
  generic: "אירעה שגיאה בשליחה. נסו שוב בעוד כמה דקות.",
  lead: "אפשר גם לפנות בטלפון",
  phone: contactDetails.phone,
  phoneHref: contactDetails.phoneHref,
  emailLead: "או במייל",
  email: contactDetails.email,
  emailHref: `mailto:${contactDetails.email}`,
} as const;
