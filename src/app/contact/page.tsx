"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import { contactChannels, formNotConnectedMessage, getEmailDisplayLabel, getPhoneDisplayLabel, siteLabels } from "@/data/contact";

type ContactMethod = {
  title: string;
  desc: string;
  href: string;
  label: string;
};

export default function ContactPage() {
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
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect contact form backend
    setSent(true);
  };

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
            {sent ? (
              <FormNotConnectedNotice />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-slate-ink">קבעו שיחת אבחון</h2>
                  <p className="mt-1 text-sm text-slate-body">
                    מלאו פרטים — נחזור לתיאום שיחת היכרות ומיפוי ראשוני.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="contact-name" label="שם מלא" value={form.name} onChange={update("name")} />
                  <Field id="contact-company" label="שם העסק" value={form.company} onChange={update("company")} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="contact-role" label="תפקיד" value={form.role} onChange={update("role")} />
                  <Field id="contact-phone" label="טלפון" value={form.phone} onChange={update("phone")} type="tel" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="contact-email" label="מייל" value={form.email} onChange={update("email")} type="email" />
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
                  aria-label="שליחת בקשה לקביעת שיחת אבחון"
                  className="min-h-11 w-full rounded-pill bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
                >
                  שליחה לקביעת שיחה
                </button>
              </form>
            )}
          </div>
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
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-line bg-paper px-4 py-3 text-sm text-slate-ink outline-none transition-colors focus:border-signal"
      />
    </div>
  );
}
