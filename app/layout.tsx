// helix: app/layout.tsx
/**
 * @helix:story USER-176000
 *
 * Root layout — applies the brand fonts to `<html>`, sets the dark color
 * scheme, and mounts the global metadata for the marketing site.
 *
 * Notes:
 *   • This file is a pure server component — no client interactivity.
 *   • The Inter + JetBrains Mono font variables come from `app/fonts.ts`
 *     and are attached to `<html>` so every utility class that resolves
 *     `var(--font-inter)` / `var(--font-jetbrains-mono)` (e.g.
 *     `font-sans`, `font-mono`) inherits them.
 *   • Global CSS — including Tailwind v4 + the `@theme` brand tokens —
 *     is loaded via `app/globals.css`.
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
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050a14",
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
    <html
      lang="en"
      className={fontVariables}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}