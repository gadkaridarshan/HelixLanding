// helix: app/layout.tsx
/**
 * @helix:story USER-303000
 *
 * Root layout for the Helix landing site.
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
    "code orchestrator",
    "atomic work-breakdown",
    "AI code review",
    "automated PRs",
    "Helix",
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  alternates: {
    canonical: brand.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1020",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="hx-body antialiased">
        <a
          href="#main"
          className="hx-skip-link"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}