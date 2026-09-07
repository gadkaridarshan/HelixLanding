// helix: app/layout.tsx
/**
 * @helix:story USER-308000
 *
 * Root layout — applies brand fonts to `<html>`, sets the dark color scheme,
 * and mounts the global metadata + viewport for the marketing site.
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