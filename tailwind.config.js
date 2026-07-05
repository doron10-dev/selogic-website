const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern-gradient accent: remap the site-wide `blue-*` utilities to
        // the indigo/violet family so every accent (buttons, links, eyebrows,
        // icon chips, active states) matches the hero palette in both themes.
        blue: colors.indigo,
        ink: {
          DEFAULT: "#020617",
          soft: "#0f172a",
          line: "#334155",
        },
        paper: {
          DEFAULT: "#ffffff",
          card: "#ffffff",
          mute: "#f8fafc",
        },
        slate: {
          ink: "#020617",
          body: "#334155",
          mute: "#475569",
          line: "#e2e8f0",
        },
        signal: {
          DEFAULT: "#6366f1",
          soft: "#eef2ff",
          ink: "#4f46e5",
        },
        cta: {
          DEFAULT: "#ea580c",
          hover: "#c2410c",
          soft: "#fff7ed",
        },
        status: {
          open: "#2563eb",
          progress: "#b45309",
          waiting: "#6366f1",
          closed: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-hebrew)", "system-ui", "sans-serif"],
        display: ["var(--font-noto-sans-hebrew)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "1rem",
        panel: "1.5rem",
        shell: "2rem",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(2, 6, 23, 0.04), 0 6px 20px rgba(2, 6, 23, 0.06)",
        lift: "0 16px 48px rgba(2, 6, 23, 0.12)",
        hero: "0 24px 64px rgba(37, 99, 235, 0.12), 0 8px 24px rgba(2, 6, 23, 0.08)",
        nav: "0 1px 2px rgba(2, 6, 23, 0.05)",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};
