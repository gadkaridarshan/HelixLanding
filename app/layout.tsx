// helix: app/layout.tsx
/**
 * @helix:story USER-217000
 *
 * Root layout — applies global styles, fonts, and metadata for the entire
 * Helix landing surface. Metadata here is the source of truth for SEO,
 * OpenGraph, Twitter cards, and favicon resolution.
 */

import type { Metadata, Viewport } from "next";
import type { ReactElement, ReactNode } from "react";

import "./globals.css";

const SITE_URL = "https://helix-ai-orchestrator.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Helix — Atomic Work-Breakdown Orchestrator",
    template: "%s · Helix",
  },
  description:
    "Plan, write, and ship code in atomic, reviewable steps. Helix is the AI coding orchestrator that respects your files, your conventions, and your reviewers.",
  applicationName: "Helix",
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
    siteName: "Helix",
    title: "Helix — Atomic Work-Breakdown Orchestrator",
    description:
      "Plan, write, and ship code in atomic, reviewable steps. Helix is the AI coding orchestrator that respects your files, your conventions, and your reviewers.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Helix — Atomic Work-Breakdown Orchestrator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix — Atomic Work-Breakdown Orchestrator",
    description:
      "Plan, write, and ship code in atomic, reviewable steps. Helix is the AI coding orchestrator that respects your files, your conventions, and your reviewers.",
    images: ["/og-image.svg"],
    creator: "@helix",
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
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}