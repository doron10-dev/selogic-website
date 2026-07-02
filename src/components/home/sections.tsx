import Link from "next/link";
import { Button } from "@/components/button";
import { CardGrid } from "@/components/feature-card";
import { SlaTile } from "@/components/sla-tile";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import {
  managedItSolution,
  howWeWork,
  servicesHub,
  comparison,
  slaMetrics,
  beforeAfter,
  compactTechStack,
  finalCta,
  trustStrip,
} from "@/data/home";

export function TrustStripSection() {
  return (
    <div className="border-y border-slate-line bg-paper-mute">
      <div className="container-page py-5 sm:py-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {trustStrip.items.map((item) => (
            <div
              key={item.label}
              className="rounded-card border border-slate-line/80 bg-white px-3 py-3 text-center shadow-card sm:px-4 sm:py-4"
            >
              <div className="mb-2 flex justify-center">
                <StatusDot kind="progress" />
              </div>
              <p className="text-sm font-bold text-slate-ink">{item.label}</p>
              <p className="mt-1 text-xs leading-snug text-slate-mute">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ManagedItSection() {
  const item = managedItSolution.items[0];

  return (
    <Section tone="mute">
      <div className="overflow-hidden rounded-card border border-slate-line bg-white shadow-lift">
        <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="eyebrow mb-3">
              <StatusDot kind="closed" pulse />
              פתרון מרכזי
            </span>
            <h2 className="max-w-3xl text-2xl font-bold leading-tight text-slate-ink sm:text-3xl md:text-4xl">
              {managedItSolution.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg">
              {managedItSolution.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={item.href!} variant="primary">
                ראו שירותי IT מנוהלים
              </Button>
              <Button href={servicesHub.hubCta.href} variant="secondary">
                {servicesHub.hubCta.label}
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-line bg-paper-mute p-6 sm:p-8 lg:border-r lg:border-t-0">
            <div className="rounded-card border border-slate-line bg-white p-5 shadow-card">
              <StatusDot kind="progress" />
              <h3 className="mt-3 text-lg font-bold text-slate-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">{item.body}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function HowWeWorkSection() {
  return (
    <Section tone="paper">
      <SectionHeading title={howWeWork.title} body={howWeWork.body} />

      <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {howWeWork.steps.map((step) => (
          <li
            key={step.n}
            className="min-w-0 rounded-card border border-slate-line bg-white p-4 shadow-card sm:p-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-soft font-mono text-sm font-bold text-signal-ink">
              {step.n}
            </span>
            <h3 className="mt-3 text-sm font-bold text-slate-ink">{step.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-body">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-card border border-slate-line bg-paper-mute p-4 sm:p-5">
        <p className="mb-3 text-sm font-semibold text-slate-ink">{howWeWork.channelsTitle}</p>
        <div className="flex flex-wrap gap-2">
          {howWeWork.channels.map((ch) => (
            <Link
              key={ch.title}
              href={ch.href}
              className="inline-flex min-h-10 items-center rounded-pill border border-slate-line bg-white px-4 py-2 text-sm font-medium text-slate-ink transition-colors hover:border-signal/40 hover:text-signal"
            >
              {ch.title}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ServicesHubSection() {
  return (
    <Section tone="mute">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading title={servicesHub.title} body={servicesHub.body} />
        <Button href={servicesHub.hubCta.href} variant="primary" className="shrink-0 sm:mb-1">
          {servicesHub.hubCta.label}
        </Button>
      </div>
      <CardGrid items={servicesHub.items} cols={4} density="compact" />
    </Section>
  );
}

export function ComparisonSection() {
  return (
    <Section tone="paper">
      <SectionHeading title={comparison.title} body={comparison.body} />
      <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-stretch">
        {comparison.columns.map((col) => (
          <div
            key={col.title}
            className={`min-w-0 rounded-card border p-5 sm:p-6 ${
              col.highlight
                ? "border-signal bg-ink text-paper shadow-lift lg:-translate-y-1 lg:ring-2 lg:ring-signal/30"
                : "border-slate-line bg-white shadow-card"
            }`}
          >
            <h3 className={`text-lg font-bold ${col.highlight ? "text-paper" : "text-slate-ink"}`}>
              {col.title}
            </h3>
            <p className={`mt-3 text-sm leading-relaxed ${col.highlight ? "text-paper/75" : "text-slate-body"}`}>
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
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-card border border-slate-line bg-white p-4 shadow-card sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <StatusDot kind="waiting" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-mute">
              {beforeAfter.before.title}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-body">{beforeAfter.before.body}</p>
        </div>
        <div className="rounded-card border border-signal/40 bg-signal-soft p-4 shadow-card sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <StatusDot kind="closed" pulse />
            <span className="text-xs font-semibold uppercase tracking-wider text-signal-ink">
              {beforeAfter.after.title}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-body">{beforeAfter.after.body}</p>
        </div>
      </div>
    </Section>
  );
}

export function SlaSection() {
  return (
    <Section tone="ink">
      <SectionHeading title={slaMetrics.title} body={slaMetrics.body} invert />
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {slaMetrics.items.map((m) => (
          <div key={m.label} className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-4 sm:p-5">
            <SlaTile item={m} invert />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CompactTechStackSection() {
  return (
    <Section tone="paper" className="py-10 sm:py-14 lg:py-16">
      <SectionHeading title={compactTechStack.title} body={compactTechStack.body} />
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {compactTechStack.items.map((t) => {
          const isFeatured = "featured" in t && t.featured;

          return (
            <div
              key={t.name}
              className={`rounded-card border p-4 shadow-card sm:p-5 ${
                isFeatured
                  ? "border-signal/50 bg-ink text-paper sm:col-span-2 lg:col-span-1"
                  : "border-slate-line bg-white border-t-2 border-t-signal/35"
              }`}
            >
              <p className={`font-mono text-sm font-bold ${isFeatured ? "text-paper" : "text-slate-ink"}`}>
                {t.name}
              </p>
              <p className={`mt-2 text-sm leading-relaxed ${isFeatured ? "text-paper/70" : "text-slate-body"}`}>
                {t.desc}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function FinalCtaSection() {
  return (
    <Section tone="ink">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={finalCta.title} body={finalCta.body} align="center" invert />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-6 text-right">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-paper/50">לעסקים חדשים</p>
            <Button href={finalCta.primary.href} variant="primary" className="w-full">
              {finalCta.primary.label}
            </Button>
            <p className="mt-3 text-xs text-paper/60">{finalCta.primary.sub}</p>
          </div>
          <div className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-6 text-right">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-paper/50">ללקוחות קיימים</p>
            <Button href={finalCta.secondary.href} variant="ghost" className="w-full">
              {finalCta.secondary.label}
            </Button>
            <p className="mt-3 text-xs text-paper/60">{finalCta.secondary.sub}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
