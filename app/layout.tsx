// helix: app/layout.tsx
/**
 * @helix:story USER-308000
 *
 * Root layout for the Helix landing page. Applies brand fonts to `<html>`,
 * sets the dark color scheme, and mounts the global metadata + viewport
 * for the marketing site.
 *
 * Pure server component. Global CSS (Tailwind v4 + `@theme` brand tokens)
 * is loaded via `app/globals.css`.
 */
import type { Metadata, Viewport } from "next";
import * as React from "react";

import { fontVariables } from "@/app/fonts";
import { brand } from "@/lib/brand";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — Atomic work-breakdown for AI coding agents`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  metadataBase: new URL(brand.url),
  openGraph: {
    title: `${brand.name} — Atomic work-breakdown for AI coding agents`,
    description: brand.description,
    url: brand.url,
    siteName: brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Atomic work-breakdown for AI coding agents`,
    description: brand.description,
  },
  alternates: {
    canonical: brand.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
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
      <body className="min-h-screen bg-ink-950 font-sans text-neutral-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-400 focus:px-3 focus:py-2 focus:text-ink-950"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}