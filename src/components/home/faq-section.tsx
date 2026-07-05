"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/section";
import { faq } from "@/data/home";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section tone="white" id="faq">
      <SectionHeading title={faq.title} body={faq.body} />

      <div className="mt-8 max-w-3xl space-y-3">
        {faq.items.map((item, i) => {
          const isOpen = openIdx === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;

          return (
            <div key={item.q} className="theme-faq-item">
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="theme-faq-trigger justify-between"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="min-w-0 flex-1 text-base font-semibold">{item.q}</span>
                <span className={`theme-faq-toggle ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                  +
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="theme-text-body px-5 pb-4 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
