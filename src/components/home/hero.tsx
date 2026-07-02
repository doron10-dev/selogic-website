import { Button } from "@/components/button";
import { StatusDot } from "@/components/status-dot";
import { hero, heroBoard } from "@/data/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-line bg-paper">
      {/* Subtle grid backdrop — the "monitored environment" texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(220,227,237,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,227,237,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 70% 0%, black, transparent 70%)",
        }}
      />

      {/* Mobile: stacked (headline → text → CTAs → compact board). Desktop: two columns. */}
      <div className="container-page relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-12">
        {/* Copy */}
        <div className="reveal">
          <span className="eyebrow mb-4">
            <StatusDot kind="open" pulse />
            {hero.eyebrow}
          </span>
          <h1 className="text-balance text-3xl font-extrabold leading-[1.15] text-slate-ink sm:text-4xl md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-body sm:text-lg">
            {hero.body}
          </p>

          {/* CTAs — primary + support, with "all services" as a clear tertiary link */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={hero.primaryCta.href} variant="primary" className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Button>
            <Button href={hero.servicesCta.href} variant="ghost-ink" className="w-full sm:w-auto">
              {hero.servicesCta.label}
            </Button>
          </div>
        </div>

        {/* Signature: compact dispatch board (illustrative) */}
        <div className="reveal" style={{ animationDelay: "120ms" }}>
          <DispatchBoard />
        </div>
      </div>
    </section>
  );
}

function DispatchBoard() {
  return (
    <div className="mx-auto w-full max-w-md rounded-card border border-slate-line bg-white p-4 shadow-lift sm:p-5">
      {/* Board header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StatusDot kind="open" pulse />
          <span className="text-sm font-semibold text-slate-ink">{heroBoard.title}</span>
        </div>
        <span className="rounded-pill bg-paper-mute px-2.5 py-1 font-mono text-[11px] text-slate-mute">
          {heroBoard.note}
        </span>
      </div>

      {/* Status rows */}
      <ul className="overflow-hidden rounded-xl border border-slate-line">
        {heroBoard.rows.map((row, i) => (
          <li
            key={row.id}
            className={`flex items-center justify-between px-3 py-3 ${
              i !== heroBoard.rows.length - 1 ? "border-b border-slate-line/60" : ""
            }`}
          >
            <span className="flex items-center gap-2.5">
              <StatusDot kind={row.kind} />
              <span className="text-sm font-medium text-slate-ink">{row.label}</span>
            </span>
            <span className="font-mono text-xs text-slate-mute">{row.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
