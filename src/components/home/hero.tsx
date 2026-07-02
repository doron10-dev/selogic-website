import { Button } from "@/components/button";
import { StatusDot } from "@/components/status-dot";
import { hero, heroBoard } from "@/data/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-line bg-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(220,227,237,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,227,237,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 70% 0%, black, transparent 70%)",
        }}
      />

      <div className="container-page relative grid items-center gap-8 py-10 sm:gap-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="reveal min-w-0">
          <span className="eyebrow mb-3 sm:mb-4">
            <StatusDot kind="open" pulse />
            {hero.eyebrow}
          </span>
          <h1 className="max-w-xl text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-slate-ink sm:text-4xl sm:leading-tight lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-body sm:mt-5 sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button href={hero.primaryCta.href} variant="primary" className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Button>
            <Button href={hero.tertiaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {hero.tertiaryCta.label}
            </Button>
          </div>
        </div>

        <div className="reveal min-w-0" style={{ animationDelay: "120ms" }}>
          <DispatchBoard />
        </div>
      </div>
    </section>
  );
}

function DispatchBoard() {
  return (
    <div className="rounded-card border border-slate-line bg-white p-4 shadow-card sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-line/70 pb-3">
        <div className="flex items-center gap-2">
          <StatusDot kind="open" />
          <span className="text-sm font-semibold text-slate-ink">{heroBoard.title}</span>
        </div>
        <span className="text-[11px] font-medium text-slate-mute sm:text-xs">{heroBoard.note}</span>
      </div>

      <ul className="space-y-2">
        {heroBoard.statusRows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between rounded-xl border border-slate-line/60 bg-paper-mute px-3 py-2.5"
          >
            <span className="text-sm text-slate-body">קריאת שירות</span>
            <span className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-ink">{row.label}</span>
              <StatusDot kind={row.status} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
