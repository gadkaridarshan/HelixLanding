// helix: lib/theme.ts
/**
 * @helix:story USER-176000
 *
 * Theme tokens — the single source of truth for the Helix design
 * system. Consumed by `app/globals.css` (via the `@theme` block) and
 * by any component that needs to reference a token directly (e.g.
 * SVGs that take hex colors as props).
 *
 * Naming and scale mirror Tailwind v4's CSS-first `@theme` model so
 * tokens flow straight through to utility classes without any extra
 * config. Anything that lives here is intentionally available as a
 * CSS variable AND as a TypeScript constant for code-side use.
 *
 * Conventions:
 *   • Color ramps are 50 → 950 where 50 = tint, 950 = deep shade.
 *   • Spacing follows Tailwind's 4px grid (already provided by
 *     Tailwind; we only expose semantic aliases here).
 *   • Radii are intentionally generous — Helix leans soft, modern,
 *     "glassmorphic" — but never so round that cards lose structure.
 *   • Shadows are tuned for dark, gradient-heavy backgrounds; the
 *     default Tailwind shadows would be too subtle / too dark.
 *   • Type scale mirrors a 1.250 (major third) modular ratio with a
 *     explicit display sizes for the Hero headline.
 */
import { brand } from "./brand";

/* ------------------------------------------------------------------ */
/* Color palette                                                       */
/* ------------------------------------------------------------------ */

/**
 * Ink — the dark-mode-first neutral ramp. Used for backgrounds,
 * surfaces, borders, and primary text.
 */
export const ink = {
  50: "#f5f7fb",
  100: "#e8ecf4",
  200: "#cdd5e3",
  300: "#a3aec5",
  400: "#7380a0",
  500: "#525d7c",
  600: "#3a4360",
  700: "#272f47",
  800: "#171c2c",
  900: "#0b0f1c",
  950: "#05070f",
} as const;

/**
 * Brand — the primary Helix cyan ramp. Drives the dominant brand
 * color, primary CTAs, focus rings, and the cyan lobe of every
 * gradient on the page.
 */
export const brand = {
  50: "#ecfeff",
  100: "#cffafe",
  200: "#a5f3fc",
  300: "#67e8f9",
  400: "#22d3ee",
  500: "#06b6d4",
  600: "#0891b2",
  700: "#0e7490",
  800: "#155e75",
  900: "#164e63",
  950: "#083344",
} as const;

/**
 * Accent — the secondary violet ramp. Drives the violet lobe of
 * every gradient, secondary highlights, and "code" / orbital accents.
 */
export const accent = {
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
  950: "#2e1065",
} as const;

/**
 * Aurora — a magenta → pink → amber ramp reserved for decorative
 * highlights, hero glows, and stats icons. Kept sparingly so it
 * reads as "energy" rather than noise.
 */
export const aurora = {
  50: "#fff1f2",
  100: "#ffe4e6",
  200: "#fecdd3",
  300: "#fda4af",
  400: "#fb7185",
  500: "#f43f5e",
  600: "#e11d48",
  700: "#be123c",
  800: "#9f1239",
  900: "#881337",
  950: "#4c0519",
} as const;

/**
 * Semantic color shortcuts — the resolved "what does this color mean"
 * references so components never reach into the raw ramps unless they
 * need an explicit shade.
 */
export const semantic = {
  background: ink[950],
  surface: ink[900],
  surfaceRaised: ink[800],
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",
  text: ink[50],
  textMuted: ink[300],
  textSubtle: ink[400],
  brand: brand[400],
  brandHover: brand[300],
  accent: accent[400],
  accentHover: accent[300],
  aurora: aurora[400],
} as const;

/* ------------------------------------------------------------------ */
/* Typography                                                          */
/* ------------------------------------------------------------------ */

/**
 * Font family stacks. The actual `next/font` family names are
 * injected at runtime via CSS variables (`--font-inter`,
 * `--font-jetbrains`); these constants define the rest of the
 * fallback chain.
 */
export const fontFamilies = {
  sans: `var(--font-inter), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  mono: `var(--font-jetbrains), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  display: `var(--font-inter), ui-sans-serif, system-ui, sans-serif`,
} as const;

/**
 * Type scale — a modular 1.250 (major third) scale anchored to a 16px
 * base, with extra display sizes for the hero headline and tight
 * tracking values for headings.
 */
export const fontSizes = {
  xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.01em" }],
  sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.005em" }],
  base: ["1rem", { lineHeight: "1.625rem", letterSpacing: "0" }],
  lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.005em" }],
  xl: ["1.25rem", { lineHeight: "1.875rem", letterSpacing: "-0.01em" }],
  "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.015em" }],
  "3xl": ["1.875rem", { lineHeight: "2.375rem", letterSpacing: "-0.02em" }],
  "4xl": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.025em" }],
  "5xl": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.03em" }],
  "6xl": ["3.75rem", { lineHeight: "4.25rem", letterSpacing: "-0.035em" }],
  "7xl": ["4.5rem", { lineHeight: "5rem", letterSpacing: "-0.04em" }],
  display: ["5.5rem", { lineHeight: "5.75rem", letterSpacing: "-0.045em" }],
} as const;

/* ------------------------------------------------------------------ */
/* Spacing, radii, shadows                                             */
/* ------------------------------------------------------------------ */

/**
 * Semantic spacing aliases on top of Tailwind's 4px scale. Most
 * layouts should reach for these instead of arbitrary values.
 */
export const spacing = {
  page: "1.5rem",
  section: "5rem",
  sectionLg: "7rem",
  gutter: "2rem",
} as const;

/**
 * Radii — generous, soft, glassmorphic. `card` is the default for
 * any surface card; `pill` is reserved for fully-rounded chips /
 * buttons; `display` is reserved for hero blobs.
 */
export const radii = {
  none: "0",
  sm: "0.375rem",
  md: "0.625rem",
  lg: "0.875rem",
  xl: "1.125rem",
  "2xl": "1.5rem",
  card: "1rem",
  pill: "9999px",
  display: "2rem",
} as const;

/**
 * Shadows — tuned for dark, gradient-rich backgrounds. The default
 * Tailwind shadows would be near-invisible against `ink[950]`, so we
 * ship darker, more colorful shadows that read on the deep navy.
 */
export const shadows = {
  sm: "0 1px 2px rgba(2, 6, 16, 0.5)",
  md: "0 8px 24px -8px rgba(2, 6, 16, 0.55), 0 2px 6px rgba(2, 6, 16, 0.4)",
  lg: "0 24px 48px -16px rgba(2, 6, 16, 0.6), 0 8px 16px rgba(2, 6, 16, 0.45)",
  xl: "0 32px 80px -24px rgba(2, 6, 16, 0.7), 0 12px 24px rgba(2, 6, 16, 0.45)",
  glow: "0 0 0 1px rgba(34, 211, 238, 0.35), 0 12px 40px -8px rgba(34, 211, 238, 0.45)",
  glowAccent:
    "0 0 0 1px rgba(167, 139, 250, 0.35), 0 12px 40px -8px rgba(167, 139, 250, 0.45)",
  ring: "0 0 0 2px rgba(34, 211, 238, 0.55)",
} as const;

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

/**
 * Layout primitives used across the site.
 */
export const layout = {
  maxWidth: "76rem", // ~1216px — the standard landing-page container
  contentWidth: "64rem", // ~1024px — narrower for long-form sections
  navHeight: "4rem",
} as const;

/* ------------------------------------------------------------------ */
/* Aggregated `theme` export                                           */
/* ------------------------------------------------------------------ */

/**
 * Aggregated theme — convenient single import for any consumer that
 * wants the entire design system at once.
 *
 * The shape mirrors the CSS variables exposed via `@theme` in
 * `app/globals.css` so a TypeScript consumer and a CSS consumer stay
 * in lockstep.
 */
export const theme = {
  colors: {
    ink,
    brand,
    accent,
    aurora,
    semantic,
  },
  fontFamilies,
  fontSizes,
  spacing,
  radii,
  shadows,
  layout,
} as const;

export type Theme = typeof theme;

// Re-export the brand object so consumers can keep importing `brand`
// from `lib/theme.ts` if they prefer a one-stop import.
export { brand };