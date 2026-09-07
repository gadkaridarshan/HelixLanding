// helix: components/layout/Navbar.tsx
/**
 * @helix:story USER-986000
 *
 * Navbar — top-level navigation chrome. Placeholder logo + nav links
 * pointing at the section anchors. Full mobile menu and CTA land with
 * the Navbar card.
 */
import type { ReactElement } from "react";

import { brand } from "@/lib/brand";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#personas", label: "Personas" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar(): ReactElement {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold text-ink-50"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-ink-950">
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
          className="rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:opacity-90"
        >
          Get started
        </a>
      </div>
    </header>
  );
}

export default Navbar;