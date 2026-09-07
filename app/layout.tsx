// helix: app/layout.tsx
/**
 * @helix:story USER-915000
 *
 * Root layout for the Helix landing site.
 *
 * Owns:
 *   • HTML document scaffold (`<html>`, `<body>`).
 *   • Brand-aware default + template metadata for SEO.
 *   • Open Graph + Twitter card metadata for social sharing.
 *   • Canonical URL + favicon/manifest wiring.
 *   • Self-hosted Inter (UI) + JetBrains Mono (code/wordmark) via
 *     `next/font/google`.
 *   • Site chrome: sticky `<Navbar />` and `<Footer />` wrap every
 *     route consistently.
 *
 * All section pages are server components; no client JS is shipped
 * for the chrome. FinalCTA / Navbar mobile menu use small `"use
 * client"` islands where needed.
 *
 * --------------------------------------------------------------------------
 * Deploy instructions — USER-915000 (Final integration polish / Vercel)
 * --------------------------------------------------------------------------
 *
 * ## Prerequisites
 *
 *   • Node.js ≥ 20.x
 *   • npm ≥ 10.x (pnpm / yarn also work — commands below use npm)
 *   • Vercel CLI ≥ 34.x (`npm i -g vercel`)
 *   • A Vercel account with the `HelixLanding` project already created
 *     (one-time setup; the CLI will create it on first deploy if missing)
 *   • Optional: a custom domain pointed at the project
 *
 * ## 1. Install dependencies
 *
 *     npm install
 *
 * ## 2. Verify production build locally
 *
 *     npm run type-check    # expect: "0 errors"
 *     npm run lint          # expect: no errors
 *     npm run build         # expect: green build, .next/ produced
 *     npm run start         # boots the optimized build on :3000
 *
 * ## 3. Confirm the SEO / social surface is wired
 *
 * After `npm run dev` (or `npm run start`), verify these endpoints:
 *
 *     curl -sI http://localhost:3000/                          | head -n 1
 *     curl -s  http://localhost:3000/                          | grep -E '<title|description'
 *     curl -sI http://localhost:3000/sitemap.xml               | head -n 1
 *     curl -sI http://localhost:3000/robots.txt                | head -n 1
 *     curl -sI http://localhost:3000/og.svg                    | head -n 1
 *     curl -sI http://localhost:3000/favicon.svg               | head -n 1
 *     curl -sI http://localhost:3000/site.webmanifest          | head -n 1
 *
 * Expected success checks:
 *   • `<title>` contains `Helix — Atomic work-breakdown for AI coding agents`
 *   • `<meta name="description">` is present and non-empty
 *   • `og:image` resolves to `${SITE_URL}/og.svg`
 *   • `twitter:card` is `summary_large_image`
 *   • `sitemap.xml` returns 200 and lists `${SITE_URL}/`
 *   • `robots.txt` returns 200 and allows root crawling
 *
 * ## 4. Deploy to Vercel (production)
 *
 *     vercel login
 *     vercel link --yes                  # one-time: creates .vercel/
 *     vercel pull --yes --environment=production   # optional: sync env
 *     vercel deploy --prebuilt --prod    # uses .next/ from `npm run build`
 *     # OR, for a full one-shot pipeline:
 *     vercel --prod
 *
 * `vercel --prod` will:
 *   1. Upload the repo to Vercel
 *   2. Run `npm run build` (uses Next.js 16 App Router)
 *   3. Apply `content/vercel.json` (security headers + cache policies)
 *   4. Promote the deployment to production
 *
 * ## 5. Post-deploy verification
 *
 *     PROD_URL="https://helix-ai-orchestrator.vercel.app"
 *     curl -sI "$PROD_URL/"                 | head -n 1
 *     curl -sI "$PROD_URL/sitemap.xml"      | head -n 1
 *     curl -sI "$PROD_URL/robots.txt"       | head -n 1
 *     curl -sI "$PROD_URL/og.svg"           | head -n 1
 *     curl -sI "$PROD_URL/favicon.svg"      | head -n 1
 *     curl -s  "$PROD_URL/"                 | grep -E 'og:title|twitter:card'
 *
 * Then visit `https://www.opengraph.xyz/` and paste the prod URL —
 * the OG/Twitter preview must show the brand wordmark and tagline.
 *
 * ## 6. README polish
 *
 * `README.md` and `public/landing/README.md` mirror the same content.
 * They document the sections shipped, the stack, and the deploy flow.
 *
 * ## Short answer
 *
 * To ship this card:
 *
 *   1. `npm install`
 *   2. `npm run build`  (must be green; type-check must be 0 errors)
 *   3. `vercel --prod`  (uses `content/vercel.json` for headers)
 *   4. Verify `/sitemap.xml`, `/robots.txt`, `/og.svg`, and `/favicon.svg`
 *      all return 200 against the production URL.
 *
 * The landing page is production-ready when the build is green, the
 * production URL serves 200, and the OG preview resolves to the brand
 * wordmark with the configured tagline.
 */
import type { Metadata, Viewport } from "next";
import * as React from "react";

import { fontVariables } from "@/app/fonts";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { brand } from "@/lib/brand";

import "@/app/globals.css";

const SITE_URL = brand.url;
const OG_IMAGE_PATH = "/og.svg";
const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: brand.name,
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.shortDescription,
  keywords: [
    "Helix",
    "AI orchestrator",
    "AI coding agent",
    "atomic work breakdown",
    "multi-agent orchestration",
    "AI engineering workflow",
    "code review automation",
    "developer productivity",
    "Helix AI",
  ],
  authors: [{ name: brand.name, url: SITE_URL }],
  creator: brand.name,
  publisher: brand.name,
  category: "developer tools",
  classification: "AI Developer Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.shortDescription,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: brand.twitterHandle,
    creator: brand.twitterHandle,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.shortDescription,
    images: {
      url: OG_IMAGE_URL,
      alt: `${brand.name} — ${brand.tagline}`,
    },
  },
  other: {
    "og:brand": brand.name,
    "twitter:domain": new URL(SITE_URL).hostname,
  },
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
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-950 text-ink-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-brand-500 focus:px-3 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}