// helix: app/fonts.ts
/**
 * @helix:story USER-285000
 *
 * Font registration for the Helix landing site. Uses `next/font/google`
 * so the chosen families ship as self-hosted, preloaded assets with
 * automatic subsetting and zero CLS.
 *
 * We pair:
 *   • `Geist Sans`  — primary UI / body font (a modern, neutral
 *     sans-serif with excellent on-screen legibility).
 *   • `Geist Mono`  — used for the eyebrow chips, badges, and code-
 *     style labels where a technical tone is desired.
 */
import { Geist, Geist_Mono } from "next/font/google";

export const fontSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});