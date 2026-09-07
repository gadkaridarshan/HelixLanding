// helix: components/landing/Navbar.tsx
/**
 * @helix:story USER-303000
 *
 * Navbar — sticky top nav with brand mark and section anchors.
 * Server-rendered (no client interactivity required).
 */
import * as React from "react";
import { brand } from "@/lib/brand";

const links: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar(): React.ReactElement {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/70">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#main" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-cyan to-brand-violet text-brand-ink text-sm font-bold">
            H
          </span>
          <span className="text-sm font-semibold text-white">
            {brand.name}
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-brand-muted transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center rounded-md bg-brand-cyan/15 px-3 py-1.5 text-sm font-semibold text-brand-cyan ring-1 ring-brand-cyan/30 transition hover:bg-brand-cyan/25"
        >
          Get access
        </a>
      </div>
    </header>
  );
}

export default Navbar;