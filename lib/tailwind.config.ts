// helix: lib/tailwind.config.ts
/**
 * @helix:story USER-176000
 *
 * Tailwind v4 theme bridge — re-exports the brand tokens from
 * `lib/theme.ts` in the shape Tailwind v4 expects so any consumer that
 * still imports `tailwind.config.ts` (e.g. editor tooling, shadcn-style
 * configs) sees the same scale as `app/globals.css`'s `@theme` block.
 *
 * Note: Tailwind v4 reads theme tokens from CSS (`@theme`) directly.
 * This file exists for tooling and for any code path that wants to
 * resolve a token via `tailwindConfig.theme.extend.colors.brand[400]`
 * without re-declaring values.
 */
import type { Config } from "tailwindcss";

import { theme } from "@/lib/theme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: theme.colors.ink,
        brand: theme.colors.brand,
        accent: theme.colors.accent,
        aurora: theme.colors.aurora,
        neutral: theme.colors.neutral,
      },
      borderRadius: {
        sm: theme.radii.sm,
        md: theme.radii.md,
        card: theme.radii.card,
        lg: theme.radii.lg,
        pill: theme.radii.pill,
      },
      boxShadow: {
        sm: theme.shadows.sm,
        md: theme.shadows.md,
        lg: theme.shadows.lg,
        glow: theme.shadows.glow,
        ring: theme.shadows.ring,
      },
      fontFamily: {
        sans: theme.fonts.sans.split(", "),
        mono: theme.fonts.mono.split(", "),
      },
      transitionTimingFunction: {
        helix: theme.motion.easing,
      },
      transitionDuration: {
        fast: theme.motion.fast,
        base: theme.motion.base,
        slow: theme.motion.slow,
      },
    },
  },
  plugins: [],
};

export default config;