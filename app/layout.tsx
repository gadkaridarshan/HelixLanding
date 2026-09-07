// helix: app/layout.tsx
/**
 * @helix:story USER-285000
 *
 * Root layout — production-ready SEO/OG/Twitter metadata for the
 * Helix Landing marketing site.
 *
 * Responsibilities:
 *   • Render the HTML shell with the modern web fonts wired up in
 *     `app/fonts.ts` (Inter workhorse sans, Space Grotesk display
 *     sans for hero/headlines, JetBrains Mono for code chips).
 *   • Expose the brand surface via `metadata` + `viewport` exports
 *     so Next.js App Router emits full SEO, Open Graph, and Twitter
 *     card `<meta>` tags automatically.
 *   • Declare `metadataBase` from `lib/brand.ts` so every relative
 *     image/URL resolves against the canonical production URL.
 *   • Wire the dark brand canvas (background/foreground) so the
 *     non-flat hero + section glows read correctly.
 *
 * The brand identity (name, tagline, description, canonical URL,
 * OG image, social URLs) lives in `lib/brand.ts` — single source of
 * truth for the title, OG card, sitemap, footer, and FinalCTA.
 */
import * as React from "react";
import type { Metadata, Viewport } from "next";

import { fontVariables } from "@/app/fonts";
import { brand } from "@/lib/brand";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: brand.title,
    template: `%s · ${brand.name}`,
  },
  applicationName: brand.name,
  description: brand.description,
  keywords: [
    "Helix",
    "AI orchestrator",
    "AI coding agents",
    "agent orchestration",
    "atomic work breakdown",
    "developer productivity",
    "AI engineering",
    "code review automation",
    "parallel agents",
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  category: "technology",
  classification: "Developer Tools",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: brand.url,
    siteName: brand.name,
    title: brand.title,
    description: brand.description,
    images: [
      {
        url: brand.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.title,
    description: brand.description,
    images: [brand.ogImageUrl],
    creator: brand.twitterHandle,
    site: brand.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: brand.themeColorDark },
    { media: "(prefers-color-scheme: light)", color: brand.themeColorDark },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html
      lang="en"
      className={fontVariables}
      suppressHydrationWarning
    >
      <body
        className={
          "min-h-screen bg-ink-950 font-sans text-ink-100 antialiased " +
          "selection:bg-brand-500/30 selection:text-ink-50"
        }
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}