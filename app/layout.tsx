// helix: app/layout.tsx
/**
 * @helix:story USER-308000
 *
 * Root layout — applies brand fonts to `<html>`, sets the dark color scheme,
 * and mounts the global metadata + viewport for the marketing site.
 *
 * Metadata + viewport are sourced from `./layout.metadata` so the SEO
 * surface can evolve without touching the layout shell.
 */
import type { ReactElement, ReactNode } from "react";

import { fontVariables } from "@/app/fonts";
import { metadata, viewport } from "@/app/layout.metadata";

import "@/app/globals.css";

export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}