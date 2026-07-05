"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/button";
import { PageFaq } from "@/components/page-faq";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { BenefitsChecklist } from "@/components/sections/benefits-checklist";
import { PainSection } from "@/components/sections/pain-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { RelatedServicesRow } from "@/components/sections/related-services-row";
import { Section, SectionHeading } from "@/components/section";
import {
  FormErrorNotice,
  FormFallbackNotice,
  FormHoneypot,
  FormSuccessNotice,
} from "@/components/form-notices";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { technicalSupportNavSections } from "@/data/page-sections";
import { useFormsOperational } from "@/hooks/use-forms-operational";
import { formErrorMessage, formUnavailableMessage } from "@/data/contact";
import { technicalSupportPage } from "@/data/pages/technical-support";
import { SUPPORT_PRIORITIES } from "@/lib/forms";

type SubmitState = "idle" | "submitting" | "success" | "error";

const content = technicalSupportPage;
const breadcrumbs = getBreadcrumbTrail("/technical-support");

const processSteps = content.process.steps.map((step, index) => ({
  n: index + 1,
  title: step,
  body: "",
}));

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
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind="progress"
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        mockupVariant="support"
        breadcrumbs={breadcrumbs}
        extraActions={
          <Button href={content.hero.diagnosisCta.href} variant="secondary" className="hidden sm:inline-flex">
            {content.hero.diagnosisCta.label}
          </Button>
        }
      />

      <PageSectionNav sections={technicalSupportNavSections} />

      <BenefitsChecklist
        id="audience"
        title={content.audience.title}
        body={content.audience.body}
        items={content.audience.items}
        tone="muted"
        className="py-10 sm:py-14 lg:py-16"
      />

      <PainSection
        title={content.pain.title}
        body={content.pain.body}
        items={content.pain.items}
        tone="tint"
        className="py-10 sm:py-14 lg:py-16"
      />

      <ProcessTimeline
        id={content.process.id}
        title={content.process.title}
        body={content.process.body}
        steps={processSteps}
        className="py-10 sm:py-14 lg:py-16"
      />

      <RelatedServicesRow
        id="channels"
        title={content.channels.title}
        body={content.channels.body}
        items={content.channels.items.map((channel) => ({
          title: channel.title,
          body: channel.body,
          href: channel.href,
        }))}
        tone="muted"
        className="py-10 sm:py-14 lg:py-16"
      />

      <Section tone="white" id="support-form" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.form.title} body={content.form.body} />
        <div className="theme-form-panel">
          {submitState === "success" ? (
            <FormSuccessNotice kind="support" />
          ) : showForm ? (
            <form onSubmit={handleSubmit} className="relative space-y-5">
              <FormHoneypot value={honeypot} onChange={setHoneypot} />

              {showDisabledBanner ? <FormFallbackNotice /> : null}

              {formsOperational === null ? (
                <p className="theme-text-muted text-sm">{content.form.loadingText}</p>
              ) : null}

              <div className={showDisabledBanner || formsOperational === null ? "space-y-5 opacity-60" : "space-y-5"}>
                {submitState === "error" ? <FormErrorNotice message={errorMessage} /> : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="ticket-name"
                    label="שם מלא"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    required
                    invalid={fieldErrors.includes("name")}
                    disabled={formDisabled}
                  />
                  <Field
                    id="ticket-org"
                    label="ארגון"
                    value={form.org}
                    onChange={(v) => setForm((f) => ({ ...f, org: v }))}
                    required
                    invalid={fieldErrors.includes("org")}
                    disabled={formDisabled}
                  />
                </div>

                <Field
                  id="ticket-subject"
                  label="נושא הקריאה"
                  value={form.subject}
                  onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                  required
                  invalid={fieldErrors.includes("subject")}
                  disabled={formDisabled}
                />

                <fieldset disabled={formDisabled}>
                  <legend className="theme-field-label">דחיפות</legend>
                  <div className="flex flex-wrap gap-2">
                    {SUPPORT_PRIORITIES.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, priority: p }))}
                        aria-pressed={form.priority === p}
                        className="theme-priority-chip"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="ticket-details" className="theme-field-label">
                    תיאור התקלה *
                  </label>
                  <textarea
                    id="ticket-details"
                    name="details"
                    value={form.details}
                    onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
                    rows={5}
                    required
                    disabled={formDisabled}
                    aria-invalid={fieldErrors.includes("details")}
                    className={`theme-field-input ${fieldErrors.includes("details") ? "theme-field-input--invalid" : ""}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={formDisabled}
                aria-label="פתיחת קריאת שירות"
                aria-busy={submitState === "submitting"}
                className="btn-cta w-full"
              >
                {submitState === "submitting" ? "שולח..." : "פתיחת קריאה"}
              </button>
            </form>
          ) : null}
        </div>
      </Section>

      <Section tone="muted" className="py-10 sm:py-14">
        <SectionHeading title={content.afterForm.title} />
        <p className="theme-text-muted mt-6 max-w-prose text-[17px] leading-relaxed">{content.afterForm.body}</p>
      </Section>

      <Section tone="tint" className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading title={content.portal.title} body={content.portal.body} />
          <Button href={content.portal.cta.href} variant="secondary" className="shrink-0">
            {content.portal.cta.label}
          </Button>
        </div>
      </Section>

      <PageFaq title={content.faq.title} body={content.faq.body} items={content.faq.items} compact />

      <PageFinalCta
        title={content.finalCta.title}
        body={content.finalCta.body}
        primary={content.finalCta.primary}
        secondary={content.finalCta.secondary}
        compact
      />
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
  disabled = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="theme-field-label">
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
        disabled={disabled}
        aria-invalid={invalid}
        className={`theme-field-input ${invalid ? "theme-field-input--invalid" : ""}`}
      />
    </div>
  );
}
