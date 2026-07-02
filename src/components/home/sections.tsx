import Link from "next/link";
import { Button } from "@/components/button";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import {
  trustStrip,
  flagship,
  workflow,
  servicesHub,
  slaControl,
  comparison,
  finalCta,
} from "@/data/home";

/* ── 2. Trust strip ──────────────────────────────────────────
   Stronger than a plain row: bordered pills with an accent marker,
   answering the four questions a manager cares about. */
export function TrustStrip() {
  return (
    <section className="border-b border-slate-line bg-white">
      <div className="container-page py-6 sm:py-8">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {trustStrip.items.map((item) => (
            <li
              key={item.title}
              className="flex min-w-0 items-start gap-3 rounded-card border border-slate-line bg-paper px-4 py-3.5 shadow-card"
            >
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-signal-soft">
                <StatusDot kind="open" />
              </span>
              <span className="min-w-0">
                <p className="text-sm font-bold text-slate-ink">{item.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-slate-mute">{item.sub}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 4. Flagship managed IT ──────────────────────────────────
   Managed IT presented as the main offering, on an ink panel so it
   reads as the anchor of the page. */
export function FlagshipSection() {
  return (
    <Section tone="ink">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow mb-3 text-signal-soft">{flagship.eyebrow}</span>
          <h2 className="text-balance text-2xl font-bold leading-tight text-paper sm:text-3xl md:text-4xl">
            {flagship.title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-paper/70 sm:text-lg">
            {flagship.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={flagship.primaryCta.href} variant="primary" className="w-full sm:w-auto">
              {flagship.primaryCta.label}
            </Button>
            <Button href={flagship.secondaryCta.href} variant="ghost" className="w-full sm:w-auto">
              {flagship.secondaryCta.label}
            </Button>
          </div>
        </div>

        <ul className="grid gap-3">
          {flagship.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 rounded-card border border-ink-line bg-ink-soft px-5 py-4"
            >
              <StatusDot kind="closed" />
              <span className="text-sm font-medium text-paper sm:text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── 5. How Selogic works ────────────────────────────────────
   A single, clear flow that replaces scattered process explanations. */
export function WorkflowSection() {
  return (
    <Section tone="paper">
      <SectionHeading title={workflow.title} body={workflow.body} />
      <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {workflow.steps.map((step) => (
          <li
            key={step.n}
            className="relative min-w-0 rounded-card border border-slate-line bg-white p-5 shadow-card"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-soft font-mono text-sm font-bold text-signal-ink">
              {step.n}
            </span>
            <h3 className="mt-3 text-sm font-bold text-slate-ink">{step.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ── 6. Services hub ─────────────────────────────────────────
   Strong entry point for choosing a service — primary "all services"
   link is prominent, with four capability cards below. */
export function ServicesHubSection() {
  return (
    <Section tone="mute">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={servicesHub.eyebrow}
          title={servicesHub.title}
          body={servicesHub.body}
        />
        <Button href={servicesHub.primaryCta.href} variant="primary" className="w-full md:w-auto">
          {servicesHub.primaryCta.label}
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {servicesHub.cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group block min-w-0 rounded-card border border-slate-line bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lift"
          >
            <div className="mb-3 flex items-center gap-2">
              <StatusDot kind="open" />
            </div>
            <h3 className="text-base font-bold text-slate-ink">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-body">{card.body}</p>
          </Link>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-mute">
        {servicesHub.hint}{" "}
        <Link href={servicesHub.primaryCta.href} className="font-semibold text-signal hover:text-signal-ink">
          {servicesHub.primaryCta.label}
        </Link>
        .
      </p>
    </Section>
  );
}

/* ── 8. SLA and control ──────────────────────────────────────
   Badge-based tiles instead of fake numbers. */
export function SlaControlSection() {
  return (
    <Section tone="paper">
      <SectionHeading title={slaControl.title} body={slaControl.body} />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {slaControl.items.map((item) => (
          <div
            key={item.badge}
            className="min-w-0 rounded-card border border-slate-line bg-white p-5 shadow-card"
          >
            <span className="inline-flex items-center gap-2 rounded-pill bg-signal-soft px-3 py-1.5 text-xs font-semibold text-signal-ink">
              <StatusDot kind="open" />
              {item.badge}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-body">{item.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── 9. Trust comparison ─────────────────────────────────────
   Respectful, boutique positioning — no attacks on competitors. */
export function ComparisonSection() {
  return (
    <Section tone="mute">
      <SectionHeading title={comparison.title} body={comparison.body} />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {comparison.columns.map((col) => (
          <div
            key={col.title}
            className={`rounded-card border p-6 min-w-0 ${
              col.highlight
                ? "border-signal bg-ink text-paper shadow-lift"
                : "border-slate-line bg-white shadow-card"
            }`}
          >
            <h3 className={`text-lg font-bold ${col.highlight ? "text-paper" : "text-slate-ink"}`}>
              {col.title}
            </h3>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                col.highlight ? "text-paper/75" : "text-slate-body"
              }`}
            >
              {col.body}
            </p>
            {col.highlight && (
              <span className="mt-4 inline-flex items-center gap-2 rounded-pill bg-signal/20 px-3 py-1 text-xs font-medium text-signal-soft">
                <StatusDot kind="closed" pulse /> מומלץ
              </span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── 12. Final CTA ───────────────────────────────────────────
   Two clearly separated paths: new prospects vs existing clients. */
export function FinalCtaSection() {
  return (
    <Section tone="ink">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={finalCta.title} body={finalCta.body} align="center" invert />
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-6">
        {/* New prospects */}
        <div className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-6 text-right">
          <p className="text-sm font-bold text-paper">{finalCta.prospect.heading}</p>
          <p className="mt-2 mb-5 text-xs leading-relaxed text-paper/60">{finalCta.prospect.sub}</p>
          <Button href={finalCta.prospect.href} variant="primary" className="w-full">
            {finalCta.prospect.label}
          </Button>
        </div>

        {/* Existing clients */}
        <div className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-6 text-right">
          <p className="text-sm font-bold text-paper">{finalCta.client.heading}</p>
          <p className="mt-2 mb-5 text-xs leading-relaxed text-paper/60">{finalCta.client.sub}</p>
          <Button href={finalCta.client.href} variant="ghost" className="w-full">
            {finalCta.client.label}
          </Button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href={finalCta.servicesCta.href}
          className="text-sm font-semibold text-signal-soft underline decoration-signal-soft/40 underline-offset-4 hover:decoration-signal-soft"
        >
          {finalCta.servicesCta.label}
        </Link>
      </div>
    </Section>
  );
}
