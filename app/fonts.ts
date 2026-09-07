// helix: app/fonts.ts
/**
 * @helix:story USER-176000
 *
 * Centralized font registration for the Helix landing site.
 *
 * Owns the canonical `next/font/google` configuration for the two
 * font families used across the site:
 *
 *   • **Inter** — primary UI / body / heading face. A modern,
 *     geometric grotesque designed for screens with excellent
 *     legibility at small sizes and a confident tone at large
 *     display sizes. Weights 400 / 500 / 600 / 700 cover body text,
 *     labels, headings, and the brand display headline.
 *
 *   • **JetBrains Mono** — monospace face reserved for code-style
 *     accents (logo wordmark, terminal / CLI snippets, code chips).
 *     Weights 400 / 500 / 600 give us a regular, a medium for
 *     emphasis, and a bold for logo / CTA accents.
 *
 * Both fonts are wired through `next/font/google`, which self-hosts
 * the woff2 files at build time so we don't ship render-blocking
 * external CSS and we keep a single source of truth for the font
 * stack. Each font exposes its computed family + metrics as a CSS
 * variable (`--font-inter`, `--font-jetbrains`) so they can be
 * referenced from `app/globals.css`, Tailwind's `@theme`, and any
 * inline `style` attribute without re-importing.
 *
 * `display: "swap"` guarantees the browser renders fallback text
 * immediately while the web font loads, preventing FOIT.
 *
 * Consumers:
 *   • `app/layout.tsx` injects `--font-inter` and `--font-jetbrains`
 *     onto `<html>` so every page inherits the stack.
 *   • `app/globals.css` exposes them through `:root` and Tailwind's
 *     `@theme` (`--font-sans`, `--font-mono`).
 */
import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Primary sans-serif face for the entire site.
 * Used for body copy, headings, navigation, buttons, and the brand
 * display headline.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  preload: true,
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

/**
 * Monospace face reserved for code, CLI snippets, and brand accents.
 * Used by the Helix wordmark, terminal mockups, and any inline
 * `<code>` / `<pre>` block.
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  preload: true,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});