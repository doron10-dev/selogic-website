"use client";

import { StatusProgressRow, type BarTone } from "@/components/home/illustrative-bar";
import { MockupLiveIndicator } from "@/components/mockup-live-indicator";
import { StatusDot } from "@/components/status-dot";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type MiniMockupVariant =
  | "dispatch"
  | "portal"
  | "security"
  | "m365"
  | "network"
  | "monitoring"
  | "support";

/** Visual layout families — same design system, different operational feel. */
type MockLayout = "board" | "queue" | "tiles" | "monitor";

type MockRow = {
  title: string;
  sub?: string;
  badge: string;
  tone: BarTone;
  fillPercent: number;
};

type MockConfig = {
  label: string;
  title: string;
  note?: string;
  rows: MockRow[];
};

const CONFIGS: Record<MiniMockupVariant, MockConfig> = {
  dispatch: {
    label: "DISPATCH BOARD",
    title: "לוח דיספאץ' תפעולי",
    note: "לא נתונים חיים",
    rows: [
      { title: "קריאת שירות", sub: "תקלה בעמדת משתמש", badge: "בטיפול", tone: "orange", fillPercent: 68 },
      { title: "שינוי הרשאות", sub: "Microsoft 365", badge: "ממתין לאישור", tone: "blue", fillPercent: 42 },
      { title: "בדיקת גיבוי", sub: "בקרה תקופתית", badge: "הושלם", tone: "green", fillPercent: 100 },
    ],
  },
  portal: {
    label: "CLIENT PORTAL",
    title: "תצוגת פורטל",
    note: "המחשה בלבד",
    rows: [
      { title: "קריאה פתוחה", badge: "בטיפול", tone: "orange", fillPercent: 62 },
      { title: "משימה מתוכננת", badge: "מתוכנן", tone: "blue", fillPercent: 30 },
      { title: "תיעוד מעודכן", badge: "נשמר", tone: "green", fillPercent: 100 },
    ],
  },
  security: {
    label: "SECURITY FEED",
    title: "פיד אבטחה",
    note: "המחשה בלבד",
    rows: [
      { title: "בקשת הרשאה", sub: "אושרה על ידי מנהל", badge: "הושלם", tone: "green", fillPercent: 100 },
      { title: "עדכון אבטחה", sub: "הותקן בעמדות", badge: "בטיפול", tone: "orange", fillPercent: 55 },
      { title: "התראת גישה", sub: "טופלה ותועדה", badge: "נסגר", tone: "green", fillPercent: 100 },
    ],
  },
  m365: {
    label: "M365 PANEL",
    title: "משתמשים ורישיונות",
    note: "המחשה בלבד",
    rows: [
      { title: "משתמש חדש", sub: "רישיון Business", badge: "פעיל", tone: "green", fillPercent: 100 },
      { title: "הרשאות SharePoint", sub: "ממתין לאישור", badge: "ממתין", tone: "blue", fillPercent: 35 },
      { title: "דואר משותף", sub: "הוקם ותועד", badge: "הושלם", tone: "green", fillPercent: 100 },
    ],
  },
  network: {
    label: "NETWORK STATUS",
    title: "סטטוס רשת",
    note: "המחשה בלבד",
    rows: [
      { title: "קישור ISP", sub: "uptime יציב", badge: "תקין", tone: "green", fillPercent: 100 },
      { title: "Wi-Fi משרדי", sub: "ניטור פעיל", badge: "תקין", tone: "green", fillPercent: 92 },
      { title: "VPN סניף", sub: "בדיקה מתוזמנת", badge: "מתוזמן", tone: "blue", fillPercent: 25 },
    ],
  },
  monitoring: {
    label: "MONITORING",
    title: "ניטור וגיבוי",
    note: "המחשה בלבד",
    rows: [
      { title: "גיבוי לילה", sub: "הושלם בהצלחה", badge: "הושלם", tone: "green", fillPercent: 100 },
      { title: "בדיקת שחזור", sub: "מתוזמנת לשבוע", badge: "מתוזמן", tone: "blue", fillPercent: 40 },
      { title: "ניטור שרת", sub: "ללא חריגות", badge: "תקין", tone: "green", fillPercent: 88 },
    ],
  },
  support: {
    label: "SERVICE DESK",
    title: "קריאות שירות",
    note: "המחשה בלבד",
    rows: [
      { title: "תקלת מדפסת", sub: "קריאה #SL-1042", badge: "בטיפול", tone: "orange", fillPercent: 60 },
      { title: "איפוס סיסמה", sub: "קריאה #SL-1040", badge: "הושלם", tone: "green", fillPercent: 100 },
      { title: "גישה לקובץ", sub: "ממתין למידע", badge: "ממתין", tone: "blue", fillPercent: 20 },
    ],
  },
};

const LAYOUT_BY_VARIANT: Record<MiniMockupVariant, MockLayout> = {
  dispatch: "board",
  security: "board",
  m365: "board",
  support: "queue",
  portal: "tiles",
  monitoring: "monitor",
  network: "monitor",
};

const BADGE_CLASS: Record<BarTone, string> = {
  orange: "theme-status-badge theme-status-badge--orange",
  blue: "theme-status-badge theme-status-badge--blue",
  green: "theme-status-badge theme-status-badge--green",
};

const DOT_KIND: Record<BarTone, "progress" | "waiting" | "closed"> = {
  orange: "progress",
  blue: "waiting",
  green: "closed",
};

function Badge({ tone, children }: { tone: BarTone; children: string }) {
  return (
    <span className={`badge-pill shrink-0 border px-2.5 py-1 text-xs font-semibold ${BADGE_CLASS[tone]}`}>
      {children}
    </span>
  );
}

export function MiniMockup({ variant }: { variant: MiniMockupVariant }) {
  const { ref, inView } = useInViewOnce();
  const config = CONFIGS[variant];
  const layout = LAYOUT_BY_VARIANT[variant];

  return (
    <div ref={ref} className="theme-mockup-shell">
      <div className="theme-mockup-inner">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-2">
            <MockupLiveIndicator active={inView} />
            <div>
              <p className="theme-text-muted text-[10px] font-semibold uppercase tracking-[0.18em]">{config.label}</p>
              <h2 className="font-display theme-text-heading mt-1 text-base font-bold sm:text-lg">{config.title}</h2>
            </div>
          </div>
          {config.note ? <span className="theme-badge-note">{config.note}</span> : null}
        </div>

        {layout === "board" ? <BoardBody rows={config.rows} inView={inView} /> : null}
        {layout === "queue" ? <QueueBody rows={config.rows} /> : null}
        {layout === "tiles" ? <TilesBody rows={config.rows} inView={inView} /> : null}
        {layout === "monitor" ? <MonitorBody rows={config.rows} /> : null}
      </div>
    </div>
  );
}

/** Managed IT / solutions — progress-driven control board. */
function BoardBody({ rows, inView }: { rows: MockRow[]; inView: boolean }) {
  return (
    <div className="space-y-3">
      {rows.map((row, index) => (
        <StatusProgressRow
          key={row.title}
          title={row.title}
          sub={row.sub}
          badge={row.badge}
          tone={row.tone}
          fillPercent={row.fillPercent}
          animateFill={inView}
          fillDelayMs={index * 160}
        />
      ))}
    </div>
  );
}

/** Technical / remote support — service-desk queue. */
function QueueBody({ rows }: { rows: MockRow[] }) {
  return (
    <div className="space-y-2">
      <p className="theme-text-muted mb-1 text-[11px] font-medium">{rows.length} קריאות בתור</p>
      {rows.map((row, index) => (
        <div key={row.title} className="theme-status-row flex items-center gap-3">
          <span className="theme-step-dot h-7 w-7 text-xs" aria-hidden="true">
            {index + 1}
          </span>
          <div className="min-w-0 flex-1 text-right">
            <p className="theme-text-heading text-sm font-semibold">{row.title}</p>
            {row.sub ? <p className="theme-text-muted mt-0.5 text-xs">{row.sub}</p> : null}
          </div>
          <Badge tone={row.tone}>{row.badge}</Badge>
        </div>
      ))}
    </div>
  );
}

/** Client portal — visibility status tiles. */
function TilesBody({ rows, inView }: { rows: MockRow[]; inView: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
      {rows.map((row) => (
        <div key={row.title} className="theme-inner-card flex flex-col items-center gap-2 text-center">
          <Badge tone={row.tone}>{row.badge}</Badge>
          <p className="theme-text-heading text-sm font-semibold leading-snug">{row.title}</p>
          <span
            className={`status-dot ${row.tone === "green" ? "bg-status-closed" : row.tone === "blue" ? "bg-status-waiting" : "bg-status-progress"} ${
              inView && row.tone === "orange" ? "animate-pulse-dot" : ""
            }`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

/** Monitoring / network — alerts & readouts feed. */
function MonitorBody({ rows }: { rows: MockRow[] }) {
  return (
    <div className="space-y-2">
      {rows.map((row) => (
        <div key={row.title} className="theme-status-row flex items-center gap-3">
          <StatusDot kind={DOT_KIND[row.tone]} pulse={row.tone === "orange"} />
          <div className="min-w-0 flex-1 text-right">
            <p className="theme-text-heading text-sm font-semibold">{row.title}</p>
            {row.sub ? <p className="theme-text-muted mt-0.5 text-xs">{row.sub}</p> : null}
          </div>
          <span className="theme-text-muted shrink-0 font-mono text-xs tabular-nums">{row.fillPercent}%</span>
          <Badge tone={row.tone}>{row.badge}</Badge>
        </div>
      ))}
    </div>
  );
}

export function resolveMockupVariant(path: string): MiniMockupVariant {
  if (path.includes("cybersecurity")) return "security";
  if (path.includes("microsoft-365")) return "m365";
  if (path.includes("networks-and-communication")) return "network";
  if (path.includes("backup-and-recovery")) return "monitoring";
  if (path.includes("information-systems")) return "monitoring";
  if (path.includes("client-portal")) return "portal";
  if (path.includes("technical-support") || path.includes("remote-support")) return "support";
  if (path.includes("managed-it")) return "dispatch";
  return "dispatch";
}
