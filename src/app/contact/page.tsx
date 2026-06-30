"use client";

import { useMemo, useRef, useState } from "react";
import { Section } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import {
  FormErrorNotice,
  FormFallbackNotice,
  FormHoneypot,
  FormSuccessNotice,
} from "@/components/form-notices";
import { useFormsOperational } from "@/hooks/use-forms-operational";
import {
  contactChannels,
  formErrorMessage,
  getEmailDisplayLabel,
  getPhoneDisplayLabel,
  siteLabels,
} from "@/data/contact";

type ContactMethod = {
  title: string;
  desc: string;
  href: string;
  label: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const formsOperational = useFormsOperational();
  const formLoadedAt = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    phone: "",
    email: "",
    employees: "",
    pain: "",
    message: "",
  });

  const methods = useMemo(() => {
    const list: ContactMethod[] = [];
    if (contactChannels.email) {
      list.push({
        title: "מייל",
        desc: "פנייה מסודרת שנכנסת לתהליך שירות מתועד.",
        href: contactChannels.email,
        label: getEmailDisplayLabel(),
      });
    }
    if (contactChannels.whatsapp) {
      list.push({
        title: "וואטסאפ",
        desc: "ערוץ מהיר ללקוח, בלי לוותר על מעקב.",
        href: contactChannels.whatsapp,
        label: "פתיחת וואטסאפ",
      });
    }
    if (contactChannels.phone) {
      list.push({
        title: "טלפון",
        desc: "שיחה אנושית כשצריך מענה ישיר.",
        href: contactChannels.phone,
        label: getPhoneDisplayLabel(),
      });
    }
    return list;
  }, []);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formsOperational) return;

    setSubmitState("submitting");
    setErrorMessage("");
    setFieldErrors([]);

    try {
      const res = await fetch("/api/contact", {
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
        <div className="container-page py-12 sm:py-20">
          <span className="eyebrow mb-3">
            <StatusDot kind="open" pulse />
            צור קשר
          </span>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-ink sm:text-4xl md:text-5xl">
            רוצים להבין איפה ה-IT של העסק עומד?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg">
            דברו איתנו ונבנה יחד תמונת מצב ראשונית. מייל, טלפון, או טופס לקביעת שיחת אבחון למטה.
          </p>
        </div>
      </section>

      <Section tone="mute">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {methods.length > 0 ? (
            <div className="space-y-4">
              {methods.map((m) => (
                <a
                  key={m.title}
                  href={m.href}
                  className="block min-w-0 rounded-card border border-slate-line bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lift"
                >
                  <h3 className="text-base font-bold text-slate-ink">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-body">{m.desc}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-signal">{m.label} ←</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-card border border-slate-line bg-white p-6 shadow-card">
              <h3 className="text-base font-bold text-slate-ink">{siteLabels.contact}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">
                מלאו את הטופס ונחזור אליכם בהקדם. ניתן גם לפתוח קריאת שירות ישירות.
              </p>
            </div>
          )}

          <div id="diagnosis" className="min-w-0 scroll-mt-32 rounded-card border border-slate-line bg-white p-5 shadow-card sm:scroll-mt-28 sm:p-8">
            {submitState === "success" ? (
              <FormSuccessNotice kind="contact" />
            ) : formsOperational === false ? (
              <FormFallbackNotice />
            ) : showForm ? (
              <form onSubmit={handleSubmit} className="relative space-y-5">
                <FormHoneypot value={honeypot} onChange={setHoneypot} />

                <div>
                  <h2 className="text-lg font-bold text-slate-ink">קבעו שיחת אבחון</h2>
                  <p className="mt-1 text-sm text-slate-body">
                    מלאו פרטים — נחזור לתיאום שיחת היכרות ומיפוי ראשוני.
                  </p>
                </div>

                {submitState === "error" ? <FormErrorNotice message={errorMessage} /> : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="contact-name"
                    label="שם מלא"
                    value={form.name}
                    onChange={update("name")}
                    required
                    invalid={fieldErrors.includes("name")}
                  />
                  <Field
                    id="contact-company"
                    label="שם העסק"
                    value={form.company}
                    onChange={update("company")}
                    required
                    invalid={fieldErrors.includes("company")}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="contact-role" label="תפקיד" value={form.role} onChange={update("role")} />
                  <Field
                    id="contact-phone"
                    label="טלפון"
                    value={form.phone}
                    onChange={update("phone")}
                    type="tel"
                    required
                    invalid={fieldErrors.includes("phone")}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="contact-email"
                    label="מייל"
                    value={form.email}
                    onChange={update("email")}
                    type="email"
                    required
                    invalid={fieldErrors.includes("email")}
                  />
                  <Field
                    id="contact-employees"
                    label="מספר עובדים"
                    value={form.employees}
                    onChange={update("employees")}
                  />
                </div>
                <div>
                  <label htmlFor="contact-pain" className="mb-1.5 block text-sm font-medium text-slate-ink">
                    מה הכי כואב היום ב-IT?
                  </label>
                  <textarea
                    id="contact-pain"
                    name="pain"
                    value={form.pain}
                    onChange={update("pain")}
                    rows={3}
                    className="w-full rounded-xl border border-slate-line bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-ink">
                    הודעה
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={update("message")}
                    rows={4}
                    className="w-full rounded-xl border border-slate-line bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formDisabled}
                  aria-label="שליחת בקשה לקביעת שיחת אבחון"
                  aria-busy={submitState === "submitting"}
                  className="min-h-11 w-full rounded-pill bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitState === "submitting" ? "שולח..." : "שליחה לקביעת שיחה"}
                </button>
              </form>
            ) : (
              <div className="py-8 text-sm text-slate-mute">טוען...</div>
            )}
          </div>
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
  type = "text",
  required = false,
  invalid = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
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
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={invalid}
        className={`w-full rounded-xl border bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal ${
          invalid ? "border-status-progress" : "border-slate-line"
        }`}
      />
    </div>
  );
}
