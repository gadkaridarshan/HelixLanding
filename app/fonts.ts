// helix: app/fonts.ts
/**
 * @helix:story USER-445000
 *
 * app/fonts.ts — single source of truth for every web font used in
 * the Helix Landing shell. Imported by `app/layout.tsx` and applied
 * to `<html>` via the `fontVariables` class so Tailwind utilities
 * (`font-sans`, `font-display`, `font-mono`) and the CSS variables
 * `--font-inter`, `--font-display`, `--font-jetbrains-mono` are
 * available everywhere.
 *
 *   • `inter`         — modern workhorse sans (body copy, UI)
 *   • `spaceGrotesk`  — geometric display sans (hero headlines)
 *   • `jetbrainsMono` — monospaced coding font (wordmark, code chips)
 *
 * Each font is loaded via `next/font/google` with `display: "swap"`
 * and `preload: true` so text remains visible while the web font
 * loads (no FOIT) and the critical request ships in the initial
 * document.
 */
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

/**
 * Combined className applied to `<html>` so every CSS variable is
 * available to Tailwind utilities (`font-sans`, `font-display`,
 * `font-mono`) and direct `var(--font-*)` lookups.
 */
export const fontVariables = `${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`;