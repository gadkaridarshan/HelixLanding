// helix: lib/brand.ts
/**
 * @helix:story USER-308000
 *
 * Brand — product-voice surface (name, description, canonical URL).
 * Consumed by `app/layout.tsx`, `components/Footer.tsx`, `components/Cta.tsx`,
 * `README.md`, and `public/landing/README.md`.
 */

const defaultUrl = "https://helix-ai-orchestrator.vercel.app";
const defaultReferenceUrl = "https://helix-ai-orchestrator.vercel.app";
const defaultGithubUrl = "https://github.com/gadkaridarshan/Helix";

export const brand = {
  /** Product name — used in `<title>`, footer wordmark, OG cards. */
  name: "Helix",
  /** One-line tagline — used as the default meta description and CTA copy. */
  description:
    "Atomic work-breakdown for AI coding agents — small, verified, reviewable PRs instead of sprawling diffs.",
  /** Canonical production URL for this product. */
  url: process.env.NEXT_PUBLIC_BRAND_URL ?? defaultUrl,
  /** Visual / brand reference URL — explicitly labelled as not-live. */
  referenceUrl: defaultReferenceUrl,
  /** Source repository for this product. */
  githubUrl: defaultGithubUrl,
} as const;

export type Brand = typeof brand;