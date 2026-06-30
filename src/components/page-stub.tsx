import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import { siteUrls } from "@/data/contact";

type PageStubProps = {
  eyebrow: string;
  title: string;
  intro: string;
  /** Bullet points describing what this page will eventually contain */
  outline: string[];
};

export function PageStub({ eyebrow, title, intro, outline }: PageStubProps) {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-slate-line bg-paper">
        <div className="container-page py-16 sm:py-20">
          <span className="eyebrow mb-3">
            <StatusDot kind="open" pulse />
            {eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-ink sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg">
            {intro}
          </p>
          <div className="mt-8">
            <Button href={siteUrls.technicalSupport} variant="secondary">
              פתחו קריאת שירות
            </Button>
          </div>
        </div>
      </section>

      {/* Content outline placeholder — fill these in per page */}
      <Section tone="mute">
        <div className="rounded-card border border-dashed border-slate-line bg-white p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-slate-mute">
            שלד עמוד — תוכן למילוי
          </p>
          <ul className="space-y-2">
            {outline.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-body">
                <StatusDot kind="waiting" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
