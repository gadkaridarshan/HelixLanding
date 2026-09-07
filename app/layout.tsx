// helix: app/layout.tsx
/**
 * @helix:story USER-915000
 *
 * Root layout for the Helix landing site.
 *
 * Owns:
 *   • HTML document scaffold (`<html>`, `<body>`).
 *   • Brand-aware default + template metadata for SEO.
 *   • Open Graph + Twitter card metadata for social sharing.
 *   • Canonical URL + favicon/manifest wiring.
 *   • Self-hosted Inter (UI) + JetBrains Mono (code/wordmark) via
 *     `next/font/google`.
 *   • Site chrome: sticky `<Navbar />` and `<Footer />` wrap every
 *     route consistently.
 *
 * All section pages are server components; no client JS is shipped
 * for the chrome. FinalCTA / Navbar mobile menu use small `"use
 * client"` islands where needed.
 */
import type { Metadata, Viewport } from "next";
import * as React from "react";

import { fontVariables } from "@/app/fonts";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { brand } from "@/lib/brand";

import "@/app/globals.css";

const SITE_URL = brand.url;
const OG_IMAGE_PATH = "/og.svg";
const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: brand.name,
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.shortDescription,
  keywords: [
    "Helix",
    "AI orchestrator",
    "AI coding agent",
    "atomic work breakdown",
    "multi-agent orchestration",
    "AI engineering workflow",
    "code review automation",
    "developer productivity",
    "Helix AI",
  ],
  authors: [{ name: brand.name, url: SITE_URL }],
  creator: brand.name,
  publisher: brand.name,
  category: "developer tools",
  classification: "AI Developer Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.shortDescription,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: brand.twitterHandle,
    creator: brand.twitterHandle,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.shortDescription,
    images: {
      url: OG_IMAGE_URL,
      alt: `${brand.name} — ${brand.tagline}`,
    },
  },
  other: {
    "og:brand": brand.name,
    "twitter:domain": new URL(SITE_URL).hostname,
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
      className={fontVariables}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-950 text-ink-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-brand-500 focus:px-3 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}