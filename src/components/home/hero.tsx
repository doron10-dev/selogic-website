import { Button } from "@/components/button";
import { MetricValue } from "@/components/metric-value";
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

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        {/* Copy */}
        <div className="reveal">
          <span className="eyebrow mb-4">
            <StatusDot kind="open" pulse />
            {hero.eyebrow}
          </span>
          <h1 className="text-3xl font-extrabold leading-[1.1] text-slate-ink sm:text-4xl md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-body sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hero.highlights.map((h) => (
              <div key={h.title} className="border-t border-slate-line pt-3">
                <p className="text-sm font-semibold text-slate-ink">{h.title}</p>
                <p className="mt-0.5 text-xs text-slate-mute">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature: live dispatch board */}
        <div className="reveal" style={{ animationDelay: "120ms" }}>
          <DispatchBoard />
        </div>
      </div>
    </section>
  );
}

function DispatchBoard() {
  return (
    <div className="rounded-card border border-slate-line bg-white p-5 shadow-lift">
      {/* Board header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StatusDot kind="closed" pulse />
          <span className="text-sm font-semibold text-slate-ink">לוח קריאות חי</span>
        </div>
        <span className="font-mono text-xs text-slate-mute">SLA · בזמן אמת</span>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-2 gap-3">
        {heroBoard.metrics.map((m) => (
          <div key={m.label} className="rounded-xl bg-paper-mute p-3">
            <MetricValue main={m.main} size="lg" />
            <p className="mt-1 text-xs font-medium text-slate-ink">{m.label}</p>
            {m.sub ? <p className="text-[11px] text-slate-mute">{m.sub}</p> : null}
          </div>
        ))}
      </div>

      {/* Ticket list */}
      <div className="mt-4 rounded-xl border border-slate-line">
        <div className="flex items-center justify-between border-b border-slate-line px-3 py-2.5">
          <span className="text-xs font-semibold text-slate-ink">רשימת קריאות</span>
          <span className="rounded-pill bg-signal-soft px-2 py-0.5 text-[11px] font-medium text-signal-ink">
            קריאה חדשה
          </span>
        </div>
        <ul>
          {heroBoard.tickets.map((t, i) => (
            <li
              key={`${t.label}-${i}`}
              className={`flex items-center justify-between px-3 py-2.5 ${
                i !== heroBoard.tickets.length - 1 ? "border-b border-slate-line/60" : ""
              }`}
            >
              <span className="text-sm text-slate-body">קריאה</span>
              <span className="flex items-center gap-2">
                <span className="text-xs text-slate-mute">{t.label}</span>
                <StatusDot kind={t.status as "progress" | "waiting" | "closed"} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
