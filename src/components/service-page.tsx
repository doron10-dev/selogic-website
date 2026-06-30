import { SlaTile } from "@/components/sla-tile";
import { CardGrid } from "@/components/feature-card";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageFaq } from "@/components/page-faq";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { defaultFinalCta } from "@/data/shared";
import type { ServicePageContent } from "@/types/service-page";
import { ReactNode } from "react";

export function ServicePage({
  content,
  afterHero,
}: {
  content: ServicePageContent;
  afterHero?: ReactNode;
}) {
  const cta = content.finalCta ?? defaultFinalCta;

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind={content.hero.statusKind}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />

      {afterHero}

      <Section tone="paper">
        <SectionHeading title={content.pain.title} body={content.pain.body} />
        <CardGrid items={content.pain.items} cols={3} />
      </Section>

      <Section tone="mute">
        <SectionHeading title={content.whatWeDo.title} body={content.whatWeDo.body} />
        <CardGrid items={content.whatWeDo.items} cols={3} />
      </Section>

      <Section tone="paper">
        <SectionHeading title={content.clientGains.title} body={content.clientGains.body} />
        <CardGrid items={content.clientGains.items} cols={3} />
      </Section>

      <Section tone="mute">
        <SectionHeading title={content.howItWorks.title} body={content.howItWorks.body} />
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {content.howItWorks.steps.map((step) => (
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

      <Section tone="ink">
        <SectionHeading title={content.sla.title} body={content.sla.body} invert />
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {content.sla.items.map((m) => (
            <div
              key={m.label}
              className="min-w-0 rounded-card border border-ink-line bg-ink-soft p-4 sm:p-5"
            >
              <SlaTile item={m} invert />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title={content.related.title} body={content.related.body} />
        <CardGrid items={content.related.items} cols={3} />
      </Section>

      <PageFaq title={content.faq.title} body={content.faq.body} items={content.faq.items} />

      <PageFinalCta
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </>
  );
}
