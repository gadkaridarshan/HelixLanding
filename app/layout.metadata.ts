// helix: app/layout.metadata.ts
/**
 * @helix:story USER-63000
 *
 * SEO/OG/Twitter metadata for the Helix landing site. Pulled from
 * `lib/brand.ts` so the same product identity surfaces in the
 * `<title>`, social cards, and the footer without duplication.
 *
 * Kept in a separate module so the layout shell (`app/layout.tsx`)
 * stays tiny and easy to scan.
 */
import type { Metadata, Viewport } from "next";

import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  keywords: [
    "AI coding agent",
    "atomic work breakdown",
    "code orchestrator",
    "AI PR generator",
    "developer productivity",
    "atomic PRs",
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: brand.url,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.shortDescription,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.shortDescription,
    images: ["/og.svg"],
    creator: "@helix",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
  alternates: {
    canonical: brand.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};