// helix: app/layout.metadata.ts
/**
 * @helix:story USER-23000
 *
 * SEO metadata + viewport configuration for the Helix landing site.
 *
 * The canonical production URL is sourced from `lib/brand.ts` so it can
 * be overridden at deploy time via `NEXT_PUBLIC_BRAND_URL` without
 * touching the layout shell.
 */
import type { Metadata, Viewport as NextViewport } from "next";

import { brand } from "@/lib/brand";

const title = `${brand.name} — ${brand.tagline}`;
const description = brand.description;

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: title,
    template: `%s — ${brand.name}`,
  },
  description,
  applicationName: brand.name,
  keywords: [
    "Helix",
    "AI coding agent",
    "AI orchestrator",
    "atomic work breakdown",
    "code review",
    "developer tools",
    "AI agent",
    "agentic AI",
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: brand.url,
    siteName: brand.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@helix",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: brand.url,
  },
  category: "technology",
};

export const viewport: NextViewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};