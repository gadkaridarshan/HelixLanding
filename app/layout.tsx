// helix: app/layout.tsx
/**
 * @helix:story USER-285000
 *
 * Root layout — wires the document shell, fonts, and global CSS.
 *
 * The font registration lives in `app/fonts.ts` so this file stays
 * focused on HTML/Metadata concerns. `globals.css` provides the
 * Tailwind v4 base + theme tokens.
 */
import type { Metadata, Viewport } from "next";
import * as React from "react";

import { fontSans, fontMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Helix · AI orchestrator",
    template: "%s · Helix",
  },
  description:
    "Helix is the AI orchestrator that turns a single prompt into atomic, verified code units — so your main branch stays green.",
  metadataBase: new URL("https://helix-ai-orchestrator.vercel.app"),
  openGraph: {
    title: "Helix · AI orchestrator",
    description:
      "Ship features, not diffs. Helix turns prompts into atomic, verified code units.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
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
      className={`${fontSans.variable} ${fontMono.variable} h-full`}
    >
      <body className="min-h-full bg-slate-950 text-ink-50 antialiased">
        {children}
      </body>
    </html>
  );
}