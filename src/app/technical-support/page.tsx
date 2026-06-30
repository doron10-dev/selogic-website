"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/button";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { Section, SectionHeading } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import {
  FormErrorNotice,
  FormFallbackNotice,
  FormHoneypot,
  FormSuccessNotice,
} from "@/components/form-notices";
import { useFormsOperational } from "@/hooks/use-forms-operational";
import { contactDetails, formErrorMessage, siteUrls } from "@/data/contact";

const priorities = ["נמוכה", "רגילה", "גבוהה", "דחוף"] as const;

const audienceCards = [
  {
    title: "לעסק שבודק ספק IT חדש",
    body: "כך נראה שירות תמיכה מסודר: פנייה, קריאה, בעל טיפול, סטטוס, תיעוד והמשך.",
  },
  {
    title: "ללקוח קיים שצריך לפתוח קריאה",
    body: "אפשר לפתוח קריאה בטופס, בטלפון או במייל. כל פנייה נכנסת לתהליך שירות מסודר.",
  },
];

const painPoints = [
  { title: "עובד תקוע בלי סטטוס", body: "אין ודאות מתי חוזרים לעבוד." },
  { title: "פניות שמתפזרות", body: "טלפון ומייל בלי מעקב מסודר." },
  { title: "לא ברור מי מטפל", body: "אין בעל טיפול לקריאה." },
  { title: "אין היסטוריית טיפול", body: "לא רואים מה כבר נעשה." },
  { title: "מנהל לא רואה מה פתוח", body: "אין תמונת מצב על הקריאות." },
  { title: "תקלה חוזרת מתחילה מאפס", body: "בלי תיעוד, אין המשכיות." },
];

const supportSteps = [
  "פנייה מתקבלת",
  "נפתחת קריאת שירות",
  "מוגדר בעל טיפול",
  "מתועד מה נעשה",
  "הלקוח מקבל סטטוס והמשך",
  "הקריאה נסגרת עם היסטוריה",
];

const requestChannels = [
  {
    title: "טלפון",
    body: contactDetails.phone,
    href: contactDetails.phoneHref,
  },
  {
    title: "מייל",
    body: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    title: "טופס פתיחת קריאה",
    body: "פתיחה מסודרת עם פרטי התקלה.",
    href: "#support-form",
  },
  {
    title: "כלי עזר ללקוח",
    body: "פתיחה מהירה מהעמדה לפי תהליך השירות.",
    href: siteUrls.clientPortal,
  },
];

const supportFaq = [
  {
    q: "איך פותחים קריאת שירות?",
    a: "בטופס בעמוד הזה, בטלפון או במייל. כל פנייה נכנסת לתהליך שירות מסודר.",
  },
  {
    q: "מה קורה אם הטופס לא פעיל?",
    a: "מוצגת הודעת fallback עם טלפון ומייל, כדי שאפשר יהיה לפנות בלי שליחה אוטומטית.",
  },
  {
    q: "האם אפשר לפנות בטלפון או במייל?",
    a: "כן. גם פנייה בטלפון או במייל נכנסת לתהליך שירות עם סטטוס ותיעוד.",
  },
  {
    q: "מה קורה אחרי פתיחת הקריאה?",
    a: "הקריאה נכנסת לטיפול, מוגדר בעל טיפול, הפעולות מתועדות והסטטוס מתעדכן לפי תהליך השירות.",
  },
  {
    q: "האם מנהל יכול לראות את סטטוס הקריאות?",
    a: "כן. בפורטל הלקוח ניתן לראות מה פתוח, מה בטיפול ומה ההמשך.",
  },
];

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
            תמיכה טכנית מסודרת לעסקים
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg">
            כל פנייה הופכת לקריאה עם סטטוס, בעל טיפול ותיעוד. לקוח קיים יכול לפתוח קריאה, ועסק שבודק ספק IT יכול לראות איך תהליך התמיכה עובד.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#support-form" variant="primary">
              פתחו קריאת שירות
            </Button>
            <Button href="#support-process" variant="secondary">
              איך עובד תהליך התמיכה
            </Button>
            <Button href={siteUrls.contactDiagnosis} variant="secondary">
              קבעו שיחת אבחון
            </Button>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <SectionHeading
          title="שני מסלולים באותו עמוד"
          body="העמוד מיועד גם להבנת תהליך התמיכה וגם לפתיחת קריאה קיימת."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {audienceCards.map((card) => (
            <InfoCard key={card.title} title={card.title} body={card.body} />
          ))}
        </div>
      </Section>

      <Section tone="mute">
        <SectionHeading
          title="מה קורה כשאין תהליך תמיכה מסודר"
          body="תקלות קטנות הופכות לרעש כשאין קריאה, סטטוס ותיעוד."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <InfoCard key={point.title} title={point.title} body={point.body} />
          ))}
        </div>
      </Section>

      <Section id="support-process" tone="paper">
        <SectionHeading
          title="איך קריאת שירות עובדת"
          body="פנייה אחת נכנסת לתהליך ברור, עד סגירה עם היסטוריה."
        />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportSteps.map((step, index) => (
            <li key={step} className="rounded-card border border-slate-line bg-white p-5 shadow-card">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-soft font-mono text-sm font-bold text-signal-ink">
                {index + 1}
              </span>
              <h3 className="mt-3 text-base font-bold text-slate-ink">{step}</h3>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mute">
        <SectionHeading
          title="איך פונים אלינו"
          body="אלה ערוצי הפנייה הבטוחים לתהליך השירות."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {requestChannels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              className="group rounded-card border border-slate-line bg-white p-5 shadow-card transition-colors hover:border-signal/40"
            >
              <div className="mb-3 flex items-center gap-2">
                <StatusDot kind="open" />
                <h3 className="text-base font-bold text-slate-ink group-hover:text-signal">{channel.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-body">{channel.body}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="mute">
        <div id="support-form" className="scroll-mt-24" />
        <SectionHeading
          title="פתחו קריאת שירות"
          body="הטופס נשאר הפעולה המרכזית ללקוחות קיימים. אם השליחה אינה פעילה, תוצג הודעת fallback עם פרטי קשר."
        />
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

      <Section tone="paper">
        <SectionHeading title="מה קורה אחרי פתיחת הקריאה" />
        <div className="mt-6 max-w-3xl rounded-card border border-slate-line bg-white p-6 shadow-card">
          <p className="text-base leading-relaxed text-slate-body">
            לאחר פתיחת הקריאה, היא נכנסת לתהליך טיפול. לפי סוג הקריאה יוגדר בעל טיפול, יתועדו הפעולות, והסטטוס יתעדכן לפי תהליך השירות.
          </p>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <SectionHeading
            title="סטטוס, תיעוד ופורטל לקוחות"
            body="קריאת שירות היא לא רק הודעה. היא כוללת סטטוס, בעל טיפול, תיעוד והיסטוריה. בפורטל הלקוח ניתן לראות מה פתוח, מה בטיפול ומה ההמשך."
            invert
          />
          <div className="rounded-card border border-ink-line bg-ink-soft p-6">
            <Button href={siteUrls.clientPortal} variant="ghost" className="w-full">
              ראו פורטל לקוחות
            </Button>
          </div>
        </div>
      </Section>

      <PageFaq title="שאלות נפוצות" body="תשובות קצרות על פתיחת קריאה ותהליך התמיכה." items={supportFaq} />

      <PageFinalCta
        title="צריכים לפתוח קריאה או לבדוק את תהליך התמיכה?"
        body="לקוחות קיימים יכולים לפתוח קריאה. עסקים שבודקים ספק IT יכולים להתחיל בשיחת אבחון."
        primary={{ label: "פתחו קריאת שירות", href: "#support-form", sub: "המסלול המהיר ללקוחות קיימים." }}
        secondary={{
          label: "קבעו שיחת אבחון",
          href: siteUrls.contactDiagnosis,
          sub: "מתאים לעסק שבודק שירות IT מסודר.",
        }}
      />
    </>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-card border border-slate-line bg-white p-5 shadow-card">
      <div className="mb-3 flex items-center gap-2">
        <StatusDot kind="progress" />
        <h3 className="text-base font-bold text-slate-ink">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-body">{body}</p>
    </div>
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
