"use client";

import { useState } from "react";
import { StatusDot } from "@/components/status-dot";
import { Section, SectionHeading } from "@/components/section";
import { portal } from "@/data/home";
import { siteLabels } from "@/data/contact";

const managerRows = [
  { status: "progress" as const, label: "בטיפול" },
  { status: "waiting" as const, label: "ממתין ללקוח" },
  { status: "closed" as const, label: "נסגר" },
];

export function PortalSection() {
  const [tab, setTab] = useState<"manager" | "user">("manager");

  return (
    <Section tone="mute">
      <SectionHeading title={portal.title} body={portal.body} />

      <div
        className="mt-8 inline-flex w-full max-w-md rounded-pill border border-slate-line bg-white p-1 sm:w-auto"
        role="tablist"
        aria-label="תצוגת פורטל"
      >
        <button
          type="button"
          role="tab"
          id="portal-tab-manager"
          aria-selected={tab === "manager"}
          aria-controls="portal-panel-manager"
          onClick={() => setTab("manager")}
          className={`min-h-10 flex-1 rounded-pill px-4 py-2 text-sm font-semibold transition-colors sm:flex-none sm:px-5 ${
            tab === "manager" ? "bg-signal text-white shadow-sm" : "text-slate-body hover:text-slate-ink"
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
          className={`min-h-10 flex-1 rounded-pill px-4 py-2 text-sm font-semibold transition-colors sm:flex-none sm:px-5 ${
            tab === "user" ? "bg-signal text-white shadow-sm" : "text-slate-body hover:text-slate-ink"
          }`}
        >
          {portal.user.title}
        </button>
      </div>

      <div
        id={tab === "manager" ? "portal-panel-manager" : "portal-panel-user"}
        role="tabpanel"
        aria-labelledby={tab === "manager" ? "portal-tab-manager" : "portal-tab-user"}
        className="mt-6 min-w-0 overflow-hidden rounded-card border border-slate-line bg-white shadow-lift"
      >
        <div className="flex items-center justify-between gap-3 border-b border-slate-line bg-paper-mute/60 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <StatusDot kind="open" pulse />
            <span className="text-xs font-semibold text-slate-ink">{siteLabels.clientPortal}</span>
          </div>
          <span className="font-mono text-[11px] text-slate-mute sm:text-xs">SLA · סטטוס · תיעוד</span>
        </div>

        <div className="p-4 sm:p-6">
          {tab === "manager" ? (
            <div>
              <h3 className="text-lg font-bold text-slate-ink">{portal.manager.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">{portal.manager.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(["open", "progress", "waiting", "closed"] as const).map((s, i) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 rounded-pill border border-slate-line/70 bg-paper-mute px-3 py-1.5 text-xs font-medium text-slate-ink"
                  >
                    <StatusDot kind={s} />
                    {["פתוח", "בטיפול", "ממתין", "נסגר"][i]}
                  </span>
                ))}
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-line">
                <div className="border-b border-slate-line bg-paper-mute/50 px-3 py-2 text-xs font-semibold text-slate-ink">
                  רשימת קריאות
                </div>
                <ul>
                  {managerRows.map((row, i) => (
                    <li
                      key={row.label}
                      className={`flex items-center justify-between gap-3 px-3 py-2.5 ${
                        i !== managerRows.length - 1 ? "border-b border-slate-line/60" : ""
                      }`}
                    >
                      <span className="text-sm text-slate-body">קריאה</span>
                      <span className="flex items-center gap-2">
                        <span className="text-xs text-slate-mute">{row.label}</span>
                        <StatusDot kind={row.status} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold text-slate-ink">{portal.user.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">{portal.user.desc}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-line/70 bg-paper-mute p-4">
                  <p className="text-xs font-semibold text-slate-ink">סטטוס טיפול</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-body">
                    <StatusDot kind="progress" /> בטיפול
                  </p>
                </div>
                <div className="rounded-xl border border-slate-line/70 bg-paper-mute p-4">
                  <p className="text-xs font-semibold text-slate-ink">עדכונים</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">היסטוריה אישית מלאה לכל קריאה</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
