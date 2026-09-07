// helix: app/layout.tsx
/**
 * @helix:story USER-303000
 *
 * Root layout for the Helix landing page. Owns the document chrome,
 * metadata (driven by `lib/brand.ts`), and the global font stack.
 *
 * The `brand.url` value is the **live** deployment URL for this product.
 * `helix-ai-orchestrator.vercel.app` (referenced in the Footer) is a
 * separate, externally-hosted reference deployment and is **not** the
 * live site — see `lib/brand.ts` for the full URL policy.
 */
import type { Metadata, Viewport } from "next";
import * as React from "react";

import { brand } from "@/lib/brand";

import "./globals.css";

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
    "work breakdown",
    "code orchestrator",
    "atomic commits",
    "reviewable PRs",
    "Helix",
  ],
  authors: [{ name: "Helix" }],
  creator: brand.name,
  publisher: brand.name,
  openGraph: {
    type: "website",
    url: brand.url,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    siteName: brand.name,
    images: [
      {
        url: brand.ogImage,
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
    images: [brand.ogImage],
    creator: brand.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}