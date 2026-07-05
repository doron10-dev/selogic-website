import { ReactNode } from "react";
import { Button } from "@/components/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MiniMockup, type MiniMockupVariant } from "@/components/mini-mockup";
import { StatusDot } from "@/components/status-dot";
import { siteUrls } from "@/data/contact";
import type { BreadcrumbItem } from "@/data/breadcrumbs";
import type { HeroCtaLink } from "@/types/service-page";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  statusKind?: "open" | "progress" | "waiting" | "closed";
  primaryCta?: HeroCtaLink;
  secondaryCta?: HeroCtaLink;
  mockupVariant?: MiniMockupVariant;
  extraActions?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageHero({
  eyebrow,
  title,
  intro,
  statusKind = "open",
  primaryCta,
  secondaryCta,
  mockupVariant,
  extraActions,
  breadcrumbs,
}: PageHeroProps) {
  const hasCustomCta = Boolean(primaryCta || secondaryCta);

  return (
    <section className="theme-page-hero">
      <div className="container-page py-10 sm:py-16 lg:py-20">
        <div className={mockupVariant ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-12" : ""}>
          <div className="min-w-0">
            {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
            <span className="eyebrow mb-3">
              <StatusDot kind={statusKind} pulse />
              {eyebrow}
            </span>
            <h1 className="font-display theme-text-heading max-w-3xl text-[1.625rem] font-extrabold leading-[1.2] sm:text-4xl sm:leading-tight md:text-5xl">
              {title}
            </h1>
            <p className="theme-text-body mt-4 max-w-prose text-[17px] leading-relaxed sm:mt-5 sm:text-lg">{intro}</p>
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
                {extraActions}
              </div>
            ) : (
              <div className="mt-6 sm:mt-8">
                <Button href={siteUrls.technicalSupport} variant="secondary">
                  פתחו קריאת שירות
                </Button>
              </div>
            )}
          </div>

          {mockupVariant ? (
            <div className="min-w-0 lg:max-w-xl lg:justify-self-start">
              <MiniMockup variant={mockupVariant} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
