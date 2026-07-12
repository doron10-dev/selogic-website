import { ChevronLeft, Gauge, Headset, Server, Users, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/section";

type NodeKey = "people" | "systems" | "service" | "control";

export type BusinessControlNode = {
  key: NodeKey;
  title: string;
  body: string;
};

type BusinessControlMapProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title: string;
  body?: string;
  nodes: BusinessControlNode[];
  closing?: string;
  className?: string;
};

const NODE_ICON: Record<NodeKey, LucideIcon> = {
  people: Users,
  systems: Server,
  service: Headset,
  control: Gauge,
};

/**
 * Homepage signature: Selogic's operating model as one left-flowing map
 * (RTL) — people → systems → service → control. Icon-led pillars on a shared
 * rail, ending in an emphasised "control" node (the managerial vantage point).
 * Intentionally not a dashboard, board, or portal panel: no bars, no status
 * dots, no fake metrics — it reads as a company model, not a product screen.
 */
export function BusinessControlMap({
  id,
  tone = "tint",
  eyebrow,
  title,
  body,
  nodes,
  closing,
  className = "py-12 sm:py-16 lg:py-20",
}: BusinessControlMapProps) {
  return (
    <Section tone={tone} id={id} className={className}>
      <SectionHeading eyebrow={eyebrow} title={title} body={body} />

      <ol className="mt-10 flex flex-col gap-4 lg:mt-14 lg:flex-row lg:items-stretch lg:gap-2">
        {nodes.map((node, index) => {
          const Icon = NODE_ICON[node.key];
          const isControl = node.key === "control";
          const isLast = index === nodes.length - 1;

          return (
            <li key={node.key} className="contents lg:flex lg:flex-1 lg:items-stretch">
              <div
                className={`theme-card relative flex flex-1 flex-col gap-3 p-5 sm:p-6 ${
                  isControl ? "ring-1 ring-blue-500/40" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isControl
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="theme-text-muted text-[11px] font-semibold tracking-[0.18em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="theme-text-heading text-lg font-semibold">{node.title}</h3>
                  <p className="theme-text-muted mt-1.5 text-sm leading-relaxed">{node.body}</p>
                </div>
              </div>

              {!isLast ? (
                <div
                  className="flex items-center justify-center py-1 lg:px-1 lg:py-0"
                  aria-hidden="true"
                >
                  <ChevronLeft className="theme-text-muted hidden h-5 w-5 lg:block" />
                  <span className="theme-text-muted text-lg lg:hidden">↓</span>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      {closing ? (
        <p className="theme-text-body mt-8 text-center text-[15px] leading-relaxed">{closing}</p>
      ) : null}
    </Section>
  );
}
