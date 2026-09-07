// helix: app/layout.tsx
/**
 * @helix:story USER-349000
 *
 * Root layout — applies global styles, fonts, and metadata for the entire
 * Helix landing surface. Metadata here is the source of truth for SEO,
 * OpenGraph, Twitter cards, and favicon resolution.
 */

import type { Metadata, Viewport } from "next";
import type { ReactElement, ReactNode } from "react";

import "./globals.css";
import { brand } from "@/lib/brand";

const SITE_URL = brand.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  keywords: [
    "AI coding orchestrator",
    "code agent",
    "work breakdown",
    "atomic PRs",
    "Helix",
    "developer tools",
  ],
  authors: [{ name: "Helix Team" }],
  creator: "Helix",
  publisher: "Helix",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    images: [
      {
        url: "/landing/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    creator: brand.twitter,
    images: ["/landing/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1020",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}