import type { Metadata } from "next";
import { AboutExtras } from "@/components/about-extras";
import { ServicePage } from "@/components/service-page";
import { TeamProfiles } from "@/components/sections/team-profiles";
import { TrustBar } from "@/components/sections/trust-bar";
import { aboutPage } from "@/data/pages/about";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "אודות",
  description:
    "Selogic, חברת IT בוטיק מטבריה. שותף מחשוב לעסקים בצפון הארץ, עם פורטל לקוחות, SLA, תיעוד ותמיכה מסודרת.",
  path: "/about",
});

export default function Page() {
  return (
    <ServicePage
      content={aboutPage}
      pagePath="/about"
      mockupVariant="dispatch"
      afterHero={
        <>
          <AboutExtras />
          <TeamProfiles tone="white" />
          <TrustBar tone="muted" showPublicBodies className="py-10 sm:py-14" />
        </>
      }
    />
  );
}
