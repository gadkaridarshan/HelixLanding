// helix: lib/brand.ts
/**
 * @helix:story USER-285000
 *
 * Single source of truth for brand identity strings.
 *
 * Used by:
 *   • `app/layout.tsx`     — SEO metadata, OG, Twitter
 *   • `app/sitemap.ts`     — canonical URL
 *   • `app/layout.metadata.ts` (if split)
 *   • `components/Footer.tsx`, `FinalCTA.tsx`, etc.
 *
 * The canonical production URL defaults to the upstream Vercel
 * deployment. Override via `NEXT_PUBLIC_BRAND_URL` for previews or
 * custom domains.
 */

const DEFAULT_BRAND_URL = "https://helix-ai-orchestrator.vercel.app";
const DEFAULT_OG_IMAGE = "/og-image.svg";
const DEFAULT_TWITTER_HANDLE = "@helix_ai";
const DEFAULT_THEME_COLOR_DARK = "#050816";

const envUrl = process.env["NEXT_PUBLIC_BRAND_URL"]?.trim();
const envOg = process.env["NEXT_PUBLIC_BRAND_OG_IMAGE"]?.trim();
const envTwitter = process.env["NEXT_PUBLIC_BRAND_TWITTER_HANDLE"]?.trim();
const envTheme = process.env["NEXT_PUBLIC_BRAND_THEME_COLOR_DARK"]?.trim();

const canonicalUrl = (
  envUrl && envUrl.length > 0 ? envUrl : DEFAULT_BRAND_URL
).replace(/\/+$/, "");

const ogImagePath = envOg && envOg.length > 0 ? envOg : DEFAULT_OG_IMAGE;

export const ogImageUrl: string = ogImagePath.startsWith("http")
  ? ogImagePath
  : `${canonicalUrl}${ogImagePath.startsWith("/") ? "" : "/"}${ogImagePath}`;

export const twitterHandle: string =
  envTwitter && envTwitter.length > 0 ? envTwitter : DEFAULT_TWITTER_HANDLE;

export const themeColorDark: string =
  envTheme && envTheme.length > 0 ? envTheme : DEFAULT_THEME_COLOR_DARK;

export const brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents",
  title: "Helix — Atomic Work-Breakdown Orchestrator for AI Coding Agents",
  description:
    "Helix decomposes any engineering goal into reviewable atoms, fans them out to parallel AI agents with dependency gating, and ships auditable PRs you can trust.",
  url: canonicalUrl,
  ogImageUrl,
  twitterHandle,
  themeColorDark,
  github: "https://github.com/gadkaridarshan/Helix",
  liveSite: canonicalUrl,
} as const;

export type Brand = typeof brand;