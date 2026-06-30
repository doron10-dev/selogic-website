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
};

export function PageHero({
  eyebrow,
  title,
  intro,
  statusKind = "open",
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  const hasCustomCta = Boolean(primaryCta || secondaryCta);

  return (
    <section className="border-b border-slate-line bg-paper">
      <div className="container-page py-12 sm:py-20">
        <span className="eyebrow mb-3">
          <StatusDot kind={statusKind} pulse />
          {eyebrow}
        </span>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg">{intro}</p>
        {hasCustomCta ? (
          <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="mt-8">
            <Button href={siteUrls.technicalSupport} variant="secondary">
              פתחו קריאת שירות
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
