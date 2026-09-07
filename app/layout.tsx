// helix: app/layout.tsx
/**
 * @helix:story USER-915000
 *
 * Root layout — production-ready SEO/OG/Twitter metadata for the
 * Helix Landing marketing site.
 *
 * Responsibilities:
 *   • Render the HTML shell with modern web fonts (Inter + JetBrains Mono).
 *   • Expose the brand surface via `metadata` + `viewport` exports so
 *     Next.js App Router emits full SEO, Open Graph, and Twitter card
 *     `<meta>` tags automatically.
 *   • Declare `metadataBase` from `lib/brand.ts` so every relative
 *     image/URL resolves against the canonical production URL.
 *   • Wire the dark brand canvas (background/foreground) so the
 *     non-flat hero + section glows read correctly.
 *
 * The brand identity (name, tagline, description, canonical URL, OG
 * image, social URLs) lives in `lib/brand.ts` — single source of truth
 * for the title, OG card, sitemap, footer, and FinalCTA.
 */
import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { brand } from "@/lib/brand";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const siteUrl = brand.url.endsWith("/") ? brand.url.slice(0, -1) : brand.url;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  applicationName: brand.name,
  description: brand.description,
  keywords: [
    "Helix",
    "AI orchestrator",
    "atomic work breakdown",
    "AI coding agent",
    "code generation",
    "developer productivity",
    "agentic AI",
    "GitHub automation",
    "PR review",
    "dependency graph",
  ],
  authors: [{ name: brand.name, url: siteUrl }],
  creator: brand.name,
  publisher: brand.name,
  category: "Developer Tools",
  classification: "Developer Tools",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    images: [
      {
        url: brand.ogImage,
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    images: [brand.ogImage],
    creator: brand.twitterHandle,
    site: brand.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#020617",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-ink-950 text-ink-100 font-sans antialiased selection:bg-brand-400/30 selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}