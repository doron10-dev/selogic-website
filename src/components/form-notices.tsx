import Link from "next/link";
import { StatusDot } from "@/components/status-dot";
import {
  contactChannels,
  contactDetails,
  formErrorMessage,
  formNotConnectedMessage,
  formSuccessMessages,
} from "@/data/contact";

export function FormHoneypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label htmlFor="_honeypot">Website</label>
      <input
        id="_honeypot"
        name="_honeypot"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function FormFallbackNotice() {
  const msg = formNotConnectedMessage;
  return (
    <div className="theme-notice-panel">
      <StatusDot kind="waiting" />
      <h2 className="theme-text-heading text-lg font-bold">{msg.title}</h2>
      <p className="theme-text-body text-sm leading-relaxed">
        {msg.lead}{" "}
        <a href={msg.phoneHref} className="font-semibold text-blue-600 hover:text-blue-700">
          {msg.phone}
        </a>{" "}
        {msg.emailLead}{" "}
        <a href={msg.emailHref} className="font-semibold text-blue-600 hover:text-blue-700">
          {msg.email}
        </a>
        {contactChannels.whatsapp ? (
          <>
            {" "}
            או ב
            <a href={contactChannels.whatsapp} className="font-semibold text-blue-600 hover:text-blue-700">
              וואטסאפ
            </a>
          </>
        ) : null}
        .
      </p>
    </div>
  );
}

export function FormSuccessNotice({ kind }: { kind: "contact" | "support" }) {
  const msg = formSuccessMessages[kind];
  return (
    <div className="flex flex-col items-start gap-3 py-4">
      <StatusDot kind="closed" />
      <h2 className="theme-text-heading text-lg font-bold">{msg.title}</h2>
      <p className="theme-text-body text-sm leading-relaxed">{msg.body}</p>
      {"nextStep" in msg && msg.nextStep ? (
        <p className="theme-text-body text-sm leading-relaxed">
          {msg.nextStep}{" "}
          {"nextStepLink" in msg && msg.nextStepLink ? (
            <Link href={msg.nextStepLink.href} className="font-semibold text-signal hover:text-signal-ink">
              {msg.nextStepLink.label}
            </Link>
          ) : (
            <a href={contactDetails.phoneHref} className="font-semibold text-signal hover:text-signal-ink">
              {contactDetails.phone}
            </a>
          )}
        </p>
      ) : null}
    </div>
  );
}

export function FormErrorNotice({ message }: { message: string }) {
  const err = formErrorMessage;
  return (
    <div className="mb-4 rounded-xl border border-status-progress/30 bg-status-progress/10 px-4 py-3 text-sm" role="alert">
      <p className="theme-text-heading font-semibold">{err.title}</p>
      <p className="theme-text-body mt-1 leading-relaxed">{message}</p>
      <p className="theme-text-body mt-2 leading-relaxed">
        {err.lead}{" "}
        <a href={err.phoneHref} className="font-semibold text-signal hover:text-signal-ink">
          {err.phone}
        </a>{" "}
        {err.emailLead}{" "}
        <a href={err.emailHref} className="font-semibold text-signal hover:text-signal-ink">
          {err.email}
        </a>
        {contactChannels.whatsapp ? (
          <>
            {" "}
            או ב
            <a href={contactChannels.whatsapp} className="font-semibold text-signal hover:text-signal-ink">
              וואטסאפ
            </a>
          </>
        ) : null}
        .
      </p>
    </div>
  );
}
