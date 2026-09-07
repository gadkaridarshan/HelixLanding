// helix: lib/brand.ts
/**
 * Brand surface — single source of truth for the Helix brand
 * identity (name, canonical URL, OG image, Twitter handle,
 * social URLs, logo URL, and dark theme color).
 *
 * Every consumer of brand copy (the page `<title>`, OG/Twitter
 * card metadata, the Footer, the JSON-LD `Organization` block,
 * and any future emails/badges) reads from this module so the
 * identity is never duplicated.
 *
 * Values can be overridden via environment variables prefixed
 * with `NEXT_PUBLIC_BRAND_` so Vercel preview deploys can point
 * at staging URLs without code changes.
 */

export const DEFAULT_BRAND_URL = "https://helix-ai-orchestrator.vercel.app";
export const DEFAULT_GITHUB_URL =
  "https://github.com/gadkaridarshan/Helix";
export const DEFAULT_TWITTER_URL = "https://x.com/helix_ai";
export const DEFAULT_LINKEDIN_URL = "https://www.linkedin.com/company/helix-ai";
export const DEFAULT_OG_IMAGE = "/og-image.svg";
export const DEFAULT_LOGO_URL = "/logo.svg";
export const DEFAULT_TWITTER_HANDLE = "@helix_ai";
export const DEFAULT_THEME_COLOR_DARK = "#050816";

const envUrl = process.env["NEXT_PUBLIC_BRAND_URL"]?.trim();
const envOg = process.env["NEXT_PUBLIC_BRAND_OG_IMAGE"]?.trim();
const envGithub = process.env["NEXT_PUBLIC_BRAND_GITHUB_URL"]?.trim();
const envTwitterUrl = process.env["NEXT_PUBLIC_BRAND_TWITTER_URL"]?.trim();
const envLinkedIn = process.env["NEXT_PUBLIC_BRAND_LINKEDIN_URL"]?.trim();
const envLogo = process.env["NEXT_PUBLIC_BRAND_LOGO_URL"]?.trim();
const envTwitter = process.env["NEXT_PUBLIC_BRAND_TWITTER_HANDLE"]?.trim();
const envTheme = process.env["NEXT_PUBLIC_BRAND_THEME_COLOR_DARK"]?.trim();

const canonicalUrl = (
  envUrl && envUrl.length > 0 ? envUrl : DEFAULT_BRAND_URL
).replace(/\/+$/, "");

const ogImagePath = envOg && envOg.length > 0 ? envOg : DEFAULT_OG_IMAGE;
const logoPath = envLogo && envLogo.length > 0 ? envLogo : DEFAULT_LOGO_URL;

function toAbsoluteUrl(pathOrUrl: string, base: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${base}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export const ogImageUrl: string = toAbsoluteUrl(ogImagePath, canonicalUrl);
export const logoUrl: string = toAbsoluteUrl(logoPath, canonicalUrl);

export const githubUrl: string =
  envGithub && envGithub.length > 0 ? envGithub : DEFAULT_GITHUB_URL;

export const twitterUrl: string =
  envTwitterUrl && envTwitterUrl.length > 0
    ? envTwitterUrl
    : DEFAULT_TWITTER_URL;

export const linkedInUrl: string =
  envLinkedIn && envLinkedIn.length > 0 ? envLinkedIn : DEFAULT_LINKEDIN_URL;

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
  logoUrl,
  githubUrl,
  twitterUrl,
  linkedInUrl,
  twitter: twitterHandle,
  themeColorDark,
} as const;

export type Brand = typeof brand;