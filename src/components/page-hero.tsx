import { Button } from "@/components/button";
import { StatusDot } from "@/components/status-dot";
import { siteUrls } from "@/data/contact";
import type { HeroCtaLink } from "@/types/service-page";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  statusKind?: "open" | "progress" | "waiting" | "closed";
  primaryCta?: HeroCtaLink;
  secondaryCta?: HeroCtaLink;
  /** Flagship service pages — stronger hero treatment */
  prominent?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  statusKind = "open",
  primaryCta,
  secondaryCta,
  prominent = false,
}: PageHeroProps) {
  const hasCustomCta = Boolean(primaryCta || secondaryCta);

  return (
    <section
      className={
        prominent
          ? "border-b border-signal/20 bg-gradient-to-bl from-signal-soft/50 via-paper to-paper"
          : "border-b border-slate-line bg-paper"
      }
    >
      <div
        className={`container-page ${prominent ? "py-12 sm:py-20 lg:py-20" : "py-10 sm:py-16 lg:py-20"}`}
      >
        {prominent ? (
          <div className="max-w-4xl rounded-card border border-signal/20 bg-white/70 p-6 shadow-lift backdrop-blur-sm sm:p-8 lg:p-10">
            <HeroContent
              eyebrow={eyebrow}
              title={title}
              intro={intro}
              statusKind={statusKind}
              hasCustomCta={hasCustomCta}
              primaryCta={primaryCta}
              secondaryCta={secondaryCta}
              prominent
            />
          </div>
        ) : (
          <HeroContent
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            statusKind={statusKind}
            hasCustomCta={hasCustomCta}
            primaryCta={primaryCta}
            secondaryCta={secondaryCta}
          />
        )}
      </div>
    </section>
  );
}

function HeroContent({
  eyebrow,
  title,
  intro,
  statusKind,
  hasCustomCta,
  primaryCta,
  secondaryCta,
  prominent = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  statusKind: "open" | "progress" | "waiting" | "closed";
  hasCustomCta: boolean;
  primaryCta?: HeroCtaLink;
  secondaryCta?: HeroCtaLink;
  prominent?: boolean;
}) {
  return (
    <>
      <span className="eyebrow mb-3">
        <StatusDot kind={statusKind} pulse />
        {eyebrow}
      </span>
      <h1
        className={`max-w-3xl font-extrabold text-slate-ink ${
          prominent
            ? "text-[1.65rem] leading-[1.18] sm:text-4xl sm:leading-tight md:text-5xl"
            : "text-[1.625rem] leading-[1.2] sm:text-4xl sm:leading-tight md:text-5xl"
        }`}
      >
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-body sm:mt-5 sm:text-lg">
        {intro}
      </p>
      {hasCustomCta ? (
        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
          {primaryCta ? (
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
          ) : null}
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      ) : (
        <div className="mt-6 sm:mt-8">
          <Button href={siteUrls.technicalSupport} variant="secondary">
            פתחו קריאת שירות
          </Button>
        </div>
      )}
    </>
  );
}
