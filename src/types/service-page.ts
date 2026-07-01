export type CardItem = {
  title: string;
  body: string;
  href?: string;
  /** Hub grid: wider featured card styling */
  featured?: boolean;
};

export type WorkflowStep = {
  n: number;
  title: string;
  body: string;
};

export type MetricUnit = "min" | "pct" | "plus";

export type SlaStatus = "open" | "progress" | "waiting" | "closed";

export type SlaItem = {
  label: string;
  /** Short status label — shown as a badge, not a KPI number. */
  badge?: string;
  status?: SlaStatus;
  sub?: string;
  /** @deprecated Prefer badge or main + unit */
  value?: string;
  main?: string;
  unit?: MetricUnit;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type HeroCtaLink = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
  sub: string;
};

export type ServicePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    statusKind?: "open" | "progress" | "waiting" | "closed";
    primaryCta?: HeroCtaLink;
    secondaryCta?: HeroCtaLink;
  };
  pain: {
    title: string;
    body: string;
    items: CardItem[];
  };
  whatWeDo: {
    title: string;
    body: string;
    items: CardItem[];
  };
  clientGains: {
    title: string;
    body: string;
    items: CardItem[];
  };
  howItWorks: {
    title: string;
    body: string;
    steps: WorkflowStep[];
  };
  sla: {
    title: string;
    body: string;
    items: SlaItem[];
  };
  related: {
    title: string;
    body: string;
    items: CardItem[];
  };
  faq: {
    title: string;
    body: string;
    items: FaqItem[];
  };
  finalCta?: {
    title: string;
    body: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};
