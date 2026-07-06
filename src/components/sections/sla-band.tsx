import { Section, SectionHeading } from "@/components/section";
import { StatusDot } from "@/components/status-dot";
import { SlaTile } from "@/components/sla-tile";
import type { SlaItem } from "@/types/service-page";

type SlaBandProps = {
  title: string;
  body: string;
  items: SlaItem[];
  className?: string;
  id?: string;
};

const statusAccent: Record<NonNullable<SlaItem["status"]>, string> = {
  open: "from-blue-500/20 to-transparent ring-blue-500/25",
  progress: "from-amber-500/20 to-transparent ring-amber-500/25",
  waiting: "from-indigo-400/20 to-transparent ring-indigo-400/25",
  closed: "from-emerald-500/20 to-transparent ring-emerald-500/25",
};

function SlaBandCard({ item }: { item: SlaItem }) {
  const status = item.status ?? "open";
  const accent = statusAccent[status];

  if (!item.badge) {
    return (
      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 sm:p-6">
        <SlaTile item={item} invert size="md" />
      </div>
    );
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-b ${accent} p-5 ring-1 ring-inset transition duration-200 hover:border-slate-600 hover:bg-slate-900/80 sm:p-6`}
    >
      <div className="pointer-events-none absolute -end-6 -top-6 h-20 w-20 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
      <div className="relative flex flex-col items-center text-center sm:items-start sm:text-start">
        <StatusDot kind={status} pulse={status === "open"} />
        <p className="font-display mt-4 text-xl font-bold leading-tight text-white sm:text-2xl">{item.badge}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.label}</p>
        {item.sub ? <p className="mt-1.5 text-xs text-slate-400">{item.sub}</p> : null}
      </div>
    </article>
  );
}

export function SlaBand({ title, body, items, className = "", id = "sla" }: SlaBandProps) {
  return (
    <Section tone="dark" id={id} className={`relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.12),_transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeading title={title} body={body} invert />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-4">
          {items.map((item) => (
            <SlaBandCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
