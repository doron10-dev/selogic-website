import { StatusDot } from "@/components/status-dot";
import {
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
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-line bg-paper-mute p-5">
      <StatusDot kind="waiting" />
      <h2 className="text-lg font-bold text-slate-ink">{msg.title}</h2>
      <p className="text-sm leading-relaxed text-slate-body">
        {msg.lead}{" "}
        <a href={msg.phoneHref} className="font-semibold text-signal hover:text-signal-ink">
          {msg.phone}
        </a>{" "}
        {msg.emailLead}{" "}
        <a href={msg.emailHref} className="font-semibold text-signal hover:text-signal-ink">
          {msg.email}
        </a>
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
      <h2 className="text-lg font-bold text-slate-ink">{msg.title}</h2>
      <p className="text-sm leading-relaxed text-slate-body">{msg.body}</p>
      {kind === "support" ? (
        <p className="text-sm text-slate-body">
          לדחיפות:{" "}
          <a href={contactDetails.phoneHref} className="font-semibold text-signal hover:text-signal-ink">
            {contactDetails.phone}
          </a>
        </p>
      ) : null}
    </div>
  );
}

export function FormErrorNotice({ message }: { message: string }) {
  const err = formErrorMessage;
  return (
    <div
      className="mb-4 rounded-xl border border-status-progress/30 bg-status-progress/10 px-4 py-3 text-sm text-slate-ink"
      role="alert"
    >
      <p className="font-semibold">{err.title}</p>
      <p className="mt-1 leading-relaxed">{message}</p>
      <p className="mt-2 leading-relaxed">
        {err.lead}{" "}
        <a href={err.phoneHref} className="font-semibold text-signal hover:text-signal-ink">
          {err.phone}
        </a>{" "}
        {err.emailLead}{" "}
        <a href={err.emailHref} className="font-semibold text-signal hover:text-signal-ink">
          {err.email}
        </a>
        .
      </p>
    </div>
  );
}
