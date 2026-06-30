import { Button } from "@/components/button";
import { SlaTile } from "@/components/sla-tile";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import {
  comparison,
  slaMetrics,
  workflow,
  beforeAfter,
  techStack,
  finalCta,
} from "@/data/home";

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
        {techStack.items.map((t) => (
          <div
            key={t.name}
            className="card-surface border-t-2 border-t-signal/35 p-5"
          >
            <p className="font-mono text-sm font-bold text-slate-ink">{t.name}</p>
            <p className="mt-2 text-sm text-slate-body">{t.desc}</p>
          </div>
        ))}
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
