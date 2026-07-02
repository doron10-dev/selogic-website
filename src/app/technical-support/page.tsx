"use client";

import Link from "next/link";
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
import { formErrorMessage } from "@/data/contact";
import { technicalSupportPage } from "@/data/pages/technical-support";
import { SUPPORT_PRIORITIES } from "@/lib/forms";

type SubmitState = "idle" | "submitting" | "success" | "error";

const content = technicalSupportPage;

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
            {content.hero.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-ink sm:text-4xl md:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg">
            {content.hero.intro}
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button href={content.hero.primaryCta.href} variant="primary" className="w-full sm:w-auto">
                {content.hero.primaryCta.label}
              </Button>
              <Button href={content.hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
                {content.hero.secondaryCta.label}
              </Button>
              <Button
                href={content.hero.diagnosisCta.href}
                variant="secondary"
                className="hidden sm:inline-flex"
              >
                {content.hero.diagnosisCta.label}
              </Button>
            </div>
            <Link
              href={content.hero.diagnosisCta.href}
              className="text-sm font-semibold text-signal underline-offset-2 hover:text-signal-ink hover:underline sm:hidden"
            >
              {content.hero.diagnosisCta.label}
            </Link>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <SectionHeading title={content.audience.title} body={content.audience.body} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {content.audience.items.map((card) => (
            <InfoCard key={card.title} title={card.title} body={card.body} />
          ))}
        </div>
      </Section>

      <Section tone="mute">
        <SectionHeading title={content.pain.title} body={content.pain.body} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.pain.items.map((point) => (
            <InfoCard key={point.title} title={point.title} body={point.body} />
          ))}
        </div>
      </Section>

      <Section id={content.process.id} tone="paper">
        <SectionHeading title={content.process.title} body={content.process.body} />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.process.steps.map((step, index) => (
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
        <SectionHeading title={content.channels.title} body={content.channels.body} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.channels.items.map((channel) => (
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
        <div id={content.form.id} className="scroll-mt-24" />
        <SectionHeading title={content.form.title} body={content.form.body} />
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
                  {SUPPORT_PRIORITIES.map((p) => (
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
            <div className="py-8 text-sm text-slate-mute">{content.form.loadingText}</div>
          )}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title={content.afterForm.title} />
        <div className="mt-6 max-w-3xl rounded-card border border-slate-line bg-white p-6 shadow-card">
          <p className="text-base leading-relaxed text-slate-body">{content.afterForm.body}</p>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <SectionHeading title={content.portal.title} body={content.portal.body} invert />
          <div className="rounded-card border border-ink-line bg-ink-soft p-6">
            <Button href={content.portal.cta.href} variant="ghost" className="w-full">
              {content.portal.cta.label}
            </Button>
          </div>
        </div>
      </Section>

      <PageFaq title={content.faq.title} body={content.faq.body} items={content.faq.items} />

      <PageFinalCta
        title={content.finalCta.title}
        body={content.finalCta.body}
        primary={content.finalCta.primary}
        secondary={content.finalCta.secondary}
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
