/**
 * Trust & credentials — gated by explicit flags.
 *
 * Each item is shown on the site ONLY when its flag is true and the wording has
 * been approved. Do NOT add logos, "official supplier" claims, success numbers,
 * SLA or 24/7 wording here.
 */

export const credentialFlags = {
  /** ISO 9001 — quality management. Approved + verified. */
  iso9001: true,
  /** ISO 27001 — information security management. Approved + verified. */
  iso27001: true,
  /** Naor — Unit 8200 alumnus. Approved for public mention. */
  naorUnit8200: true,
  /** Naor — Technion graduate. Approved wording is "בוגר הטכניון" only (no logo, no specific degree). */
  naorTechnion: true,
} as const;

/** Approved, exact wording. Named entities live here only — single source of truth. */
export const credentialCopy = {
  iso9001: "ISO 9001 לניהול איכות",
  iso27001: "ISO 27001 לניהול אבטחת מידע",
  experience: "כ־30 שנות ניסיון",
  unit8200: "בוגרי יחידה 8200",
  technion: "בוגר הטכניון",
  clientFile: "תיק לקוח מתוחזק",
  monitoringReports: "ניטור, דוחות ו־KPI",
  publicBodiesShort: "שירות לגופים ציבוריים ותשתיתיים",
  publicBodiesFull:
    "סלוג׳יק מספקת שירותים גם לגופים ציבוריים, מועצות, עיריות, גופים תשתיתיים וארגונים גדולים, בהם חברת החשמל ומשרד הביטחון.",
  isoNarrative:
    "סלוג׳יק פועלת עם תקן ISO 9001 לניהול איכות ועם תקן ISO 27001 לניהול אבטחת מידע. התקנים מחזקים את תפיסת העבודה של החברה: שירות מסודר, תיעוד, תהליכים, בקרה וניהול אחראי של מידע.",
} as const;

/** ISO narrative paragraph, only when at least one ISO flag is on. */
export function isoNarrative(): string | undefined {
  return isoCredentials().length > 0 ? credentialCopy.isoNarrative : undefined;
}

/** Combined, flag-gated chip for Naor's personal honors (Technion + Unit 8200). */
export function naorHonorsChip(): string | null {
  if (credentialFlags.naorTechnion && credentialFlags.naorUnit8200) return "בוגר הטכניון ויחידה 8200";
  if (credentialFlags.naorTechnion) return credentialCopy.technion;
  if (credentialFlags.naorUnit8200) return credentialCopy.unit8200;
  return null;
}

export type CredentialChip = { label: string; sub?: string };

/** ISO lines that are approved AND flagged on, in exact wording. */
export function isoCredentials(): string[] {
  const list: string[] = [];
  if (credentialFlags.iso9001) list.push(credentialCopy.iso9001);
  if (credentialFlags.iso27001) list.push(credentialCopy.iso27001);
  return list;
}

/**
 * Compact chips for the trust bar. Order: quality, security, experience,
 * Naor honors, public bodies, client file, monitoring/reports.
 */
export function trustChips(): CredentialChip[] {
  const chips: CredentialChip[] = [];
  if (credentialFlags.iso9001) chips.push({ label: "ISO 9001", sub: "ניהול איכות" });
  if (credentialFlags.iso27001) chips.push({ label: "ISO 27001", sub: "ניהול אבטחת מידע" });
  chips.push({ label: credentialCopy.experience, sub: "ניהולי וטכנולוגי" });
  const honors = naorHonorsChip();
  if (honors) chips.push({ label: honors });
  chips.push({ label: credentialCopy.publicBodiesShort });
  chips.push({ label: credentialCopy.clientFile });
  chips.push({ label: credentialCopy.monitoringReports });
  return chips;
}

export type TeamProfile = {
  name: string;
  role: string;
  lead: string;
  paragraphs: string[];
  tags: string[];
};

/** Approved personal honors for Naor, ordered, gated by flags. */
const naorHonors: string[] = [
  ...(credentialFlags.naorTechnion ? ["בוגר הטכניון"] : []),
  ...(credentialFlags.naorUnit8200 ? ["בוגר יחידה 8200"] : []),
];
/** e.g. "בוגר הטכניון ובוגר יחידה 8200" */
const naorHonorsPhrase = naorHonors.join(" ו");

const naorProfile: TeamProfile = {
  name: "נאור",
  role: "עומק טכנולוגי ואבטחת מידע",
  lead: naorHonors.length ? `${naorHonorsPhrase}.` : "מוביל טכנולוגי.",
  paragraphs: [
    naorHonors.length
      ? `נאור, ${naorHonorsPhrase}, מוביל את העומק הטכנולוגי ואבטחת המידע בסלוג׳יק.`
      : "נאור מוביל את העומק הטכנולוגי ואבטחת המידע בסלוג׳יק.",
    "הוא מביא ניסיון רחב בתשתיות, אבטחת מידע, חשיבה מערכתית וארכיטקטורה טכנולוגית, עם גישה שמסתכלת על אבטחת מידע כשיטת ניהול ולא כמוצר בודד.",
  ],
  tags: [...naorHonors, "אבטחת מידע", "ארכיטקטורה טכנולוגית", "תשתיות ומערכות מורכבות"],
};

export const teamProfiles: TeamProfile[] = [
  {
    name: "דורון סלע",
    role: "מנכ״ל סלוג׳יק",
    lead: "העוגן העסקי, התפעולי והניהולי של החברה.",
    paragraphs: [
      "דורון סלע, מנכ״ל סלוג׳יק, מביא איתו כ־30 שנות ניסיון במנכ״לות, ניהול עסקים, יזמות, תפעול ושירות.",
      "היתרון של דורון הוא היכולת להבין איך עסק עובד בפועל, לזהות צווארי בקבוק, לפרק תהליכים עסקיים לשלבים ברורים, ולתרגם אותם למערכות מידע, אוטומציות, דוחות ובקרות מנהלים.",
      "דורון מלווה לקוחות משלב האפיון, דרך בניית התהליך והמערכת, ועד הטמעה בפועל בתוך העסק, במטרה ליצור מערכת שמשרתת את העבודה האמיתית ולא רק נראית טוב על הנייר.",
    ],
    tags: [
      "מנכ״ל סלוג׳יק",
      "כ־30 שנות ניסיון",
      "יזמות וניהול עסקים",
      "תהליכים עסקיים",
      "מערכות מידע ואוטומציות",
      "אפיון והטמעה",
    ],
  },
  naorProfile,
];

/** Short lead paragraph for the information-systems page. */
export const doronInfoSystemsNote =
  "את תחום מערכות המידע והבקרה מוביל דורון סלע, מנכ״ל סלוג׳יק, עם כ־30 שנות ניסיון במנכ״לות, יזמות, תפעול ושירות. דורון מחבר בין הבנת העסק, מיפוי תהליכים, אפיון מערכות, אוטומציות, דוחות ובקרות מנהלים, עד להטמעה בפועל בתוך הארגון.";
