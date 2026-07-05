"use client";

import type { CSSProperties } from "react";

/**
 * Live IT-operations topology: a central monitoring hub connected to every
 * Selogic service domain, with data pulses flowing from each endpoint into
 * the hub. Pure SVG + CSS — crisp at any size, light on every device, and
 * fully static under prefers-reduced-motion.
 */
const CX = 300;
const CY = 150;
const RX = 245;
const RY = 112;

const NODES = [
  { label: "משתמשים", angle: -150 },
  { label: "Microsoft 365", angle: -90 },
  { label: "ענן", angle: -30 },
  { label: "אבטחת מידע", angle: 30 },
  { label: "גיבוי", angle: 90 },
  { label: "רשתות", angle: 150 },
].map((n) => {
  const rad = (n.angle * Math.PI) / 180;
  return {
    ...n,
    x: CX + RX * Math.cos(rad),
    y: CY + RY * Math.sin(rad),
    lx: CX + (RX + 42) * Math.cos(rad),
    ly: CY + (RY + 34) * Math.sin(rad),
  };
});

export function NetworkTopology({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 600 300"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
      >
        <defs>
          <radialGradient id="topo-hub" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stopColor="#c4b5fd" />
            <stop offset="0.6" stopColor="#818cf8" />
            <stop offset="1" stopColor="#4f46e5" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {NODES.map((n) => (
          <line
            key={`line-${n.label}`}
            x1={CX}
            y1={CY}
            x2={n.x}
            y2={n.y}
            className="topo-line"
          />
        ))}

        {/* Flowing data pulses (endpoint → hub) */}
        {NODES.map((n, i) => {
          const style = {
            "--dx": `${CX - n.x}px`,
            "--dy": `${CY - n.y}px`,
            animationDelay: `${i * 0.55}s`,
          } as CSSProperties;
          const style2 = {
            "--dx": `${CX - n.x}px`,
            "--dy": `${CY - n.y}px`,
            animationDelay: `${i * 0.55 + 1.7}s`,
          } as CSSProperties;
          return (
            <g key={`dots-${n.label}`}>
              <circle cx={n.x} cy={n.y} r={2.6} className="topo-dot" style={style} />
              <circle cx={n.x} cy={n.y} r={2.2} className="topo-dot" style={style2} />
            </g>
          );
        })}

        {/* Endpoint nodes + labels */}
        {NODES.map((n) => (
          <g key={`node-${n.label}`}>
            <circle cx={n.x} cy={n.y} r={11} className="topo-node-glow" />
            <circle cx={n.x} cy={n.y} r={5} className="topo-node" />
            <circle cx={n.x} cy={n.y} r={5} className="topo-node-ring" />
            <text x={n.lx} y={n.ly + 4} textAnchor="middle" className="topo-label">
              {n.label}
            </text>
          </g>
        ))}

        {/* Central monitoring hub */}
        <g>
          <circle cx={CX} cy={CY} r={26} className="topo-ring" />
          <circle cx={CX} cy={CY} r={26} className="topo-ring" style={{ animationDelay: "1.4s" }} />
          <circle cx={CX} cy={CY} r={27} fill="url(#topo-hub)" />
          <text x={CX} y={CY + 4} textAnchor="middle" className="topo-hub-label">
            Selogic
          </text>
        </g>
      </svg>
    </div>
  );
}
