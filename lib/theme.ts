// helix: lib/theme.ts
/**
 * @helix:story USER-176000
 *
 * Theme tokens — single source of truth for the Helix brand.
 *
 * This module exposes the canonical color, radius, typography, spacing,
 * and motion tokens used across the marketing site. It is consumed by:
 *
 *   • `app/globals.css` — the values are mirrored into CSS custom
 *     properties on `:root` (and the `[data-theme="dark"]` override)
 *     so they can drive plain CSS, Tailwind utilities, and inline
 *     `style` attributes.
 *
 *   • Tailwind v4 — `app/globals.css` re-declares the same values
 *     inside the `@theme` block so utility classes like `bg-ink-950`,
 *     `text-brand-400`, or `rounded-card` resolve at build time.
 *
 *   • Server components that need a token in an inline style
 *     attribute (e.g. a gradient stop, an SVG fill) can import
 *     from here without going through CSS variables.
 *
 * Design intent:
 *   • A cool, confident dark-first palette: deep ink-blue canvas,
 *     cyan brand, violet accent, aurora highlight gradient.
 *   • Generous radii (`card`, `pill`) for a friendly modern feel.
 *   • Display headlines rely on Inter 600/700 tracking-tight.
 *   • Mono (JetBrains Mono) is reserved for code chips and the wordmark.
 *
 * Keeping these tokens in TypeScript means we get autocomplete,
 * refactor safety, and a single place to update the palette
 * (the CSS file is generated from this shape).
 */

export type ThemeScale = Record<number, string>;

/**
 * A single font-size entry follows the Tailwind convention:
 * `[fontSize, lineHeight]` tuple, each emitted as a separate CSS
 * declaration (`font-size` + `line-height`) by Tailwind.
 */
export type FontSizeTuple = [string, string];

export interface BrandTheme {
  /** Page-level color tokens. */
  colors: {
    /** Cool dark canvas scale — `ink` is the primary surface family. */
    ink: ThemeScale;
    /** Primary brand scale — `brand` is the cyan family used for CTAs. */
    brand: ThemeScale;
    /** Accent scale — `accent` is the violet family used for emphasis. */
    accent: ThemeScale;
    /** Aurora scale — multi-stop gradient highlight family. */
    aurora: ThemeScale;
    /** Neutral foreground/background scale. */
    neutral: ThemeScale;
  };
  /** Gradient stops — referenced by Hero, CTA, etc. */
  gradients: {
    aurora: string;
    brand: string;
    accent: string;
    surface: string;
  };
  /** Radius scale in rem-equivalent pixel values. */
  radii: {
    sm: string;
    md: string;
    card: string;
    lg: string;
    pill: string;
    full: string;
  };
  /** Box-shadow tokens. */
  shadows: {
    sm: string;
    md: string;
    lg: string;
    glow: string;
    ring: string;
  };
  /** Typography stack — referenced by `app/fonts.ts`. */
  fonts: {
    sans: string;
    mono: string;
  };
  /**
   * Font size scale. Each entry is a `[fontSize, lineHeight]` tuple so
   * Tailwind can emit both `font-size` and `line-height` declarations.
   */
  fontSize: Record<
    "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl",
    FontSizeTuple
  >;
  /** Spacing scale in rem. */
  spacing: Record<string, string>;
  /** Motion / transition timings. */
  motion: {
    fast: string;
    base: string;
    slow: string;
    easing: string;
  };
  /** Marketing copy URL — referenced by Footer + README. */
  url: string;
}

/**
 * Build a 50–950 color scale from explicit stops. We hand-curate the
 * extremes (50, 950) and let the midpoints interpolate via the supplied
 * `stops` so the scale feels coherent without depending on a color lib.
 */
function buildScale(stops: Partial<ThemeScale> = {}): ThemeScale {
  const base: ThemeScale = {
    50: stops[50] ?? "#f8fafc",
    100: stops[100] ?? "#f1f5f9",
    200: stops[200] ?? "#e2e8f0",
    300: stops[300] ?? "#cbd5e1",
    400: stops[400] ?? "#94a3b8",
    500: stops[500] ?? "#64748b",
    600: stops[600] ?? "#475569",
    700: stops[700] ?? "#334155",
    800: stops[800] ?? "#1e293b",
    900: stops[900] ?? "#0f172a",
    950: stops[950] ?? "#020617",
  };
  return base;
}

/** Cool dark-blue ink family — the page canvas. */
const ink: ThemeScale = buildScale({
  50: "#f5f7fb",
  100: "#e6ebf3",
  200: "#c8d3e3",
  300: "#9aabc4",
  400: "#64779a",
  500: "#3f5275",
  600: "#2a3a5a",
  700: "#1d2a44",
  800: "#121c30",
  900: "#0a1224",
  950: "#050a18",
});

/** Cyan brand family — CTAs, links, brand mark. */
const brandScale: ThemeScale = buildScale({
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
});

/** Violet accent family — emphasis, secondary highlights. */
const accentScale: ThemeScale = buildScale({
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
});

/** Aurora highlight family — multi-stop gradient highlight. */
const auroraScale: ThemeScale = buildScale({
  50: "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#2dd4bf",
  500: "#14b8a6",
  600: "#0d9488",
  700: "#0f766e",
  800: "#115e59",
  900: "#134e4a",
  950: "#042f2e",
});

/** Neutral foreground/background scale. */
const neutralScale: ThemeScale = buildScale({
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#09090b",
});

/** Font-size scale — `[fontSize, lineHeight]` tuples. */
const fontSize: BrandTheme["fontSize"] = {
  xs: ["0.75rem", "1rem"],
  sm: ["0.875rem", "1.25rem"],
  base: ["1rem", "1.5rem"],
  lg: ["1.125rem", "1.75rem"],
  xl: ["1.25rem", "1.75rem"],
  "2xl": ["1.5rem", "2rem"],
  "3xl": ["1.875rem", "2.25rem"],
  "4xl": ["2.25rem", "2.5rem"],
  "5xl": ["3rem", "1.15"],
  "6xl": ["3.75rem", "1.1"],
};

/** Spacing scale in rem — matches Tailwind defaults with brand tweaks. */
const spacing: Record<string, string> = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};

/**
 * Canonical Helix brand theme. This is the single source of truth that
 * `app/globals.css` and `lib/tailwind.config.ts` mirror into Tailwind /
 * CSS custom properties.
 */
export const brandTheme: BrandTheme = {
  colors: {
    ink,
    brand: brandScale,
    accent: accentScale,
    aurora: auroraScale,
    neutral: neutralScale,
  },
  gradients: {
    aurora:
      "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #2dd4bf 100%)",
    brand: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    accent: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
    surface:
      "linear-gradient(180deg, #050a18 0%, #0a1224 50%, #050a18 100%)",
  },
  radii: {
    sm: "0.375rem",
    md: "0.5rem",
    card: "0.875rem",
    lg: "1.25rem",
    pill: "999px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(2, 6, 23, 0.5)",
    md: "0 4px 12px -2px rgba(2, 6, 23, 0.6)",
    lg: "0 20px 40px -12px rgba(2, 6, 23, 0.7)",
    glow: "0 0 30px rgba(34, 211, 238, 0.35)",
    ring: "0 0 0 1px rgba(148, 163, 184, 0.2)",
  },
  fonts: {
    sans: "var(--font-inter), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    mono: "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  fontSize,
  spacing,
  motion: {
    fast: "150ms",
    base: "240ms",
    slow: "400ms",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  url: "https://helix-ai-orchestrator.vercel.app",
};

export default brandTheme;