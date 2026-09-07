// helix: lib/brand.ts
/**
 * @helix:story USER-915000
 *
 * lib/brand.ts — single source of truth for the Helix brand
 * identity. Every surface that emits user-facing copy (title,
 * description, OG image, social URLs, theme color) imports from
 * this module so the marketing site cannot drift.
 *
 * Override the canonical production URL via the
 * `NEXT_PUBLIC_BRAND_URL` environment variable (e.g. when
 * deploying to a custom domain). Falls back to the Vercel
 * production URL by default.
 */

const DEFAULT_BRAND_URL = "https://helix-ai-orchestrator.vercel.app";
const DEFAULT_OG_IMAGE = "/og-image.svg";
const DEFAULT_TWITTER_HANDLE = "@helix_ai";

const envUrl = process.env["NEXT_PUBLIC_BRAND_URL"]?.trim();
const envOg = process.env["NEXT_PUBLIC_BRAND_OG_IMAGE"]?.trim();
const envTwitter = process.env["NEXT_PUBLIC_BRAND_TWITTER_HANDLE"]?.trim();

const canonicalUrl = (
  envUrl && envUrl.length > 0 ? envUrl : DEFAULT_BRAND_URL
).replace(/\/+$/, "");

const ogImagePath =
  envOg && envOg.length > 0 ? envOg : DEFAULT_OG_IMAGE;

export const ogImageUrl: string = ogImagePath.startsWith("http")
  ? ogImagePath
  : `${canonicalUrl}${ogImagePath.startsWith("/") ? "" : "/"}${ogImagePath}`;

export const twitterHandle: string =
  envTwitter && envTwitter.length > 0 ? envTwitter : DEFAULT_TWITTER_HANDLE;

export const brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents",
  title: "Helix — Atomic Work-Breakdown Orchestrator for AI Coding Agents",
  description:
    "Helix decomposes any engineering goal into reviewable atoms, fans them out to parallel AI agents with dependency gating, and ships auditable PRs you can replay end-to-end.",
  url: canonicalUrl,
  ogImageUrl,
  twitterHandle,
  themeColorDark: "#050816",
  themeColorLight: "#050816",
} as const;

export type Brand = typeof brand;
export default brand;