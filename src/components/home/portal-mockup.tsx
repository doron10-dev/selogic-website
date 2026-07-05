"use client";

import Link from "next/link";
import { StatusProgressRow } from "@/components/home/illustrative-bar";
import { MockupLiveIndicator } from "@/components/mockup-live-indicator";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { portal } from "@/data/home";

function PortalHighlightPanel({
  eyebrow,
  body,
}: {
  eyebrow: string;
  body: string;
}) {
  const metrics = [
    { value: "4 שע׳", label: "יעד תגובה" },
    { value: "100%", label: "תיעוד מלא" },
    { value: "52", label: "רשומות החודש" },
  ];

  const history: Array<{ label: string; tags: string[] }> = [
    { label: "דוח מנהל שבועי", tags: ["שבועי", "אתמול"] },
    { label: "ייצוא היסטוריית קריאות", tags: ["CSV", "PDF"] },
    { label: "חיפוש בתיעוד", tags: ["52 תוצאות"] },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-[1.25rem] bg-slate-950 px-4 py-4 sm:px-5 sm:py-5">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display text-base font-bold leading-tight text-blue-400 sm:text-lg">{eyebrow}</p>
          <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-slate-400">
            המחשה בלבד
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
      </div>

      <div className="grid grid-cols-1 gap-2 min-[28rem]:grid-cols-3 sm:gap-2">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-slate-800 bg-slate-900/70 px-2 py-2.5 text-center sm:px-3 sm:py-3"
          >
            <p className="font-display text-base font-semibold text-white sm:text-lg">{metric.value}</p>
            <p className="mt-1 text-[10px] leading-snug text-slate-400 sm:text-[11px]">{metric.label}</p>
          </div>
        ))}
      </div>

      <ul className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-3">
        {history.map((item) => (
          <li
            key={item.label}
            className="flex flex-col gap-2 border-b border-slate-800/80 pb-2 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-xs font-medium leading-snug text-slate-200">{item.label}</span>
            <span className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PortalMockup() {
  const { ref, inView } = useInViewOnce();
  const { mock } = portal;

  return (
    <div ref={ref} className="theme-mockup-shell">
      <div className="theme-mockup-inner">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-2">
            <MockupLiveIndicator active={inView} />
            <div className="min-w-0">
              <p className="theme-text-muted text-[10px] font-semibold uppercase tracking-[0.18em]">{mock.label}</p>
              <h3 className="font-display theme-text-heading mt-1 text-lg font-bold">{mock.title}</h3>
            </div>
          </div>
          <div className="flex max-w-full flex-wrap items-center gap-2">
            {mock.note ? <span className="theme-badge-note">{mock.note}</span> : null}
            <Link href={mock.action.href} className="theme-mockup-action">
              {mock.action.label}
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="min-w-0 space-y-3">
            {mock.rows.map((row, index) => (
              <StatusProgressRow
                key={row.label}
                title={row.label}
                badge={row.badge}
                tone={row.tone}
                fillPercent={row.fillPercent}
                animateFill={inView}
                fillDelayMs={index * 140}
              />
            ))}
          </div>

          <PortalHighlightPanel eyebrow={mock.highlight.eyebrow} body={mock.highlight.body} />
        </div>
      </div>
    </div>
  );
}
