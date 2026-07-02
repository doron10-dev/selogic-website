"use client";

import { useState } from "react";
import Link from "next/link";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import { portal } from "@/data/home";

export function PortalSection() {
  const [tab, setTab] = useState<"manager" | "user">("manager");
  const view = portal[tab];

  return (
    <Section tone="mute">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading title={portal.title} body={portal.body} />
        <Link
          href={portal.cta.href}
          className="text-sm font-semibold text-signal hover:text-signal-ink"
        >
          {portal.cta.label} ←
        </Link>
      </div>

      {/* Manager vs user toggle */}
      <div
        className="mt-8 inline-flex rounded-pill border border-slate-line bg-white p-1"
        role="tablist"
        aria-label="תצוגת פורטל"
      >
        {(["manager", "user"] as const).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            id={`portal-tab-${key}`}
            aria-selected={tab === key}
            aria-controls={`portal-panel-${key}`}
            onClick={() => setTab(key)}
            className={`rounded-pill px-5 py-2 text-sm font-semibold transition-colors ${
              tab === key ? "bg-signal text-white" : "text-slate-body hover:text-slate-ink"
            }`}
          >
            {portal[key].title}
          </button>
        ))}
      </div>

      {/* Compact illustrative panel */}
      <div
        id={`portal-panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`portal-tab-${tab}`}
        className="mt-6 min-w-0 max-w-2xl rounded-card border border-slate-line bg-white p-5 shadow-card sm:p-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-ink sm:text-lg">{view.title}</h3>
          <span className="rounded-pill bg-paper-mute px-2.5 py-1 font-mono text-[11px] text-slate-mute">
            תצוגה להמחשה
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-body">{view.desc}</p>

        <ul className="mt-4 overflow-hidden rounded-xl border border-slate-line">
          {view.rows.map((row, i) => (
            <li
              key={row.label}
              className={`flex items-center justify-between px-3 py-2.5 ${
                i !== view.rows.length - 1 ? "border-b border-slate-line/60" : ""
              }`}
            >
              <span className="flex items-center gap-2.5">
                <StatusDot kind={row.kind} />
                <span className="text-sm font-medium text-slate-ink">{row.label}</span>
              </span>
              <span className="font-mono text-xs text-slate-mute">
                {tab === "manager" ? "כל הארגון" : "אישי"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-xs text-slate-mute">{portal.note}</p>
    </Section>
  );
}
