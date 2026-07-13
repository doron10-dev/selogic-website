import Link from "next/link";
import { BarChart3, FileText, Ticket } from "lucide-react";
import { Button } from "@/components/button";
import { ServiceIconChip } from "@/lib/service-icons";
import { ProcessTimelineSteps } from "@/components/sections/process-timeline";
import { Section } from "@/components/section";
import { siteUrls } from "@/data/contact";
import { whySelogic, servicesBento, serviceProcess, finalCta } from "@/data/home";

function WhyIcon({ kind }: { kind: "chart" | "ticket" | "doc" }) {
  const icons = {
    chart: BarChart3,
    ticket: Ticket,
    doc: FileText,
  };
  const Icon = icons[kind];
  return (
    <span className="icon-chip !h-11 !w-11">
      <Icon size={22} aria-hidden="true" />
    </span>
  );
}

export function WhySection() {
  return (
    <Section tone="muted" className="py-12 sm:py-16 lg:py-20">
      <div className="mb-8 max-w-prose">
        <p className="theme-eyebrow">{whySelogic.eyebrow}</p>
        <h2 className="font-display theme-text-heading mt-3 text-3xl font-bold leading-tight sm:text-4xl">
          {whySelogic.title}
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {whySelogic.items.map((item) => (
          <div key={item.title} className="theme-card-interactive">
            <WhyIcon kind={item.icon} />
            <h3 className="theme-text-heading mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="theme-text-muted mt-2 text-[17px] leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BentoCard({
  title,
  body,
  href,
  className = "",
}: {
  title: string;
  body: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <>
      <ServiceIconChip title={title} href={href} />
      <h3 className="theme-text-heading mt-4 text-lg font-semibold">{title}</h3>
      <p className="theme-text-muted mt-2 text-[17px] leading-relaxed">{body}</p>
      {href ? (
        <span className="mt-4 inline-block text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
      ) : null}
    </>
  );

  const base = `group theme-card-interactive block h-full ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }
  return <div className={base}>{inner}</div>;
}

export function ServicesBentoSection() {
  const { featured, cards, ctaCard } = servicesBento;

  return (
    <Section tone="white" className="py-12 sm:py-16 lg:py-20">
      <div className="mb-8 max-w-prose">
        <p className="theme-eyebrow">{servicesBento.eyebrow}</p>
        <h2 className="font-display theme-text-heading mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {servicesBento.title}
        </h2>
        <p className="theme-text-body mt-4 text-[17px] leading-relaxed">{servicesBento.body}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
        <Link href={featured.href} className={`group theme-featured-card lg:col-span-1 lg:row-span-2`}>
          <ServiceIconChip title={featured.title} href={featured.href} />
          <h3 className="theme-text-heading mt-4 text-2xl font-semibold">{featured.title}</h3>
          <p className="theme-text-muted mt-3 text-[17px] leading-relaxed">{featured.body}</p>
          <div className="theme-inner-card mt-5">
            <p className="theme-text-heading text-xs font-semibold">מתאים במיוחד כש:</p>
            <ul className="mt-3 space-y-2">
              {featured.bullets.map((b) => (
                <li key={b} className="theme-text-muted flex items-start gap-2 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Link>

        <BentoCard {...cards[0]} className="lg:col-start-2" />
        <BentoCard {...cards[1]} className="lg:col-start-2" />
        <BentoCard {...cards[2]} className="lg:col-start-3 lg:row-start-1" />
        <BentoCard {...cards[3]} className="lg:col-start-3 lg:row-start-2" />
      </div>

      <div
        className="mt-8 flex flex-col items-center justify-center gap-4 border-t pt-8 sm:flex-row sm:gap-6"
        style={{ borderColor: "var(--theme-border)" }}
      >
        <h3 className="font-display theme-text-heading text-center text-lg font-semibold">{ctaCard.title}</h3>
        <Button
          href={ctaCard.cta.href}
          variant={ctaCard.cta.href === siteUrls.contactDiagnosis ? "diagnosis" : "primary"}
          className="shrink-0"
        >
          {ctaCard.cta.label}
        </Button>
      </div>
    </Section>
  );
}

export function ProcessSection() {
  const steps = serviceProcess.steps.map((step, index) => ({
    n: index + 1,
    title: step.title,
    body: step.body,
  }));

  return (
    <Section tone="dark" className="py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="min-w-0 max-w-prose">
          <p className="text-sm font-medium text-blue-300">{serviceProcess.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {serviceProcess.title}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-200">{serviceProcess.body}</p>
        </div>

        <ProcessTimelineSteps steps={steps} invert boxed className="lg:mt-2" />
      </div>
    </Section>
  );
}

function TrackIcon({ kind }: { kind: "plus" | "menu" }) {
  if (kind === "plus") {
    return (
      <span className="icon-chip !h-11 !w-11">
        <span className="text-xl font-semibold leading-none">+</span>
      </span>
    );
  }
  return (
    <span className="icon-chip !h-11 !w-11 bg-slate-100 text-slate-600">
      <span className="text-lg leading-none">≡</span>
    </span>
  );
}

export function FinalCtaSection() {
  return (
    <Section tone="tint" className="py-12 sm:py-16 lg:py-20">
      <div className="mb-8 max-w-prose">
        <p className="theme-eyebrow">{finalCta.eyebrow}</p>
        <h2 className="font-display theme-text-heading mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {finalCta.title}
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {[finalCta.primary, finalCta.secondary].map((track) => (
          <div key={track.title} className="theme-card-interactive sm:p-8">
            <TrackIcon kind={track.icon} />
            <h3 className="font-display theme-text-heading mt-5 text-xl font-semibold">{track.title}</h3>
            <p className="theme-text-muted mt-3 text-[17px] leading-relaxed">{track.body}</p>
            <Button
              href={track.href}
              variant={
                track.href === siteUrls.contactDiagnosis
                  ? "diagnosis"
                  : "secondary"
              }
              className="mt-6"
            >
              {track.label}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
