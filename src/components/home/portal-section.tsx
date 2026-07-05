import Link from "next/link";
import { Button } from "@/components/button";
import { PortalMockup } from "@/components/home/portal-mockup";
import { Section } from "@/components/section";
import { portal } from "@/data/home";

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function PortalSection() {
  return (
    <Section tone="tint" className="py-12 sm:py-16 lg:py-20">
      <div className="grid items-center gap-10 xl:grid-cols-2 xl:gap-12">
        <div className="min-w-0 max-w-prose">
          <p className="theme-eyebrow">{portal.eyebrow}</p>
          <h2 className="font-display theme-text-heading mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            {portal.title}
          </h2>
          <p className="theme-text-body mt-4 text-[17px] leading-relaxed">{portal.body}</p>

          <ul className="mt-6 space-y-4">
            {portal.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="theme-text-muted text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href={portal.cta.href} variant="secondary">
              {portal.cta.label}
            </Button>
          </div>
        </div>

        <div className="min-w-0">
          <PortalMockup />
        </div>
      </div>
    </Section>
  );
}
