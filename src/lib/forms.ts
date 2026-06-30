export const MIN_SUBMIT_MS = 3000;
export const MAX_BODY_BYTES = 32_768;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const SUPPORT_PRIORITIES = ["נמוכה", "רגילה", "גבוהה", "דחוף"] as const;

export type SupportPriority = (typeof SUPPORT_PRIORITIES)[number];

export type ContactPayload = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  employees: string;
  pain: string;
  message: string;
};

export type SupportPayload = {
  name: string;
  org: string;
  subject: string;
  priority: SupportPriority;
  details: string;
};

type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; fields: string[] };

export function stripTags(value: string): string {
  return value.replace(/<[^>]*>/g, "");
}

export function cleanField(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return stripTags(value).trim().slice(0, maxLen);
}

export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function isTooFastSubmit(formLoadedAt: unknown): boolean {
  if (typeof formLoadedAt !== "number" || !Number.isFinite(formLoadedAt)) {
    return true;
  }
  return Date.now() - formLoadedAt < MIN_SUBMIT_MS;
}

function digitsOnlyPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email) && email.length <= 254;
}

export function validateContactPayload(raw: Record<string, unknown>): ValidationResult<ContactPayload> {
  const data: ContactPayload = {
    name: cleanField(raw.name, 100),
    company: cleanField(raw.company, 150),
    role: cleanField(raw.role, 100),
    phone: cleanField(raw.phone, 30),
    email: cleanField(raw.email, 254),
    employees: cleanField(raw.employees, 20),
    pain: cleanField(raw.pain, 2000),
    message: cleanField(raw.message, 5000),
  };

  const fields: string[] = [];
  if (data.name.length < 2) fields.push("name");
  if (data.company.length < 2) fields.push("company");
  if (digitsOnlyPhone(data.phone).length < 9) fields.push("phone");
  if (!isValidEmail(data.email)) fields.push("email");

  if (fields.length > 0) {
    return { ok: false, fields };
  }

  return { ok: true, data };
}

export function validateSupportPayload(raw: Record<string, unknown>): ValidationResult<SupportPayload> {
  const priorityRaw = cleanField(raw.priority, 20);
  const priority = SUPPORT_PRIORITIES.includes(priorityRaw as SupportPriority)
    ? (priorityRaw as SupportPriority)
    : "רגילה";

  const data: SupportPayload = {
    name: cleanField(raw.name, 100),
    org: cleanField(raw.org, 150),
    subject: cleanField(raw.subject, 200),
    priority,
    details: cleanField(raw.details, 5000),
  };

  const fields: string[] = [];
  if (data.name.length < 2) fields.push("name");
  if (data.org.length < 2) fields.push("org");
  if (data.subject.length < 3) fields.push("subject");
  if (data.details.length < 10) fields.push("details");

  if (fields.length > 0) {
    return { ok: false, fields };
  }

  return { ok: true, data };
}

export function formatContactEmailBody(data: ContactPayload): string {
  const lines = [
    "בקשת אבחון IT — Selogic",
    "",
    `שם: ${data.name}`,
    `עסק: ${data.company}`,
    `תפקיד: ${data.role || "—"}`,
    `טלפון: ${data.phone}`,
    `מייל: ${data.email}`,
    `מספר עובדים: ${data.employees || "—"}`,
    "",
    "מה הכי כואב היום ב-IT?",
    data.pain || "—",
    "",
    "הודעה:",
    data.message || "—",
    "",
    `נשלח: ${new Date().toISOString()}`,
  ];
  return lines.join("\n");
}

export function formatSupportEmailBody(data: SupportPayload): string {
  const lines = [
    "קריאת שירות — Selogic",
    "",
    `שם: ${data.name}`,
    `ארגון: ${data.org}`,
    `נושא: ${data.subject}`,
    `דחיפות: ${data.priority}`,
    "",
    "תיאור:",
    data.details,
    "",
    `נשלח: ${new Date().toISOString()}`,
  ];
  return lines.join("\n");
}
