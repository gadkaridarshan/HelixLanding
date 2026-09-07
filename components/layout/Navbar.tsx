// helix: components/layout/Navbar.tsx
/**
 * @helix:story USER-986000
 *
 * Navbar — top-level navigation chrome. Sticky header with the brand
 * mark, primary nav links (anchors to landing sections), and a single
 * primary CTA button. Designed to render cleanly against the brand
 * gradient background defined in `app/globals.css`.
 */
import type { ReactElement } from "react";

import { brand } from "@/lib/brand";

const NAV_LINKS: ReadonlyArray<{ readonly href: string; readonly label: string }> = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#personas", label: "Personas" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar(): ReactElement {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-brand-ink/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold text-ink-50"
          aria-label={`${brand.name} home`}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent text-brand-ink"
          >
            ✦
          </span>
          {brand.name}
        </a>
        <nav aria-label="Primary" className="hidden gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-300 transition hover:text-ink-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent px-4 py-2 text-sm font-semibold text-brand-ink transition hover:opacity-90"
        >
          Get started
        </a>
      </div>
    </header>
  );
}

export default Navbar;