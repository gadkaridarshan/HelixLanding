// helix: app/components/Navbar.tsx
/**
 * @helix:story USER-303000
 *
 * Navbar — top navigation. Sticky, glassy, and readable on dark
 * backgrounds. Pure server component (no client-side state needed
 * for the marketing surface).
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface NavbarProps {
  className?: string;
}

const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#personas", label: "Personas" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar({ className }: NavbarProps): React.ReactElement {
  return (
    <header
      className={
        "sticky top-0 z-40 w-full border-b border-white/5 bg-[#05060a]/70 backdrop-blur supports-[backdrop-filter]:bg-[#05060a]/50 " +
        (className ?? "")
      }
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between gap-4"
        >
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-black"
            >
              H
            </span>
            <span>{brand.name}</span>
          </a>
          <ul
            role="list"
            className="hidden items-center gap-6 text-sm text-white/70 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white transition hover:bg-white/[0.08] sm:inline-flex"
            >
              GitHub
            </a>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-cyan-300"
            >
              Get started
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;