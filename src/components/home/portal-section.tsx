"use client";

import { useState } from "react";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import { portal } from "@/data/home";

export function PortalSection() {
  const [tab, setTab] = useState<"manager" | "user">("manager");

  return (
    <Section tone="mute">
      <SectionHeading title={portal.title} body={portal.body} />

      <div className="mt-8 inline-flex rounded-pill border border-slate-line bg-white p-1" role="tablist" aria-label="תצוגת פורטל">
        <button
          type="button"
          role="tab"
          id="portal-tab-manager"
          aria-selected={tab === "manager"}
          aria-controls="portal-panel-manager"
          onClick={() => setTab("manager")}
          className={`rounded-pill px-5 py-2 text-sm font-semibold transition-colors ${
            tab === "manager" ? "bg-signal text-white" : "text-slate-body hover:text-slate-ink"
          }`}
        >
          {portal.manager.title}
        </button>
        <button
          type="button"
          role="tab"
          id="portal-tab-user"
          aria-selected={tab === "user"}
          aria-controls="portal-panel-user"
          onClick={() => setTab("user")}
          className={`rounded-pill px-5 py-2 text-sm font-semibold transition-colors ${
            tab === "user" ? "bg-signal text-white" : "text-slate-body hover:text-slate-ink"
          }`}
        >
          {portal.user.title}
        </button>
      </div>

      <div
        id={tab === "manager" ? "portal-panel-manager" : "portal-panel-user"}
        role="tabpanel"
        aria-labelledby={tab === "manager" ? "portal-tab-manager" : "portal-tab-user"}
        className="mt-6 min-w-0 rounded-card border border-slate-line bg-white p-6 shadow-card"
      >
        {tab === "manager" ? (
          <div>
            <h3 className="text-lg font-bold text-slate-ink">{portal.manager.title}</h3>
            <p className="mt-2 text-sm text-slate-body">{portal.manager.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {(["open", "progress", "waiting", "closed"] as const).map((s, i) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 rounded-pill bg-paper-mute px-3 py-1.5 text-xs font-medium text-slate-ink"
                >
                  <StatusDot kind={s} />
                  {["פתוח", "בטיפול", "ממתין", "נסגר"][i]}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {portal.manager.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-paper-mute p-4">
                  <p className="font-mono text-xl font-bold text-slate-ink">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-mute">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold text-slate-ink">{portal.user.title}</h3>
            <p className="mt-2 text-sm text-slate-body">{portal.user.desc}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-paper-mute p-4">
                <p className="text-xs font-semibold text-slate-ink">סטטוס טיפול</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-body">
                  <StatusDot kind="progress" /> בטיפול
                </p>
              </div>
              <div className="rounded-xl bg-paper-mute p-4">
                <p className="text-xs font-semibold text-slate-ink">עדכונים</p>
                <p className="mt-2 text-sm text-slate-body">היסטוריה אישית מלאה לכל קריאה</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
