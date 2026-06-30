import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ink / slate base — "operational control" feel
        ink: {
          DEFAULT: "#0B1220",
          soft: "#141C2B",
          line: "#1E2A3D",
        },
        paper: {
          DEFAULT: "#F7F9FC",
          card: "#FFFFFF",
          mute: "#EDF1F7",
        },
        slate: {
          ink: "#0B1220",
          body: "#3A4658",
          mute: "#697586",
          line: "#DCE3ED",
        },
        // Single signal accent — the "monitored / live" blue
        signal: {
          DEFAULT: "#2563EB",
          soft: "#EAF1FF",
          ink: "#1E40AF",
        },
        // Status palette for the dispatch-board motif
        status: {
          open: "#2563EB",
          progress: "#D97706",
          waiting: "#7C3AED",
          closed: "#16A34A",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-heebo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        lift: "0 12px 40px rgba(11,18,32,0.10)",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
