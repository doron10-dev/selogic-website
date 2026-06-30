import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "mute" | "ink";
};

const toneMap = {
  paper: "bg-paper",
  mute: "bg-paper-mute",
  ink: "bg-ink text-paper",
};

export function Section({ children, className = "", id, tone = "paper" }: SectionProps) {
  return (
    <section id={id} className={`${toneMap[tone]} py-16 sm:py-24 ${className}`}>
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
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${invert ? "text-paper" : "text-slate-ink"}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${invert ? "text-paper/70" : "text-slate-body"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
