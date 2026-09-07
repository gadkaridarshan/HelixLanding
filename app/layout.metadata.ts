/**
 * @helix:story USER-525000
 *
 * Centralized Next.js `Metadata` export for the marketing site.
 *
 * Sourced from `lib/brand.ts` so the same identity that drives the
 * hero, footer, and OG image also drives every metadata field.
 *
 * Imported and re-exported from `app/layout.tsx` to keep that file
 * focused on layout shell concerns.
 */
import type { Metadata, Viewport } from "next";

import { brand } from "@/lib/brand";

const titleDefault = `${brand.name} — Atomic work-breakdown for AI coding agents`;

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: titleDefault,
    template: `%s — ${brand.name}`,
  },
  applicationName: brand.name,
  description: brand.description,
  keywords: [
    "AI coding agent",
    "AI orchestrator",
    "atomic work-breakdown",
    "code review automation",
    "developer tools",
    "prompt decomposition",
    "Helix",
    "agentic engineering",
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  category: "Developer Tools",
  classification: "Developer Tools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: brand.url,
    types: {
      "application/rss+xml": [{ url: "/sitemap.xml", title: brand.name }],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: brand.url,
    siteName: brand.name,
    title: titleDefault,
    description: brand.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: titleDefault,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: brand.twitterHandle ?? undefined,
    creator: brand.twitterHandle ?? undefined,
    title: titleDefault,
    description: brand.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: titleDefault,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#020617",
    "color-scheme": "dark",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};