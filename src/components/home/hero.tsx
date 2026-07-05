"use client";

import Link from "next/link";
import { BarChart3, Headphones, Shield } from "lucide-react";
import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { hero } from "@/data/home";

/** Local server-room background (also in public/hero/hero-bg.jpg). */
const HERO_BG = "/hero/hero-bg.jpg";

/** Poster frame while hero video loads. */
const HERO_POSTER =
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1920&auto=format&fit=crop";

const TRUST_STRIP = [
  { label: "זמינות מערכות", value: "99.9%" },
  { label: "זמן תגובה ראשון", value: "< 15 דק׳" },
  { label: "קריאות מתועדות", value: "100%" },
];

const VALUE_POINTS = [
  { icon: Headphones, label: "תמיכה ותיעוד לכל קריאה" },
  { icon: BarChart3, label: "SLA וסטטוס גלוי בפורטל" },
  { icon: Shield, label: "גיבוי, רשתות ואבטחת מידע" },
];

const SERVICE_PILLS = ["תמיכה טכנית", "Microsoft 365", "ענן וגיבוי", "פורטל לקוחות"];

export function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/hero/selogic-hero.mp4"
      posterSrc={HERO_POSTER}
      bgImageSrc={HERO_BG}
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
        <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
          IT מנוהל לעסקים בישראל
        </h2>

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
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
        <Link
          href={hero.primaryCta.href}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
        >
          {hero.primaryCta.label}
        </Link>
        <Link
          href={hero.secondaryCta.href}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          {hero.secondaryCta.label}
        </Link>
      </div>

      <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10">
        {TRUST_STRIP.map((stat) => (
          <div key={stat.label} className="bg-white/[0.04] px-3 py-4 text-center backdrop-blur-sm">
            <dt className="text-[11px] leading-snug text-indigo-300/80">{stat.label}</dt>
            <dd className="mt-1 font-mono text-lg font-bold text-white sm:text-xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
