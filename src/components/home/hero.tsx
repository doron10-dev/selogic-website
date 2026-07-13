"use client";

import Link from "next/link";
import { BarChart3, Headphones, Shield } from "lucide-react";
import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { hero } from "@/data/home";

const HERO_BACKGROUND = "/hero/hero-bg.jpg";

const VALUE_POINTS = [
  { icon: Headphones, label: "תמיכה ותיעוד קריאות שירות" },
  { icon: BarChart3, label: "סטטוס ושקיפות בפורטל הלקוח" },
  { icon: Shield, label: "גיבוי, הרשאות ואבטחת מידע" },
];

const SERVICE_PILLS = ["תמיכה טכנית", "Microsoft 365", "ענן וגיבוי", "פורטל לקוחות"];

export function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/hero/selogic-hero.mp4"
      backgroundSrc={HERO_BACKGROUND}
      title="שליטה שוטפת ב-IT"
      titleLine2="בלי להחזיק מחלקה פנימית"
      date={hero.eyebrow}
      scrollToExpand="גללו להרחבת התצוגה"
      rtl
    >
      <HeroExpandedPanel />
    </ScrollExpandMedia>
  );
}

function HeroExpandedPanel() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-8 backdrop-blur-sm sm:px-8 sm:py-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
          Selogic Technologies
        </p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {SERVICE_PILLS.map((pill) => (
            <li
              key={pill}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-indigo-100 sm:text-sm"
            >
              {pill}
            </li>
          ))}
        </ul>

        <p className="mt-7 text-lg leading-relaxed text-indigo-100/95 sm:text-xl sm:leading-relaxed">
          {hero.body}
        </p>

        <ul className="mt-8 grid gap-3 text-right sm:grid-cols-3 sm:gap-4">
          {VALUE_POINTS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:flex-col sm:items-center sm:text-center"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300 sm:mt-0" aria-hidden="true" />
              <span className="text-sm font-medium leading-snug text-indigo-100/90">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <Link href={hero.primaryCta.href} className="cine-btn-primary">
          {hero.primaryCta.label}
        </Link>
        <Link href={hero.secondaryCta.href} className="cine-btn-ghost">
          {hero.secondaryCta.label}
        </Link>
      </div>
    </div>
  );
}
