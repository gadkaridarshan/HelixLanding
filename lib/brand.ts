/**
 * @helix:story USER-285000
 *
 * Brand — centralizes all site-wide brand values (name, tagline, URLs,
 * colors, etc.) so they can be referenced in one place.
 *
 * Values come from environment variables (with fallbacks) so they can be
 * overridden per deployment (e.g. staging vs production) without touching
 * code.
 */
import type { ReactElement } from "react";

const DEFAULT_BRAND_URL = "https://helix-ai-orchestrator.vercel.app";
const DEFAULT_GITHUB_URL = "https://github.com/gadkaridarshan/Helix";
const DEFAULT_TWITTER_URL = "https://twitter.com/helix";
const DEFAULT_LINKEDIN_URL = "https://www.linkedin.com/company/helix";
const DEFAULT_LOGO_URL = "/logo.svg";
const DEFAULT_OG_IMAGE = "/og.png";
const DEFAULT_TWITTER_HANDLE = "@helix";
const DEFAULT_THEME_COLOR_DARK = "#05060a";

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
  envTwitterUrl && envTwitterUrl.length > 0 ? envTwitterUrl : DEFAULT_TWITTER_URL;

export const linkedInUrl: string =
  envLinkedIn && envLinkedIn.length > 0 ? envLinkedIn : DEFAULT_LINKEDIN_URL;

export const twitterHandle: string =
  envTwitter && envTwitter.length > 0 ? envTwitter : DEFAULT_TWITTER_HANDLE;

export const themeColorDark: string =
  envTheme && envTheme.length > 0 ? envTheme : DEFAULT_THEME_COLOR_DARK;

export const brand = {
  name: "Helix",
  tagline: "The AI Coding Agent That Ships Verified Code",
  description:
    "Helix is an AI coding agent that reads your prompt and codebase, then produces atomic units of work that are type-checked, tested, and linted before they can be merged. Failures pause the loop.",
  url: canonicalUrl,
  logo: logoUrl,
  ogImage: ogImageUrl,
  github: githubUrl,
  twitter: twitterUrl,
  linkedIn: linkedInUrl,
  themeColorDark,
};