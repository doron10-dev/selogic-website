import { ReactNode } from "react";

export type SectionTone = "white" | "muted" | "tint" | "dark" | "paper" | "mute" | "ink";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
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

export function Section({ children, className = "", id, tone = "white" }: SectionProps) {
  const scrollClass = id ? "scroll-mt-32" : "";

  return (
    <section id={id} className={`${toneMap[tone]} py-14 sm:py-20 lg:py-24 ${scrollClass} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
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
        <p className={`mb-3 text-sm font-medium ${invert ? "text-blue-300" : "text-blue-700"}`}>{eyebrow}</p>
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
