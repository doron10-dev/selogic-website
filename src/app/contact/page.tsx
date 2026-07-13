"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import { ServiceIconChip } from "@/lib/service-icons";
import { MapPin } from "lucide-react";
import {
  FormErrorNotice,
  FormFallbackNotice,
  FormHoneypot,
  FormSuccessNotice,
} from "@/components/form-notices";
import { useFormsOperational } from "@/hooks/use-forms-operational";
import {
  contactChannels,
  contactDetails,
  formErrorMessage,
  formUnavailableMessage,
  getAddressMapsUrl,
  getAddressWazeUrl,
  getEmailDisplayLabel,
  getPhoneDisplayLabel,
  siteLabels,
  siteUrls,
} from "@/data/contact";
import {
  getContactFieldError,
  validateContactStepOne,
  type ContactFieldKey,
} from "@/lib/forms";

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
  const [step, setStep] = useState<1 | 2>(1);
  const [touched, setTouched] = useState<Partial<Record<ContactFieldKey, boolean>>>({});
  const [localHints, setLocalHints] = useState<Partial<Record<ContactFieldKey, string>>>({});
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
    if (contactChannels.phone) {
      list.push({
        title: "טלפון",
        desc: "לתיאום שיחת אבחון או פנייה עסקית ראשונית.",
        href: contactChannels.phone,
        label: getPhoneDisplayLabel(),
      });
    }
    if (contactChannels.email) {
      list.push({
        title: "מייל",
        desc: "לתיאום שיחת אבחון או פנייה עסקית ראשונית.",
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
    return list;
  }, []);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key as ContactFieldKey]) {
      const hint = getContactFieldError(key as ContactFieldKey, value);
      setLocalHints((h) => ({ ...h, [key]: hint ?? undefined }));
    }
  };

  const markTouched = (key: ContactFieldKey) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    const hint = getContactFieldError(key, form[key]);
    setLocalHints((h) => ({ ...h, [key]: hint ?? undefined }));
  };

  const goToStepTwo = () => {
    const invalid = validateContactStepOne(form);
    setTouched({ name: true, company: true, phone: true, email: true });
    const hints: Partial<Record<ContactFieldKey, string>> = {};
    (["name", "company", "phone", "email"] as const).forEach((key) => {
      const hint = getContactFieldError(key, form[key]);
      if (hint) hints[key] = hint;
    });
    setLocalHints(hints);
    if (invalid.length > 0) {
      setFieldErrors(invalid);
      return;
    }
    setFieldErrors([]);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      goToStepTwo();
      return;
    }
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
        setStep(1);
        return;
      }

      if (res.status === 503) {
        setErrorMessage(formUnavailableMessage);
        setSubmitState("error");
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

  const showForm = submitState !== "success";
  const formDisabled = formsOperational !== true || submitState === "submitting";
  const showDisabledBanner = formsOperational === false;

  return (
    <>
      <section className="theme-page-hero">
        <div className="container-page py-10 sm:py-16 lg:py-20">
          <span className="eyebrow mb-3">
            <StatusDot kind="open" pulse />
            צור קשר
          </span>
          <h1 className="font-display theme-text-heading max-w-3xl text-[1.625rem] font-extrabold leading-[1.2] sm:text-4xl sm:leading-tight md:text-5xl">
            רוצים להבין איפה ה-IT של העסק עומד?
          </h1>
          <p className="theme-text-body mt-4 max-w-prose text-[17px] leading-relaxed sm:mt-5 sm:text-lg">
            שיחת אבחון, מיפוי מצב קיים והבנת פערים, לפני התאמת תהליך שירות. מייל, טלפון, או טופס למטה.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Button href="#diagnosis" variant="diagnosis">
              {siteLabels.contactCta}
            </Button>
            <Button href={siteUrls.technicalSupport} variant="secondary">
              פתחו קריאת שירות
            </Button>
          </div>
        </div>
      </section>

      <Section tone="muted" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {methods.length > 0 ? (
              methods.map((m) => (
                <a
                  key={m.title}
                  href={m.href}
                  className="theme-card-interactive group block min-w-0"
                >
                  <ServiceIconChip title={m.title} href={m.href} />
                  <h3 className="theme-text-heading mt-4 text-lg font-semibold">{m.title}</h3>
                  <p className="theme-text-muted mt-2 text-sm leading-relaxed">{m.desc}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:-translate-x-1">
                    {m.label} ←
                  </span>
                </a>
              ))
            ) : (
              <div className="theme-card-interactive">
                <h3 className="theme-text-heading text-lg font-semibold">{siteLabels.contact}</h3>
                <p className="theme-text-muted mt-2 text-sm leading-relaxed">
                  מלאו את הטופס ונחזור אליכם לתיאום שיחת אבחון.
                </p>
              </div>
            )}

            <div className="theme-card-interactive">
              <span className="icon-chip !h-11 !w-11">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <h3 className="theme-text-heading mt-4 text-lg font-semibold">כתובת</h3>
              <p className="theme-text-muted mt-2 text-sm leading-relaxed">{contactDetails.address}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                <a
                  href={getAddressMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition-colors hover:text-blue-700"
                >
                  Google Maps
                </a>
                <a
                  href={getAddressWazeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition-colors hover:text-blue-700"
                >
                  Waze
                </a>
              </div>
            </div>

            <div className="theme-card-interactive">
              <h3 className="theme-text-heading text-lg font-semibold">מה קורה אחרי שפונים אלינו</h3>
              <ol className="mt-4 space-y-3">
                {[
                  "שיחת היכרות קצרה כדי להבין את העסק ואת הצרכים שלכם",
                  "נבחן יחד את מצב המחשוב הקיים ואת רמת התיעוד",
                  "נזהה סיכונים ונראה מה אפשר לשפר כבר בשלב הראשון",
                  "בלי לחץ ובלי מכירה אגרסיבית אתם תחליטו אם ומתי נכון להמשיך",
                ].map((stepText, i) => (
                  <li key={stepText} className="flex items-start gap-3">
                    <span className="theme-step-dot h-7 w-7 shrink-0 text-xs" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className="theme-text-muted text-sm leading-relaxed">{stepText}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div id="diagnosis" className="theme-contact-form-panel">
            {submitState === "success" ? (
              <FormSuccessNotice kind="contact" />
            ) : showForm ? (
              <form onSubmit={handleSubmit} className="relative space-y-5">
                <FormHoneypot value={honeypot} onChange={setHoneypot} />

                {showDisabledBanner ? <FormFallbackNotice /> : null}

                {formsOperational === null ? (
                  <div className="theme-text-muted flex items-center gap-2 py-2 text-sm">
                    <StatusDot kind="waiting" />
                    בודקים אם הטופס זמין...
                  </div>
                ) : null}

                <div className={showDisabledBanner || formsOperational === null ? "space-y-5 opacity-60" : "space-y-5"}>

                <div>
                  <h2 className="theme-text-heading text-lg font-semibold">קבעו שיחת אבחון</h2>
                  <p className="theme-text-body mt-1 text-sm">
                    מלאו פרטים, נחזור לתיאום שיחת היכרות, מיפוי ראשוני והבנת פערים.
                  </p>
                  <p className="theme-text-body mt-3 text-sm">
                    לקוח קיים שצריך לפתוח קריאת שירות?{" "}
                    <Link href={siteUrls.technicalSupport} className="font-semibold text-blue-700 hover:text-blue-800">
                      פתחו קריאת שירות
                    </Link>
                    .
                  </p>

                  <div className="mt-5 flex items-center gap-3" aria-label="התקדמות בטופס">
                    <span className={`theme-step-dot ${step === 1 ? "is-active" : ""}`}>1</span>
                    <span className="theme-step-line" aria-hidden="true" />
                    <span className={`theme-step-dot ${step === 2 ? "is-active" : ""}`}>2</span>
                    <span className="theme-text-body text-sm">
                      {step === 1 ? "פרטי קשר" : "פרטים נוספים (אופציונלי)"}
                    </span>
                  </div>
                </div>

                {submitState === "error" ? <FormErrorNotice message={errorMessage} /> : null}

                {step === 1 ? (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="contact-name"
                        label="שם מלא"
                        value={form.name}
                        onChange={update("name")}
                        onBlur={markTouched("name")}
                        autoComplete="name"
                        required
                        invalid={fieldErrors.includes("name") || Boolean(localHints.name)}
                        hint={localHints.name}
                        disabled={formDisabled}
                      />
                      <Field
                        id="contact-company"
                        label="שם העסק"
                        value={form.company}
                        onChange={update("company")}
                        onBlur={markTouched("company")}
                        autoComplete="organization"
                        required
                        invalid={fieldErrors.includes("company") || Boolean(localHints.company)}
                        hint={localHints.company}
                        disabled={formDisabled}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="contact-phone"
                        label="טלפון"
                        value={form.phone}
                        onChange={update("phone")}
                        onBlur={markTouched("phone")}
                        type="tel"
                        autoComplete="tel"
                        required
                        invalid={fieldErrors.includes("phone") || Boolean(localHints.phone)}
                        hint={localHints.phone}
                        disabled={formDisabled}
                      />
                      <Field
                        id="contact-email"
                        label="מייל"
                        value={form.email}
                        onChange={update("email")}
                        onBlur={markTouched("email")}
                        type="email"
                        autoComplete="email"
                        required
                        invalid={fieldErrors.includes("email") || Boolean(localHints.email)}
                        hint={localHints.email}
                        disabled={formDisabled}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={goToStepTwo}
                      disabled={formDisabled}
                      className="btn-cta w-full"
                    >
                      המשך לפרטים נוספים
                    </button>
                  </>
                ) : (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="contact-role"
                        label="תפקיד"
                        value={form.role}
                        onChange={update("role")}
                        disabled={formDisabled}
                        optional
                      />
                      <Field
                        id="contact-employees"
                        label="מספר עובדים"
                        value={form.employees}
                        onChange={update("employees")}
                        disabled={formDisabled}
                        optional
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-pain" className="theme-field-label">
                        מה הכי כואב היום ב-IT? <span className="theme-text-muted font-normal">(אופציונלי)</span>
                      </label>
                      <textarea
                        id="contact-pain"
                        name="pain"
                        value={form.pain}
                        onChange={update("pain")}
                        rows={3}
                        disabled={formDisabled}
                        className="theme-field-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="theme-field-label">
                        הודעה <span className="theme-text-muted font-normal">(אופציונלי)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={update("message")}
                        rows={4}
                        disabled={formDisabled}
                        className="theme-field-input"
                      />
                    </div>

                    <p className="theme-text-body text-sm leading-relaxed">
                      הפרטים נשמרים אצלנו בלבד. נחזור אליכם בדרך כלל בתוך יום עסקים, בלי ספאם ובלי העברה לצד שלישי.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        disabled={formDisabled}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                        style={{
                          borderColor: "var(--theme-border)",
                          backgroundColor: "var(--theme-input)",
                          color: "var(--theme-heading)",
                        }}
                      >
                        חזרה
                      </button>
                      <button
                        type="submit"
                        disabled={formDisabled}
                        aria-label="שליחת בקשה לקביעת שיחת אבחון"
                        aria-busy={submitState === "submitting"}
                        className="btn-cta w-full flex-1"
                      >
                        {submitState === "submitting" ? "שולח..." : "שליחה לקביעת שיחה"}
                      </button>
                    </div>
                  </>
                )}
                </div>
              </form>
            ) : null}
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
  onBlur,
  type = "text",
  autoComplete,
  required = false,
  optional = false,
  invalid = false,
  hint,
  disabled = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  invalid?: boolean;
  hint?: string;
  disabled?: boolean;
}) {
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div>
      <label htmlFor={id} className="theme-field-label">
        {label}
        {required ? " *" : optional ? <span className="theme-text-muted font-normal"> (אופציונלי)</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        aria-invalid={invalid || Boolean(hint)}
        aria-describedby={hintId}
        className={`theme-field-input ${invalid || hint ? "theme-field-input--invalid" : ""}`}
      />
      {hint ? (
        <p id={hintId} className="mt-1.5 text-xs text-orange-700" role="alert">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
