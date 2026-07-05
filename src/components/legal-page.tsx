import Link from "next/link";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { StatusDot } from "@/components/status-dot";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <>
      <section className="theme-page-hero">
        <div className="container-page py-10 sm:py-16 lg:py-20">
          <span className="eyebrow mb-3">
            <StatusDot kind="closed" />
            {content.eyebrow}
          </span>
          <h1 className="font-display theme-text-heading max-w-3xl text-[1.625rem] font-extrabold leading-[1.2] sm:text-4xl sm:leading-tight md:text-5xl">
            {content.title}
          </h1>
          <p className="theme-text-body mt-4 max-w-prose text-[17px] leading-relaxed sm:mt-5 sm:text-lg">{content.intro}</p>
          <p className="theme-text-muted mt-4 text-sm">עודכן: {content.updated}</p>
        </div>
      </section>

      <Section tone="muted" className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {content.sections.map((section) => (
            <article key={section.title}>
              <h2 className="theme-text-heading text-xl font-bold">{section.title}</h2>
              <div className="theme-text-body mt-4 space-y-3 text-[17px] leading-relaxed">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="theme-text-body mt-4 list-disc space-y-2 ps-5 text-[17px] leading-relaxed">
                  {section.bullets.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            צור קשר
          </Button>
          <Link href="/" className="theme-link inline-flex min-h-11 items-center text-sm font-semibold">
            חזרה לדף הבית
          </Link>
        </div>
      </Section>
    </>
  );
}
