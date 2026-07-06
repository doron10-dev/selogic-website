import { ReactNode } from "react";
import { Button } from "@/components/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MiniMockup, type MiniMockupVariant } from "@/components/mini-mockup";
import { StatusDot } from "@/components/status-dot";
import { siteUrls } from "@/data/contact";
import type { BreadcrumbItem } from "@/data/breadcrumbs";
import type { HeroCtaLink } from "@/types/service-page";

export type HeroLayout = "default" | "editorial" | "compact" | "split";

type HeroLayoutConfig = {
  pad: string;
  grid: string;
  title: string;
  intro: string;
  mockWrap: string;
  mockPanel: string;
};

const LAYOUTS: Record<HeroLayout, HeroLayoutConfig> = {
  default: {
    pad: "py-10 sm:py-16 lg:py-20",
    grid: "grid items-center gap-10 lg:grid-cols-2 lg:gap-12",
    title: "text-[1.625rem] font-extrabold leading-[1.2] sm:text-4xl sm:leading-tight md:text-5xl",
    intro: "max-w-prose text-[17px] sm:text-lg",
    mockWrap: "min-w-0 lg:max-w-xl lg:justify-self-start",
    mockPanel: "",
  },
  editorial: {
    pad: "py-12 sm:py-16 lg:py-24",
    grid: "grid items-center gap-10 lg:grid-cols-[1.4fr_0.85fr] lg:gap-14",
    title: "text-[1.9rem] font-extrabold leading-[1.12] sm:text-[2.6rem] md:text-[3.1rem]",
    intro: "max-w-2xl text-lg leading-relaxed sm:text-xl",
    mockWrap: "min-w-0 lg:max-w-md lg:justify-self-end",
    mockPanel: "",
  },
  compact: {
    pad: "py-8 sm:py-10 lg:py-14",
    grid: "grid items-center gap-8 lg:grid-cols-[1fr_0.82fr] lg:gap-10",
    title: "text-[1.5rem] font-extrabold leading-[1.2] sm:text-3xl md:text-4xl",
    intro: "max-w-prose text-[17px] sm:text-lg",
    mockWrap: "min-w-0 lg:max-w-md lg:justify-self-start",
    mockPanel: "",
  },
  split: {
    pad: "py-10 sm:py-16 lg:py-20",
    grid: "grid items-center gap-10 lg:grid-cols-2 lg:gap-12",
    title: "text-[1.625rem] font-extrabold leading-[1.2] sm:text-4xl sm:leading-tight md:text-5xl",
    intro: "max-w-prose text-[17px] sm:text-lg",
    mockWrap: "min-w-0",
    mockPanel: "rounded-3xl theme-section-tint border p-5 sm:p-7",
  },
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  statusKind?: "open" | "progress" | "waiting" | "closed";
  primaryCta?: HeroCtaLink;
  secondaryCta?: HeroCtaLink;
  mockupVariant?: MiniMockupVariant;
  layout?: HeroLayout;
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
  layout = "default",
  extraActions,
  breadcrumbs,
}: PageHeroProps) {
  const hasCustomCta = Boolean(primaryCta || secondaryCta);
  const cfg = LAYOUTS[layout];

  return (
    <section className="theme-page-hero">
      <div className={`container-page ${cfg.pad}`}>
        <div className={mockupVariant ? cfg.grid : ""}>
          <div className="min-w-0">
            {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
            <span className="eyebrow mb-3">
              <StatusDot kind={statusKind} pulse />
              {eyebrow}
            </span>
            <h1 className={`font-display theme-text-heading max-w-3xl ${cfg.title}`}>{title}</h1>
            <p className={`theme-text-body mt-4 leading-relaxed sm:mt-5 ${cfg.intro}`}>{intro}</p>
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
            <div className={cfg.mockWrap}>
              {cfg.mockPanel ? (
                <div className={cfg.mockPanel} style={{ borderColor: "var(--theme-border)" }}>
                  <MiniMockup variant={mockupVariant} />
                </div>
              ) : (
                <MiniMockup variant={mockupVariant} />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
