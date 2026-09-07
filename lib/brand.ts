// helix: lib/brand.ts
/**
 * @helix:story USER-176000
 *
 * Brand voice — single source of truth for product name, description,
 * and canonical URL. Consumed by:
 *
 *   • `app/layout.tsx` — drives `<title>`, Open Graph, Twitter cards,
 *     and `metadataBase`.
 *   • `components/sections/Footer.tsx` — surfaces the live product URL
 *     in the site chrome (with a clearly-labelled reference-site pointer
 *     for `helix-ai-orchestrator.vercel.app`).
 *   • `README.md` and `public/landing/README.md` — copy + links.
 *
 * Why this file exists separately from `lib/theme.ts`:
 *   `theme.ts` is the visual token surface (colors, radii, shadows,
 *   fonts, motion). `brand.ts` is the product-voice surface (name,
 *   description, canonical URL). Keeping them split means a copy edit
 *   doesn't accidentally touch visual tokens and vice versa.
 */

/**
 * The canonical production URL for this product.
 *
 * Defaults to the live Helix marketing deployment. Override at build
 * time with `NEXT_PUBLIC_BRAND_URL` if you fork the site for a
 * different deployment (staging, preview, etc.).
 */
const defaultUrl = "https://helix-ai-orchestrator.vercel.app";

export const brand = {
  /** Product name — used in `<title>`, footer wordmark, OG cards. */
  name: "Helix",
  /** One-line tagline — used as the default meta description and OG. */
  description:
    "Atomic work-breakdown for AI coding agents. Decompose every prompt into reviewable units, execute them in order, and ship small PRs.",
  /** Canonical marketing URL — used by `<link rel="canonical">` and OG. */
  url: process.env.NEXT_PUBLIC_BRAND_URL ?? defaultUrl,
  /** Twitter handle — surfaced in footer + meta. */
  twitter: "@helix",
} as const;

export type Brand = typeof brand;

export default brand;