"use client";

import { StatusProgressRow, type BarTone } from "@/components/home/illustrative-bar";
import { MockupLiveIndicator } from "@/components/mockup-live-indicator";
import { Section, SectionHeading, type SectionTone } from "@/components/section";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import type { PortalDashboardContent } from "@/data/pages/client-portal";

const BADGE_CLASS: Record<BarTone, string> = {
  orange: "theme-status-badge theme-status-badge--orange",
  blue: "theme-status-badge theme-status-badge--blue",
  green: "theme-status-badge theme-status-badge--green",
};

function Badge({ tone, children }: { tone: BarTone; children: string }) {
  return (
    <span className={`badge-pill shrink-0 border px-2.5 py-1 text-xs font-semibold ${BADGE_CLASS[tone]}`}>
      {children}
    </span>
  );
}

/**
 * Client-portal signature section: a single dashboard composition (ticket queue +
 * ticket detail + lifecycle + updates feed + manager/user views) that makes the
 * page read as a real visibility surface rather than another benefits grid.
 * All content is illustrative and labeled as such.
 */
export function PortalDashboard({
  id = "see",
  tone = "white",
  content,
}: {
  id?: string;
  tone?: SectionTone;
  content: PortalDashboardContent;
}) {
  const { ref, inView } = useInViewOnce();

  return (
    <Section tone={tone} id={id}>
      <SectionHeading eyebrow={content.eyebrow} title={content.title} body={content.body} />

      <div ref={ref} className="theme-mockup-shell mt-8 lg:mt-10">
        <div className="theme-mockup-inner">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <MockupLiveIndicator active={inView} />
              <p className="theme-text-muted text-[10px] font-semibold uppercase tracking-[0.18em]">
                CLIENT PORTAL
              </p>
            </div>
            <span className="theme-badge-note">המחשה בלבד</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">
            <div className="min-w-0">
              <p className="theme-text-heading mb-3 text-sm font-semibold">{content.queueTitle}</p>
              <div className="space-y-3">
                {content.rows.map((row, index) => (
                  <StatusProgressRow
                    key={row.title}
                    title={row.title}
                    badge={row.badge}
                    tone={row.tone}
                    fillPercent={row.fillPercent}
                    animateFill={inView}
                    fillDelayMs={index * 140}
                  />
                ))}
              </div>
            </div>

            <div className="theme-inner-card flex min-w-0 flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <p className="theme-text-heading text-sm font-semibold leading-snug">{content.ticket.title}</p>
                <Badge tone={content.ticket.tone}>{content.ticket.badge}</Badge>
              </div>
              <dl className="space-y-2">
                {content.ticket.fields.map((field) => (
                  <div
                    key={field.label}
                    className="border-b pb-2 last:border-0 last:pb-0"
                    style={{ borderColor: "var(--theme-border)" }}
                  >
                    <dt className="theme-text-muted text-[11px] font-medium">{field.label}</dt>
                    <dd className="theme-text-body mt-0.5 text-sm leading-snug">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-5">
            <p className="theme-text-muted mb-2 text-[11px] font-medium">{content.lifecycleTitle}</p>
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {content.lifecycle.map((step, index) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span
                    className="badge-pill border px-2.5 py-1 text-[11px] font-medium theme-text-body"
                    style={{ borderColor: "var(--theme-border)" }}
                  >
                    {step}
                  </span>
                  {index < content.lifecycle.length - 1 ? (
                    <span className="theme-text-muted text-xs" aria-hidden="true">
                      ←
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-5">
            <p className="theme-text-muted mb-2 text-[11px] font-medium">{content.historyTitle}</p>
            <ul className="rounded-xl border" style={{ borderColor: "var(--theme-border)" }}>
              {content.history.map((item, index) => (
                <li
                  key={item.label}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 ${index > 0 ? "theme-divider" : ""}`}
                >
                  <span className="theme-text-body text-xs">{item.label}</span>
                  <span className="theme-text-muted shrink-0 text-[11px]">{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {content.views.map((view) => (
          <div key={view.role} className="theme-card p-5">
            <p className="theme-text-heading font-semibold">{view.role}</p>
            <p className="theme-text-muted mt-1 text-sm leading-relaxed">{view.body}</p>
          </div>
        ))}
      </div>

      <p className="theme-text-muted mt-6 text-sm leading-relaxed">{content.disclaimer}</p>
    </Section>
  );
}
