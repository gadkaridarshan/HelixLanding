// helix: components/sections/Navbar.tsx
/**
 * @helix:story USER-63000
 *
 * Navbar — sticky brand mark, section anchors, early-access CTA.
 *
 * Pure server component. Renders the desktop nav plus a native
 * `<details>` disclosure for mobile so the marketing site ships
 * zero client JS for the chrome.
 */
import * as React from "react";

import { brand } from "@/lib/brand";
import { Button } from "@/components/ui/Button";

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
        "sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 " +
        (className ?? "")
      }
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-ink-50"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950 shadow-[0_4px_20px_-4px_rgba(34,211,238,0.5)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4c4 8 12 8 16 0M4 20c4-8 12-8 16 0"
              />
            </svg>
          </span>
          <span className="text-base font-semibold tracking-tight">
            {brand.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-300 transition-colors hover:bg-white/5 hover:text-ink-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            href={brand.githubUrl}
            variant="ghost"
            size="sm"
            external
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.01-.02-1.99-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Star
          </Button>
          <Button href="#final-cta" variant="primary" size="sm">
            Get early access
          </Button>
        </div>

        {/* Mobile disclosure */}
        <details className="md:hidden">
          <summary
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md text-ink-200 hover:bg-white/5 hover:text-ink-50"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute left-0 right-0 top-full mt-2 border-b border-white/10 bg-slate-950/95 backdrop-blur">
            <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink-200 hover:bg-white/5 hover:text-ink-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button
                  href="#final-cta"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Get early access
                </Button>
              </li>
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}

export default Navbar;