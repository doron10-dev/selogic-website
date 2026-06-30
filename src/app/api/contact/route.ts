import { assertFormsReady } from "@/lib/form-gate";
import {
  formatContactEmailBody,
  isHoneypotTripped,
  isTooFastSubmit,
  MAX_BODY_BYTES,
  validateContactPayload,
} from "@/lib/forms";
import { sendFormEmail } from "@/lib/mail";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "PAYLOAD_TOO_LARGE" }, { status: 413 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  if (isHoneypotTripped(raw._honeypot)) {
    return Response.json({ ok: true });
  }

  const gate = assertFormsReady();
  if (!gate.ready) {
    return Response.json({ error: gate.reason }, { status: 503 });
  }

  if (isTooFastSubmit(raw._formLoadedAt)) {
    return Response.json({ error: "VALIDATION_FAILED", fields: [] }, { status: 400 });
  }

  const validated = validateContactPayload(raw);
  if (!validated.ok) {
    return Response.json({ error: "VALIDATION_FAILED", fields: validated.fields }, { status: 400 });
  }

  const data = validated.data;

  try {
    await sendFormEmail({
      subject: `[Selogic] בקשת אבחון — ${data.company} — ${data.name}`,
      text: formatContactEmailBody(data),
      replyTo: data.email,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "SEND_FAILED" }, { status: 500 });
  }
}
