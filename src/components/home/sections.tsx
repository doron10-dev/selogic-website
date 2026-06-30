import { Button } from "@/components/button";
import { SlaTile } from "@/components/sla-tile";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import {
  managedItSolution,
  serviceProcess,
  channels,
  comparison,
  slaMetrics,
  workflow,
  beforeAfter,
  techStack,
  finalCta,
} from "@/data/home";

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
            <div className="mt-7">
              <Button href={item.href} variant="primary">
                ראו שירותי IT מנוהלים
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

export function SupportProcessSection() {
  return (
    <Section tone="mute">
      <SectionHeading title={serviceProcess.title} body={serviceProcess.body} />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-card border border-slate-line bg-white p-5 shadow-card sm:p-6">
          <div className="mb-5 flex items-center gap-2">
            <StatusDot kind="progress" />
            <h3 className="text-lg font-bold text-slate-ink">תהליך הקריאה</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceProcess.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-line bg-paper-mute p-4">
                <h4 className="text-sm font-bold text-slate-ink">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-card border border-slate-line bg-white p-5 shadow-card sm:p-6">
          <div className="mb-5 flex items-center gap-2">
            <StatusDot kind="open" />
            <h3 className="text-lg font-bold text-slate-ink">{channels.title}</h3>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-slate-body">{channels.body}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-slate-line bg-paper-mute p-4 transition-colors hover:border-signal/40"
              >
                <h4 className="text-sm font-bold text-slate-ink group-hover:text-signal">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-body">{item.body}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ComparisonSection() {
  return (
    <Section tone="paper">
      <SectionHeading title={comparison.title} body={comparison.body} />
      <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch">
        {comparison.columns.map((col) => (
          <div
            key={col.title}
            className={`rounded-card border p-6 min-w-0 ${
              col.highlight
                ? "border-signal bg-ink text-paper shadow-lift lg:-translate-y-1 lg:ring-2 lg:ring-signal/30"
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
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-card border border-slate-line bg-white p-5 shadow-card">
          <div className="mb-2 flex items-center gap-2">
            <StatusDot kind="waiting" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-mute">לפני</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-body">{beforeAfter.before.body}</p>
        </div>
        <div className="rounded-card border border-signal/40 bg-signal-soft p-5 shadow-card">
          <div className="mb-2 flex items-center gap-2">
            <StatusDot kind="closed" pulse />
            <span className="text-xs font-semibold uppercase tracking-wider text-signal-ink">אחרי</span>
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
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {slaMetrics.items.map((m) => (
          <div
            key={m.label}
            className="rounded-card border border-ink-line bg-ink-soft p-4 min-w-0 sm:p-5"
          >
            <SlaTile item={m} invert />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function WorkflowSection() {
  return (
    <Section tone="paper">
      <SectionHeading title={workflow.title} body={workflow.body} />
      {/* A real sequence — numbered markers earn their place here */}
      <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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

export function TechStackSection() {
  return (
    <Section tone="paper">
      <SectionHeading title={techStack.title} body={techStack.body} />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.items.map((t) => {
          const isControlTower = t.name === "Selogic Control Tower";

          return (
            <div
              key={t.name}
              className={`rounded-card border p-5 shadow-card ${
                isControlTower
                  ? "border-signal/50 bg-ink text-paper sm:col-span-2 lg:col-span-2"
                  : "border-slate-line bg-white border-t-2 border-t-signal/35"
              }`}
            >
              <p className={`font-mono text-sm font-bold ${isControlTower ? "text-paper" : "text-slate-ink"}`}>
                {t.name}
              </p>
              <p className={`mt-2 text-sm ${isControlTower ? "text-paper/70" : "text-slate-body"}`}>
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
            <Button href={finalCta.primary.href} variant="primary" className="w-full">
              {finalCta.primary.label}
            </Button>
            <p className="mt-3 text-xs text-paper/60">{finalCta.primary.sub}</p>
          </div>
          <div className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-6 text-right">
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
