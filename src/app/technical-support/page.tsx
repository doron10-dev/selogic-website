"use client";

import { useRef, useState } from "react";
import { Section } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import {
  FormErrorNotice,
  FormFallbackNotice,
  FormHoneypot,
  FormSuccessNotice,
} from "@/components/form-notices";
import { useFormsOperational } from "@/hooks/use-forms-operational";
import { formErrorMessage } from "@/data/contact";

const priorities = ["נמוכה", "רגילה", "גבוהה", "דחוף"] as const;

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function TechnicalSupportPage() {
  const formsOperational = useFormsOperational();
  const formLoadedAt = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    org: "",
    subject: "",
    priority: "רגילה",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formsOperational) return;

    setSubmitState("submitting");
    setErrorMessage("");
    setFieldErrors([]);

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _honeypot: honeypot,
          _formLoadedAt: formLoadedAt.current,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: string[];
      };

      if (res.ok && data.ok) {
        setSubmitState("success");
        return;
      }

      if (res.status === 503) {
        setSubmitState("idle");
        return;
      }

      if (res.status === 400 && data.error === "VALIDATION_FAILED") {
        setFieldErrors(data.fields ?? []);
        setErrorMessage(formErrorMessage.validation);
        setSubmitState("error");
        return;
      }

      setErrorMessage(formErrorMessage.generic);
      setSubmitState("error");
    } catch {
      setErrorMessage(formErrorMessage.generic);
      setSubmitState("error");
    }
  };

  const showForm = formsOperational !== false && submitState !== "success";
  const formDisabled = formsOperational !== true || submitState === "submitting";

  return (
    <>
      <section className="border-b border-slate-line bg-paper">
        <div className="container-page py-16 sm:py-20">
          <span className="eyebrow mb-3">
            <StatusDot kind="progress" pulse />
            תמיכה טכנית
          </span>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-ink sm:text-4xl md:text-5xl">
            פתחו קריאת שירות
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg">
            כל פנייה הופכת לקריאה עם סטטוס, בעל טיפול ותיעוד. מלאו את הפרטים — או פנו במייל ובטלפון.
          </p>
        </div>
      </section>

      <Section tone="mute">
        <div className="mx-auto min-w-0 max-w-2xl rounded-card border border-slate-line bg-white p-6 shadow-card sm:p-8">
          {submitState === "success" ? (
            <FormSuccessNotice kind="support" />
          ) : formsOperational === false ? (
            <FormFallbackNotice />
          ) : showForm ? (
            <form onSubmit={handleSubmit} className="relative space-y-5">
              <FormHoneypot value={honeypot} onChange={setHoneypot} />

              {submitState === "error" ? <FormErrorNotice message={errorMessage} /> : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="ticket-name"
                  label="שם מלא"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  required
                  invalid={fieldErrors.includes("name")}
                />
                <Field
                  id="ticket-org"
                  label="ארגון"
                  value={form.org}
                  onChange={(v) => setForm((f) => ({ ...f, org: v }))}
                  required
                  invalid={fieldErrors.includes("org")}
                />
              </div>

              <Field
                id="ticket-subject"
                label="נושא הקריאה"
                value={form.subject}
                onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                required
                invalid={fieldErrors.includes("subject")}
              />

              <fieldset>
                <legend className="mb-1.5 block text-sm font-medium text-slate-ink">דחיפות</legend>
                <div className="flex flex-wrap gap-2">
                  {priorities.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, priority: p }))}
                      aria-pressed={form.priority === p}
                      className={`min-h-10 rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
                        form.priority === p
                          ? "bg-signal text-white"
                          : "bg-paper-mute text-slate-body hover:text-slate-ink"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="ticket-details" className="mb-1.5 block text-sm font-medium text-slate-ink">
                  תיאור התקלה *
                </label>
                <textarea
                  id="ticket-details"
                  name="details"
                  value={form.details}
                  onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
                  rows={5}
                  required
                  aria-invalid={fieldErrors.includes("details")}
                  className={`w-full rounded-xl border bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal ${
                    fieldErrors.includes("details") ? "border-status-progress" : "border-slate-line"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={formDisabled}
                aria-label="פתיחת קריאת שירות"
                aria-busy={submitState === "submitting"}
                className="min-h-11 w-full rounded-pill bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitState === "submitting" ? "שולח..." : "פתיחת קריאה"}
              </button>
            </form>
          ) : (
            <div className="py-8 text-sm text-slate-mute">טוען...</div>
          )}
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  required = false,
  invalid = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  invalid?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-ink">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={invalid}
        className={`w-full rounded-xl border bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal ${
          invalid ? "border-status-progress" : "border-slate-line"
        }`}
      />
    </div>
  );
}
