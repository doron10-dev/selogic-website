export type FormGateReason = "FORMS_DISABLED" | "MAIL_NOT_CONFIGURED";

export function isFormsEnabled(): boolean {
  return process.env.FORMS_ENABLED === "true";
}

export function getMailEnv() {
  return {
    apiKey: process.env.RESEND_API_KEY?.trim() ?? "",
    from: process.env.MAIL_FROM?.trim() ?? "",
    to: process.env.MAIL_TO?.trim() ?? "",
  };
}

export function isMailConfigured(): boolean {
  const { apiKey, from, to } = getMailEnv();
  return Boolean(apiKey && from && to);
}

/** True only when forms may accept submissions and send mail. */
export function areFormsOperational(): boolean {
  return isFormsEnabled() && isMailConfigured();
}

export function assertFormsReady():
  | { ready: true; apiKey: string; from: string; to: string }
  | { ready: false; reason: FormGateReason } {
  if (!isFormsEnabled()) {
    return { ready: false, reason: "FORMS_DISABLED" };
  }

  const { apiKey, from, to } = getMailEnv();
  if (!apiKey || !from || !to) {
    return { ready: false, reason: "MAIL_NOT_CONFIGURED" };
  }

  return { ready: true, apiKey, from, to };
}
