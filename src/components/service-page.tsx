import { SlaTile } from "@/components/sla-tile";
import { CardGrid } from "@/components/feature-card";
import { PageFinalCta } from "@/components/page-final-cta";
import { PageFaq } from "@/components/page-faq";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { defaultFinalCta } from "@/data/shared";
import type { ServicePageContent } from "@/types/service-page";
import { ReactNode } from "react";

const gridSectionClass = "py-10 sm:py-14 lg:py-16";
const compactSectionClass = "py-8 sm:py-11 lg:py-14";

export function ServicePage({
  content,
  afterHero,
  variant = "default",
}: {
  content: ServicePageContent;
  afterHero?: ReactNode;
  variant?: "default" | "flagship" | "compact";
}) {
  const cta = content.finalCta ?? defaultFinalCta;
  const isFlagship = variant === "flagship";
  const isCompact = variant === "compact";
  const sectionPad = isCompact ? compactSectionClass : gridSectionClass;
  const gridDensity = isCompact ? "compact" : "default";

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind={content.hero.statusKind}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        prominent={isFlagship}
      />

      {afterHero}

      <Section tone="paper" className={sectionPad}>
        <SectionHeading title={content.pain.title} body={content.pain.body} />
        <CardGrid items={content.pain.items} cols={3} density={gridDensity} />
      </Section>

      <Section tone="mute" className={sectionPad}>
        {isFlagship ? (
          <div className="overflow-hidden rounded-card border border-signal/20 bg-white shadow-lift">
            <div className="border-b border-signal/10 bg-signal-soft/50 px-5 py-2.5 sm:px-8 sm:py-3">
              <span className="eyebrow">פתרון מרכזי</span>
            </div>
            <div className="p-5 sm:p-8">
              <SectionHeading title={content.whatWeDo.title} body={content.whatWeDo.body} />
              <CardGrid items={content.whatWeDo.items} cols={3} density={gridDensity} />
            </div>
          </div>
        ) : (
          <>
            <SectionHeading title={content.whatWeDo.title} body={content.whatWeDo.body} />
            <CardGrid items={content.whatWeDo.items} cols={3} density={gridDensity} />
          </>
        )}
      </Section>

      <Section tone="paper" className={sectionPad}>
        <SectionHeading title={content.clientGains.title} body={content.clientGains.body} />
        <CardGrid items={content.clientGains.items} cols={3} density={gridDensity} />
      </Section>

      <Section tone="mute" className={sectionPad}>
        <SectionHeading title={content.howItWorks.title} body={content.howItWorks.body} />
        <ol
          className={`grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5 ${isCompact ? "mt-6" : "mt-8"}`}
        >
          {content.howItWorks.steps.map((step) => (
            <li
              key={step.n}
              className="relative min-w-0 rounded-card border border-slate-line bg-white p-4 shadow-card sm:p-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-soft font-mono text-sm font-bold text-signal-ink sm:h-9 sm:w-9">
                {step.n}
              </span>
              <h3 className="mt-2.5 text-sm font-bold text-slate-ink sm:mt-3">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="ink" className="py-10 sm:py-14 lg:py-16">
        <SectionHeading title={content.sla.title} body={content.sla.body} invert />
        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

      <Section tone="paper" className={isCompact ? "py-8 sm:py-10 lg:py-12" : sectionPad}>
        <SectionHeading
          title={content.related.title}
          body={content.related.body}
        />
        <CardGrid
          items={content.related.items}
          cols={isCompact ? 2 : 3}
          density="compact"
        />
      </Section>

      <PageFaq
        title={content.faq.title}
        body={content.faq.body}
        items={content.faq.items}
        compact
      />

      <PageFinalCta
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
        compact
      />
    </>
  );
}
