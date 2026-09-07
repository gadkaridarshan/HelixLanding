// helix: lib/brand.ts
/**
 * @helix:story USER-63000
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
const DEFAULT_GITHUB_URL = "https://github.com/gadkaridarshan/Helix";
const DEFAULT_CONTACT_EMAIL = "hello@helix-ai.dev";

function normalizeUrl(value: string | undefined, fallback: string): string {
  if (value && value.trim().length > 0) {
    return value.trim().replace(/\/+$/, "");
  }
  return fallback;
}

function resolveCanonicalUrl(): string {
  return normalizeUrl(process.env.NEXT_PUBLIC_BRAND_URL, DEFAULT_URL);
}

export interface Brand {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  url: string;
  githubUrl: string;
  contactEmail: string;
  twitterHandle: string;
}

export const brand: Brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents",
  shortDescription:
    "The atomic work-breakdown orchestrator for AI coding agents — ship small, reviewable PRs.",
  longDescription:
    "Helix decomposes every prompt into atomic, dependency-aware units, verifies each against your repo (types, tests, lint), and hands you small PRs you can actually review.",
  url: resolveCanonicalUrl(),
  githubUrl: DEFAULT_GITHUB_URL,
  contactEmail: DEFAULT_CONTACT_EMAIL,
  twitterHandle: "@helix_ai",
};

export default brand;