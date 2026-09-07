// helix: components/sections/Navbar.tsx
/**
 * @helix:story USER-303000
 *
 * Navbar — sticky top bar with brand mark, section anchors, and the
 * primary "Get early access" CTA. Server-rendered; no client state.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

const NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps): React.ReactElement {
  return (
    <header
      className={
        "sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-md " +
        (className ?? "")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2"
          aria-label={`${brand.name} home`}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 font-bold"
          >
            H
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            {brand.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-slate-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#cta"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}

export default Navbar;