"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import { formNotConnectedMessage } from "@/data/contact";

const priorities = ["נמוכה", "רגילה", "גבוהה", "דחוף"];

export default function TechnicalSupportPage() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    subject: "",
    priority: "רגילה",
    details: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect support ticket backend
    setSent(true);
  };

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
            כל פנייה הופכת לקריאה מסודרת — עם סטטוס, בעל טיפול ותיעוד מלא. מלאו את הפרטים ונחזור אליכם.
          </p>
        </div>
      </section>

      <Section tone="mute">
        <div className="mx-auto min-w-0 max-w-2xl rounded-card border border-slate-line bg-white p-6 shadow-card sm:p-8">
          {sent ? (
            <FormNotConnectedNotice />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="ticket-name"
                  label="שם מלא"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                />
                <Field
                  id="ticket-org"
                  label="ארגון"
                  value={form.org}
                  onChange={(v) => setForm((f) => ({ ...f, org: v }))}
                />
              </div>

              <Field
                id="ticket-subject"
                label="נושא הקריאה"
                value={form.subject}
                onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
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
                      className={`rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
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
                  תיאור התקלה
                </label>
                <textarea
                  id="ticket-details"
                  name="details"
                  value={form.details}
                  onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
                  rows={5}
                  className="w-full rounded-xl border border-slate-line bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal"
                />
              </div>

              <button
                type="submit"
                aria-label="פתיחת קריאת שירות"
                className="w-full rounded-pill bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
              >
                פתיחת קריאה
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}

function FormNotConnectedNotice() {
  const msg = formNotConnectedMessage;
  return (
    <div className="flex flex-col items-start gap-3 py-8">
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

function Field({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-line bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal"
      />
    </div>
  );
}
