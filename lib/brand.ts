// helix: lib/brand.ts
/**
 * @helix:story USER-23000
 *
 * Brand surface for the Helix marketing site.
 *
 * Centralizes the product name, tagline, description, and canonical
 * production URLs so the same identity surfaces consistently across
 * the layout metadata, OG cards, footer, final CTA, and README.
 *
 * The `url` field can be overridden at runtime via the
 * `NEXT_PUBLIC_BRAND_URL` environment variable.
 */

const DEFAULT_URL = "https://helix-ai-orchestrator.vercel.app";

function resolveCanonicalUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_BRAND_URL;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv.trim().replace(/\/+$/, "");
  }
  return DEFAULT_URL;
}

export const brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents",
  shortDescription:
    "The atomic work-breakdown orchestrator for AI coding agents — ship small, reviewable PRs instead of one sprawling diff.",
  description:
    "Helix decomposes every prompt into atomic, reviewable units, executes them in order with explicit dependencies, and verifies each unit against the rest of your repo (types, tests, lint) before shipping a small, reviewable PR.",
  url: resolveCanonicalUrl(),
  githubUrl: "https://github.com/gadkaridarshan/Helix",
  twitterHandle: "@helix",
} as const;

export type Brand = typeof brand;