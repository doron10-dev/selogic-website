import { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export type SectionTone = "white" | "muted" | "tint" | "dark" | "paper" | "mute" | "ink";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
  /** Subtle scroll-reveal on entrance (opacity + translateY). Opt out with `reveal={false}`. */
  reveal?: boolean;
};

const toneMap: Record<SectionTone, string> = {
  white: "theme-section-white",
  paper: "theme-section-white",
  muted: "theme-section-muted",
  mute: "theme-section-muted",
  tint: "theme-section-tint",
  dark: "bg-slate-950 text-slate-100",
  ink: "bg-slate-950 text-white",
};

export function Section({ children, className = "", id, tone = "white", reveal = true }: SectionProps) {
  const scrollClass = id ? "scroll-mt-32" : "";

  return (
    <section id={id} className={`${toneMap[tone]} py-14 sm:py-20 lg:py-24 ${scrollClass} ${className}`}>
      <div className="container-page">{reveal ? <Reveal>{children}</Reveal> : children}</div>
    </section>
  );
}

/**
 * Invisible scroll anchors, so section-nav links keep working when a page's
 * signature section subsumes the generic pain/what-we-do/benefits/process slots.
 */
export function SectionAnchors({ ids }: { ids: string[] }) {
  return (
    <>
      {ids.map((anchorId) => (
        <span key={anchorId} id={anchorId} aria-hidden="true" className="block scroll-mt-32" />
      ))}
    </>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "start" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "start",
  invert = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-right";

  return (
    <div className={`max-w-prose ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-medium ${invert ? "text-blue-300" : "text-blue-700 dark:text-blue-300"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl ${
          invert ? "text-white" : "theme-text-heading"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-[17px] leading-relaxed ${invert ? "text-slate-200" : "theme-text-body"}`}>{body}</p>
      ) : null}
    </div>
  );
}
