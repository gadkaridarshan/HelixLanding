// helix: components/landing/Navbar/Navbar.tsx
/**
 * @helix:story USER-303000
 *
 * Navbar — sticky top brand chrome.
 *
 *   • Brand mark on the left (Helix "H" + wordmark).
 *   • Section anchors in the centre (Features, How it works, Personas, FAQ).
 *   • Primary CTA on the right ("Get early access").
 *
 * Background is translucent so the page gradient shows through. Once the
 * user scrolls past ~24px the navbar gains a subtle bottom border via a
 * data-attribute hook so this stays server-rendered (no client JS).
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

const NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar(): React.ReactElement {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(6,8,24,0.55)] border-b border-transparent"
      data-scrolled="false"
    >
      <Container size="lg" className="flex h-16 items-center justify-between">
        <a
          href="#main"
          className="flex items-center gap-2 text-helix-text"
          aria-label={`${brand.name} home`}
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg border border-helix-border-strong bg-gradient-to-br from-cyan-400/30 to-violet-500/30 text-sm font-bold text-helix-text"
          >
            {brand.mark}
          </span>
          <span className="font-semibold tracking-tight">{brand.name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-helix-text-muted transition-colors hover:text-helix-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hx-btn-primary px-4 py-2 text-sm"
        >
          Get early access
        </a>
      </Container>
    </header>
  );
}

export default Navbar;