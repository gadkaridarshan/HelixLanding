// helix: lib/brand.ts
/**
 * @helix:story USER-986000
 *
 * Centralized Helix brand tokens — colors, typography, spacing, and radius
 * scales used by section components throughout the landing surface.
 *
 * This module is the single source of truth for *named* brand values that
 * are consumed in TypeScript (gradients, glow shadows, copy strings,
 * analytics labels). CSS-side equivalents are declared in
 * `app/globals.css` under `@theme` so design tokens stay synchronized
 * across stylesheets and component code.
 */

export const brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents.",
  description:
    "Plan, write, and ship code in atomic, reviewable steps. Helix is the AI coding orchestrator that respects your files, your conventions, and your reviewers.",
  url: "https://helix-ai-orchestrator.vercel.app",
  twitter: "@helix",
} as const;

export const colors = {
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
  brand: {
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
  },
  accent: {
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
  },
  aurora: {
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
  },
} as const;

export const radius = {
  xs: "0.25rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

export const fontFamily = {
  sans: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  display:
    "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
} as const;

export const spacing = {
  sectionY: "clamp(4rem, 8vw, 7rem)",
  containerPadding: "clamp(1rem, 3vw, 2rem)",
  maxContentWidth: "80rem",
} as const;

/**
 * Gradient presets — referenced by Hero, FinalCTA, and section
 * dividers. The strings are CSS-ready so they can be dropped straight
 * into `background-image` inline styles or className utilities.
 */
export const gradients = {
  brand:
    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
  brandSoft:
    "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.12) 60%, rgba(34,211,238,0.06))",
  textBrand:
    "linear-gradient(90deg, #a5b4fc 0%, #c4b5fd 50%, #c7d2fe 100%)",
  surfaceRadial:
    "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 10%, rgba(139,92,246,0.16), transparent 60%)",
} as const;

export type BrandColors = typeof colors;
export type BrandRadius = typeof radius;
export type BrandFontFamily = typeof fontFamily;