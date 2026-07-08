import { Eye } from "lucide-react";
import { Section, SectionHeading, SectionAnchors } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import type { ServicePageContent } from "@/types/service-page";

type SignatureProps = {
  content: ServicePageContent;
  className?: string;
  id?: string;
  anchors?: string[];
};

const ROW_STATUS = ["open", "progress", "closed", "closed", "waiting", "closed"] as const;

/**
 * Client portal signature: a client-facing visibility panel + who-sees-what notes.
 * Large status panel (clientGains rows) with manager/user view side notes.
 */
export function PortalVisibilitySection({ content, className = "", id = "pain", anchors = [] }: SignatureProps) {
  const rows = content.clientGains.items;
  const views = content.whatWeDo.items.slice(0, 2);

  return (
    <Section tone="tint" id={id} className={className}>
      <SectionAnchors ids={anchors} />
      <SectionHeading title={content.clientGains.title} body={content.clientGains.body} />

      <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-[1.5fr_0.5fr] lg:gap-6">
        <div className="theme-card overflow-hidden">
          <div
            className="flex items-center justify-between gap-3 border-b px-5 py-3"
            style={{
              borderColor: "var(--theme-border)",
              backgroundColor: "color-mix(in srgb, var(--theme-surface-tint) 55%, transparent)",
            }}
          >
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <span className="theme-text-heading text-sm font-semibold">תצוגת פורטל</span>
              <span className="theme-text-muted font-mono text-[11px] uppercase tracking-[0.16em]">PORTAL</span>
            </div>
            <span className="theme-badge-note">המחשה</span>
          </div>
          <ul>
            {rows.map((item, index) => (
              <li key={item.title} className={`flex items-center gap-3 px-5 py-3.5 ${index > 0 ? "theme-divider" : ""}`}>
                <StatusDot kind={ROW_STATUS[index % ROW_STATUS.length]} pulse={index === 0} />
                <div className="min-w-0 flex-1">
                  <p className="theme-text-heading text-sm font-semibold">{item.title}</p>
                  <p className="theme-text-muted mt-0.5 text-xs leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {views.map((view) => (
            <div key={view.title} className="theme-inner-card">
              <p className="theme-text-heading text-sm font-semibold">{view.title}</p>
              <p className="theme-text-muted mt-1 text-sm leading-relaxed">{view.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
