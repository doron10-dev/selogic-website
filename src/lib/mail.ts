import { Resend } from "resend";
import { assertFormsReady } from "@/lib/form-gate";

export type SendMailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendFormEmail(input: SendMailInput): Promise<void> {
  const gate = assertFormsReady();
  if (!gate.ready) {
    throw new Error(gate.reason);
  }

  const resend = new Resend(gate.apiKey);
  const { error } = await resend.emails.send({
    from: gate.from,
    to: gate.to,
    subject: input.subject,
    text: input.text,
    replyTo: input.replyTo,
  });

  if (error) {
    throw new Error("RESEND_SEND_FAILED");
  }
}
