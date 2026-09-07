// helix: app/fonts.ts
/**
 * @helix:story USER-176000
 *
 * Fonts — Inter (display + body) and JetBrains Mono (code/wordmark) loaded
 * via `next/font/google`. The exported CSS variables are applied to
 * `<html>` in `app/layout.tsx` and re-declared inside the Tailwind v4
 * `@theme` block in `app/globals.css` so utilities like `font-sans` and
 * `font-mono` resolve at build time.
 *
 * We pick Inter 400/500/600/700 for a confident, modern display voice and
 * JetBrains Mono 400/500 for code chips, the wordmark, and any inline
 * `<code>` blocks. Both fonts are loaded with `display: "swap"` so the
 * page stays readable while the webfonts stream in, and `preload: true`
 * so the LCP text paints fast.
 */
import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`;