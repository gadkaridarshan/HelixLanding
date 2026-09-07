// helix: app/layout.tsx
/**
 * @helix:story USER-303000
 *
 * Root layout — sets up the html shell, fonts, theme metadata, and
 * the global stylesheet. Per Next.js App Router conventions this is
 * the only place `<html>` and `<body>` live.
 */
import type { Metadata, Viewport } from "next";
import type { ReactElement, ReactNode } from "react";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/app/components/Navbar";
import { brand, ogImageUrl } from "@/lib/brand";

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
    "Helix",
    "AI orchestrator",
    "atomic units",
    "code review",
    "AI coding agent",
    "developer tools",
    "verified code",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: brand.url,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    images: [
      {
        url: ogImageUrl,
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
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): ReactElement {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#05060a] font-sans text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}