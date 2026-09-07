// helix: app/fonts.ts
/**
 * @helix:story USER-285000
 *
 * Brand fonts wired up via `next/font/google`.
 *
 *   • Inter         — workhorse UI sans (body copy, controls)
 *   • Space Grotesk — display sans (hero, section headings)
 *   • JetBrains Mono — monospace (code chips, diff lines)
 *
 * Each font is exposed as a CSS variable so `app/globals.css`
 * (`@theme`) can promote them into Tailwind v4 utilities
 * (`font-sans`, `font-display`, `font-mono`).
 *
 * `fontVariables` is the single string applied to `<html className>`
 * in `app/layout.tsx`.
 */
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const fontVariables = [
  inter.variable,
  spaceGrotesk.variable,
  jetbrainsMono.variable,
].join(" ");