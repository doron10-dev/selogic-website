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
  /** Used for maps / Waze links on contact page */
  mapsQuery: "רחוב העמקים 3, טבריה",
} as const;

export function getAddressMapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.mapsQuery)}`;
}

export function getAddressWazeUrl(): string {
  return `https://waze.com/ul?q=${encodeURIComponent(contactDetails.mapsQuery)}&navigate=yes`;
}

export const siteUrls = {
  contact: "/contact",
  /** טופס קביעת שיחת אבחון — נפרד מעמוד צור קשר הכללי */
  contactDiagnosis: "/contact#diagnosis",
  clientPortal: "/client-portal",
  /** Anchor on portal marketing page when external login is not configured yet */
  clientPortalLogin: "/client-portal#portal-login",
  /** TODO(production): External portal login URL — falls back to clientPortal page */
  clientPortalExternal: null as string | null,
  remoteSupport: "/remote-support",
  technicalSupport: "/technical-support",
  rmm: "/rmm",
  privacy: "/privacy",
  terms: "/terms",
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

export function getClientPortalLoginHref(): string {
  return siteUrls.clientPortalExternal ?? siteUrls.clientPortalLogin;
}

export function hasExternalPortalLogin(): boolean {
  return Boolean(siteUrls.clientPortalExternal);
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
    body: "קיבלנו את הפרטים. נחזור אליכם תוך יום עסקים אחד לתיאום שיחת אבחון.",
    nextStep:
      "לקוח קיים שצריך תמיכה דחופה? אפשר לפתוח קריאת שירות במקביל.",
    nextStepLink: { label: "פתחו קריאת שירות", href: siteUrls.technicalSupport },
  },
  support: {
    title: "הקריאה נשלחה",
    body: "קיבלנו את הפרטים. נחזור אליכם בהקדם לפי דחיפות הקריאה.",
    nextStep: "לדחיפות גבוהה, אפשר גם להתקשר ישירות.",
  },
} as const;

/** Shown when forms are disabled mid-session (503) or unavailable at submit time. */
export const formUnavailableMessage =
  "הטופס אינו זמין כרגע לשליחה. פנו בטלפון או במייל, נחזור לתיאום שיחת אבחון.";

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
