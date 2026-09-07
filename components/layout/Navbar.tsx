// helix: components/layout/Navbar.tsx
/**
 * @helix:story USER-986000
 *
 * Navbar — top-level site navigation. Server component; the only
 * interactivity (mobile menu) is delegated to a small client island
 * landing in a follow-up card.
 */

import type { ReactElement } from "react";

import { brand } from "@/lib/brand";

export function Navbar(): ReactElement {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="text-sm font-semibold tracking-wide text-ink-50"
        >
          {brand.name}
        </a>
        <ul className="hidden items-center gap-6 text-sm text-ink-300 sm:flex">
          <li>
            <a className="hover:text-ink-50" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="hover:text-ink-50" href="#how-it-works">
              How it works
            </a>
          </li>
          <li>
            <a className="hover:text-ink-50" href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;