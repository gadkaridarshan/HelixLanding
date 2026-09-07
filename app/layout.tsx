// helix: app/layout.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-969000
 *
 * Root layout for the Helix landing page.
 *
 * Owns:
 *   • The document chrome (<html>, <head>, <body>).
 *   • Metadata + Open Graph + Twitter card (driven by `lib/brand.ts`).
 *   • The global font stack — Inter (UI) + JetBrains Mono (code),
 *     wired through `next/font/google` with CSS variables so they
 *     are available everywhere (including `app/globals.css`).
 *
 * Sections are composed by `app/page.tsx`; this file only owns the
 * shell.
 */
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import * as React from "react";

import { brand } from "@/lib/brand";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    creator: brand.twitter,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: brand.url },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#05060d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} hx-bg`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-dvh bg-[#05060d] text-slate-100">
        {children}
      </body>
    </html>
  );
}