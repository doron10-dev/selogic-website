import type { Metadata } from "next";
import { AboutExtras } from "@/components/about-extras";
import { ServicePage } from "@/components/service-page";
import { TeamProfiles } from "@/components/sections/team-profiles";
import { TrustBar } from "@/components/sections/trust-bar";
import { isoNarrative } from "@/data/credentials";
import { aboutPage } from "@/data/pages/about";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "אודות — מחלקת IT חיצונית לעסקים",
  description:
    "סלוג׳יק היא מחלקת IT חיצונית לעסקים בישראל, המחברת בין שירותי מחשוב מנוהלים, אבטחת מידע, ניטור, תיעוד, מערכות מידע, דוחות ובקרה ניהולית.",
  path: "/about",
});

export default function Page() {
  return (
    <ServicePage
      content={aboutPage}
      pagePath="/about"
      afterHero={
        <>
          <AboutExtras />
          <TeamProfiles
            tone="white"
            title="האנשים שמובילים את סלוג׳יק"
            body="שילוב בין ראייה עסקית, עומק טכנולוגי ואבטחת מידע."
          />
          <TrustBar
            heading="תקנים, ניסיון ואמון"
            intro={isoNarrative()}
            tone="muted"
            showPublicBodies
            className="py-10 sm:py-14"
          />
        </>
      }
    />
  );
}
