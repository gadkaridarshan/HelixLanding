// helix: lib/brand.ts
/**
 * Single source of truth for brand identity strings.
 *
 * Used by:
 *   • `app/layout.tsx`     — SEO metadata, OG, Twitter
 *   • `app/sitemap.ts`     — canonical URL
 *   • `app/page.tsx`       — landing page chrome
 *   • `components/sections/footer/Footer.tsx` — footer brand line
 *   • `components/sections/finalcta/FinalCTA.tsx` etc.
 *
 * The canonical production URL defaults to the upstream Vercel
 * deployment. Override via `NEXT_PUBLIC_BRAND_URL` for previews or
 * custom domains.
 */

export const DEFAULT_BRAND_URL = "https://helix-ai-orchestrator.vercel.app";
export const DEFAULT_OG_IMAGE = "/og-image.svg";
export const DEFAULT_TWITTER_HANDLE = "@helix_ai";
export const DEFAULT_THEME_COLOR_DARK = "#050816";

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
  shortName: "Helix",
  tagline:
    "AI coding agent orchestration. Atomic units. Repo-aware verification. One PR per task.",
  url: canonicalUrl,
  ogImage: ogImageUrl,
  twitter: twitterHandle,
  themeColorDark,
  description:
    "Helix orchestrates your coding agent into atomic, repo-aware units — each verified and merged as a single PR.",
} as const;

export type Brand = typeof brand;