import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Helix brand palette — deep indigo / violet with electric accent
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        accent: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Modern fluid type scale
        "display-2xl": ["clamp(3.75rem, 6vw, 5.25rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-xl": ["clamp(3rem, 5vw, 4.25rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.25rem)", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" }],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "radial-spotlight":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.25), transparent 60%)",
        "hero-gradient":
          "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4f46e5 70%, #7c3aed 100%)",
        "aurora-gradient":
          "conic-gradient(from 180deg at 50% 50%, #4f46e5 0deg, #7c3aed 90deg, #6366f1 180deg, #4338ca 270deg, #4f46e5 360deg)",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
      },
      boxShadow: {
        "glow-brand": "0 0 40px -10px rgba(99,102,241,0.5)",
        "glow-accent": "0 0 40px -10px rgba(139,92,246,0.5)",
        "card": "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.08)",
        "card-lg": "0 1px 2px rgba(15,23,42,0.05), 0 24px 48px -12px rgba(15,23,42,0.15)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "shimmer": "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;