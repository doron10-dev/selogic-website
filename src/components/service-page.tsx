import { PageFinalCta } from "@/components/page-final-cta";
import { PageFaq } from "@/components/page-faq";
import { PageHero, type HeroLayout } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { JsonLd } from "@/components/json-ld";
import type { MiniMockupVariant } from "@/components/mini-mockup";
import { BenefitsChecklist, type BenefitsVariant } from "@/components/sections/benefits-checklist";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { OperatingStackSection } from "@/components/sections/operating-stack";
import { EditorialTrustSection } from "@/components/sections/editorial-trust";
import { PortalVisibilitySection } from "@/components/sections/portal-visibility";
import { ControlMapSection } from "@/components/sections/control-map";
import { RemoteSplitSection } from "@/components/sections/remote-split";
import { RecoveryTimelineSection } from "@/components/sections/recovery-timeline";
import { AccessMapSection } from "@/components/sections/access-map";
import { NetworkMapSection } from "@/components/sections/network-map";
import { PainSection, type PainLayout } from "@/components/sections/pain-section";
import { CardGrid } from "@/components/feature-card";
import { Section, SectionHeading } from "@/components/section";
import { getBreadcrumbTrail } from "@/data/breadcrumbs";
import { servicePageNavSections } from "@/data/page-sections";
import { defaultFinalCta } from "@/data/shared";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/json-ld";
import type { CardItem, ServicePageContent } from "@/types/service-page";
import { Fragment, ReactNode } from "react";

const gridSectionClass = "py-10 sm:py-14 lg:py-16";
const compactSectionClass = "py-8 sm:py-11 lg:py-14";

type CardsLayout = "grid" | "split" | "rail" | "ops";

type Signature =
  | "standard"
  | "operatingStack"
  | "editorialTrust"
  | "portalVisibility"
  | "controlMap"
  | "remoteSplit"
  | "recoveryTimeline"
  | "accessMap"
  | "networkMap"
  | "beforeAfter";

type Block = "pain" | "whatWeDo" | "benefits" | "signature";

type Rhythm = {
  heroLayout: HeroLayout;
  painLayout: PainLayout;
  cardsLayout: CardsLayout;
  benefitsVariant: BenefitsVariant;
  /** Page-specific signature section that carries the page's whole story. */
  signature: Signature;
  /** Nav anchors the signature must expose because it subsumes those generic slots. */
  signatureAnchors: string[];
  /**
   * Ordered lower-page section blocks. There is NO universal lower template and,
   * critically, NO shared ProcessTimeline / SLA band / RelatedServices row on service
   * pages — the signature carries each page's story; catalog pages add a varied card list.
   * Cross-navigation to other services is handled by the site footer.
   */
  blocks: Block[];
};

/**
 * Each major page is essentially its own signature composition, with no repeated
 * generic process/SLA/related tail:
 * managed → operating stack (incl. SLA/visibility) · about → editorial trust ·
 * client-portal → portal dashboard (incl. SLA) · information-systems → control map ·
 * remote → session/doc split · backup → recovery path · cyber → before/after +
 * varied services · m365 → access map + varied services · networks → topology + varied services.
 */
function pageRhythm(pagePath: string): Rhythm {
  const p = pagePath;
  const base = {
    heroLayout: "split" as HeroLayout,
    painLayout: "grid" as PainLayout,
    benefitsVariant: "default" as BenefitsVariant,
  };

  if (p === "/managed-it-services")
    return { ...base, heroLayout: "editorial", cardsLayout: "split", signature: "operatingStack", signatureAnchors: ["what-we-do", "benefits"], blocks: ["signature"] };
  if (p === "/about")
    return { ...base, heroLayout: "editorial", cardsLayout: "split", signature: "editorialTrust", signatureAnchors: ["what-we-do", "benefits"], blocks: ["signature"] };
  if (p.includes("client-portal"))
    return { ...base, heroLayout: "compact", cardsLayout: "ops", signature: "portalVisibility", signatureAnchors: ["what-we-do", "benefits", "sla"], blocks: ["signature"] };
  if (p.includes("information-systems"))
    return { ...base, heroLayout: "compact", cardsLayout: "ops", signature: "controlMap", signatureAnchors: ["what-we-do", "benefits"], blocks: ["signature"] };
  if (p.includes("remote-support"))
    return { ...base, heroLayout: "compact", cardsLayout: "ops", signature: "remoteSplit", signatureAnchors: ["what-we-do", "benefits"], blocks: ["signature"] };
  if (p.includes("backup-and-recovery"))
    return { ...base, cardsLayout: "rail", signature: "recoveryTimeline", signatureAnchors: ["what-we-do", "benefits"], blocks: ["signature"] };
  if (p.includes("microsoft-365"))
    return { ...base, cardsLayout: "split", signature: "accessMap", signatureAnchors: ["benefits"], blocks: ["signature", "whatWeDo"] };
  if (p.includes("networks-and-communication"))
    return { ...base, cardsLayout: "ops", signature: "networkMap", signatureAnchors: ["benefits"], blocks: ["signature", "whatWeDo"] };
  if (p.includes("cybersecurity"))
    return { ...base, cardsLayout: "rail", signature: "beforeAfter", signatureAnchors: [], blocks: ["signature", "whatWeDo"] };

  return { ...base, heroLayout: "default", cardsLayout: "grid", signature: "standard", signatureAnchors: [], blocks: ["pain", "whatWeDo", "benefits"] };
}

function WhatWeDoSection({
  title,
  body,
  items,
  layout,
  density,
  className,
}: {
  title: string;
  body: string;
  items: CardItem[];
  layout: CardsLayout;
  density: "default" | "compact";
  className: string;
}) {
  if (layout === "split") {
    return (
      <Section tone="white" id="what-we-do" className={className}>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="lg:pt-2">
            <SectionHeading title={title} body={body} />
          </div>
          <CardGrid items={items} cols={2} density={density} />
        </div>
      </Section>
    );
  }

  const cols = layout === "grid" ? 3 : 2;
  const cardDensity = layout === "rail" ? "compact" : density;
  return (
    <Section tone="white" id="what-we-do" className={className}>
      <SectionHeading title={title} body={body} />
      <CardGrid items={items} cols={cols} density={cardDensity} />
    </Section>
  );
}

export function ServicePage({
  content,
  pagePath,
  afterHero,
  variant = "default",
  mockupVariant = "dispatch",
  heroLayout,
  painLayout,
}: {
  content: ServicePageContent;
  pagePath: string;
  afterHero?: ReactNode;
  variant?: "default" | "flagship" | "compact";
  mockupVariant?: MiniMockupVariant;
  heroLayout?: HeroLayout;
  painLayout?: PainLayout;
}) {
  const cta = content.finalCta ?? defaultFinalCta;
  const isCompact = variant === "compact";
  const sectionPad = isCompact ? compactSectionClass : gridSectionClass;
  const gridDensity = isCompact ? "compact" : "default";
  const breadcrumbs = getBreadcrumbTrail(pagePath);
  const rhythm = pageRhythm(pagePath);
  const resolvedHeroLayout = heroLayout ?? rhythm.heroLayout;
  const resolvedPainLayout = painLayout ?? rhythm.painLayout;
  const anchors = rhythm.signatureAnchors;

  const blockAnchorId: Partial<Record<Block, string>> = {
    pain: "pain",
    whatWeDo: "what-we-do",
    benefits: "benefits",
  };
  const existingIds = new Set<string>(["faq", "contact", ...rhythm.signatureAnchors]);
  rhythm.blocks.forEach((block) => {
    const anchorId = blockAnchorId[block];
    if (anchorId) existingIds.add(anchorId);
  });
  const navSections = servicePageNavSections.filter((section) => existingIds.has(section.id));

  const signatureNode = (() => {
    switch (rhythm.signature) {
      case "operatingStack":
        return <OperatingStackSection content={content} anchors={anchors} className={sectionPad} />;
      case "editorialTrust":
        return <EditorialTrustSection content={content} anchors={anchors} className={sectionPad} />;
      case "portalVisibility":
        return <PortalVisibilitySection content={content} anchors={anchors} className={sectionPad} />;
      case "controlMap":
        return <ControlMapSection content={content} anchors={anchors} className={sectionPad} />;
      case "remoteSplit":
        return <RemoteSplitSection content={content} anchors={anchors} className={sectionPad} />;
      case "recoveryTimeline":
        return <RecoveryTimelineSection content={content} anchors={anchors} className={sectionPad} />;
      case "accessMap":
        return <AccessMapSection content={content} anchors={anchors} className={sectionPad} />;
      case "networkMap":
        return <NetworkMapSection content={content} anchors={anchors} className={sectionPad} />;
      case "beforeAfter":
        return <BeforeAfterSection before={content.pain} after={content.clientGains} className={sectionPad} />;
      default:
        return null;
    }
  })();

  const renderBlock = (block: Block): ReactNode => {
    switch (block) {
      case "signature":
        return signatureNode;
      case "pain":
        return (
          <PainSection
            title={content.pain.title}
            body={content.pain.body}
            items={content.pain.items}
            tone="tint"
            layout={resolvedPainLayout}
            className={sectionPad}
          />
        );
      case "whatWeDo":
        return (
          <WhatWeDoSection
            title={content.whatWeDo.title}
            body={content.whatWeDo.body}
            items={content.whatWeDo.items}
            layout={rhythm.cardsLayout}
            density={gridDensity}
            className={sectionPad}
          />
        );
      case "benefits":
        return (
          <BenefitsChecklist
            title={content.clientGains.title}
            body={content.clientGains.body}
            items={content.clientGains.items}
            tone="muted"
            variant={rhythm.benefitsVariant}
            className={sectionPad}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <JsonLd data={buildFaqJsonLd(content.faq.items)} />
      {breadcrumbs.length > 0 ? <JsonLd data={buildBreadcrumbJsonLd(pagePath, breadcrumbs)} /> : null}
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        statusKind={content.hero.statusKind}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        mockupVariant={mockupVariant}
        layout={resolvedHeroLayout}
        breadcrumbs={breadcrumbs}
      />

      <PageSectionNav sections={navSections} />

      {afterHero}

      {rhythm.blocks.map((block) => (
        <Fragment key={block}>{renderBlock(block)}</Fragment>
      ))}

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
