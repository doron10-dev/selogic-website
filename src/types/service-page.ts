export type CardItem = {
  title: string;
  body: string;
  href?: string;
};

export type WorkflowStep = {
  n: number;
  title: string;
  body: string;
};

export type MetricUnit = "min" | "pct" | "plus";

export type SlaItem = {
  label: string;
  /** @deprecated Prefer main + unit */
  value?: string;
  main?: string;
  unit?: MetricUnit;
};

export type FaqItem = {
  q: string;
  a: string;
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
