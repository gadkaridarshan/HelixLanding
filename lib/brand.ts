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
const DEFAULT_REFERENCE_URL = "https://helix-ai-orchestrator.vercel.app";
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

export const brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents",
  shortDescription:
    "The atomic work-breakdown orchestrator for AI coding agents — ship small, reviewable PRs instead of one sprawling diff.",
  description:
    "Helix decomposes every prompt into atomic, reviewable units, executes them in order with explicit dependencies, and verifies each unit against the rest of your repo (types, tests, lint) before shipping a small, reviewable PR.",
  url: resolveCanonicalUrl(),
  githubUrl: DEFAULT_GITHUB_URL,
  referenceUrl: DEFAULT_REFERENCE_URL,
  contactEmail: DEFAULT_CONTACT_EMAIL,
} as const;

export type Brand = typeof brand;