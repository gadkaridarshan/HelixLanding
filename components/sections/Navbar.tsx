// helix: components/sections/Navbar.tsx
/**
 * @helix:story USER-23000
 *
 * Navbar — sticky brand mark, section anchors, early-access CTA.
 *
 * Pure server component. The mobile menu uses a tiny client island
 * (optional) — for now we render the desktop nav and rely on a
 * native `<details>` disclosure for mobile.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

export interface NavbarProps {
  className?: string;
}

interface NavLink {
  label: string;
  href: string;
}

const navLinks: ReadonlyArray<NavLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar({ className }: NavbarProps): React.ReactElement {
  return (
    <header
      className={
        "sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur " +
        (className ?? "")
      }
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="inline-flex items-center gap-2 font-mono text-base font-semibold text-white"
        >
          <span
            aria-hidden="true"
            className="inline-block h-5 w-5 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500"
          />
          {brand.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={brand.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline sm:inline"
          >
            GitHub
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-pill bg-white px-4 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Get early access
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;