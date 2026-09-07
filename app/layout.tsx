// helix: app/layout.tsx
/**
 * @helix:story USER-63000
 *
 * Root layout — wires fonts, global stylesheet, SEO / OG / Twitter
 * metadata, and the brand-themed HTML scaffold.
 *
 * Metadata is built from `lib/brand.ts` so title, description, OG
 * image, and canonical URL all share one source of truth.
 */
import type { Metadata, Viewport } from "next";
import * as React from "react";

import { fontVariables } from "@/app/fonts";
import { brand } from "@/lib/brand";

import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  keywords: [
    "AI coding agents",
    "atomic work-breakdown",
    "code orchestrator",
    "Helix",
    "automated code review",
    "AI PRs",
    "agentic workflows",
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  alternates: {
    canonical: "/",
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}