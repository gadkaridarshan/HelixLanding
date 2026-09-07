// helix: lib/theme.ts
/**
 * @helix:story USER-445000
 *
 * lib/theme.ts — TypeScript shape of the Helix design system.
 *
 * Tokens themselves live in `app/globals.css` under `@theme {}`
 * (Tailwind v4 CSS-first config). This file exists so editors and
 * unit tests get autocomplete, type safety, and a single place to
 * reference the palette shape — it does NOT generate CSS.
 *
 *   • `ink-*`    — deep dark base canvas
 *   • `brand-*`  — cyan accent (CTAs, links)
 *   • `accent-*` — violet highlight (personas, badges)
 *   • `aurora-*` — multi-hue gradient stops (hero glows)
 *
 *   • `font-sans`    → Inter            (body copy, UI)
 *   • `font-display` → Space Grotesk    (hero headlines)
 *   • `font-mono`    → JetBrains Mono   (code chips, wordmark)
 */
export type ThemeScale = Record<number, string>;

export interface BrandTheme {
  colors: {
    ink: ThemeScale;
    brand: ThemeScale;
    accent: ThemeScale;
    aurora: ThemeScale;
  };
  fonts: {
    sans: string;
    display: string;
    mono: string;
  };
  radii: {
    card: string;
    pill: string;
  };
  shadows: {
    glowBrand: string;
    glowAccent: string;
  };
}

export const theme: BrandTheme = {
  colors: {
    ink: {
      50: "#f8fafc",
      100: "#e2e8f0",
      200: "#cbd5e1",
      300: "#94a3b8",
      400: "#64748b",
      500: "#475569",
      600: "#334155",
      700: "#1e293b",
      800: "#0f172a",
      900: "#0b1220",
      950: "#050816",
    },
    brand: {
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
    aurora: {
      pink: "#f472b6",
      violet: "#a78bfa",
      cyan: "#22d3ee",
      mint: "#34d399",
    },
  },
  fonts: {
    sans: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    display: "var(--font-display), ui-sans-serif, system-ui, sans-serif",
    mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
  },
  radii: {
    card: "1rem",
    pill: "9999px",
  },
  shadows: {
    glowBrand: "0 10px 40px -10px rgba(34, 211, 238, 0.5)",
    glowAccent: "0 10px 40px -10px rgba(139, 92, 246, 0.5)",
  },
};

export default theme;