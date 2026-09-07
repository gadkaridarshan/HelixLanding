// helix: app/layout.tsx
/**
 * @helix:story USER-217000
 * @helix:story USER-986000
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
    default: `${brand.name} — Atomic Work-Breakdown Orchestrator`,
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
    title: `${brand.name} — Atomic Work-Breakdown Orchestrator`,
    description: brand.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${brand.name} — Atomic Work-Breakdown Orchestrator`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Atomic Work-Breakdown Orchestrator`,
    description: brand.description,
    images: ["/og-image.svg"],
    creator: brand.twitter,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
  category: "technology",
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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ink-950 font-sans text-ink-50 antialiased">
        {children}
      </body>
    </html>
  );
}