// helix: app/components/Navbar.tsx
import * as React from "react";

import { brand } from "@/lib/brand";
import { cn } from "@/components/ui/cn";

export interface NavbarProps {
  className?: string;
}

interface NavLink {
  readonly label: string;
  readonly href: string;
}

const NAV_LINKS: ReadonlyArray<NavLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar({ className }: NavbarProps): React.ReactElement {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-ink-50"
          aria-label={`${brand.name} home`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          {brand.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-ink-50 focus-visible:text-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.githubUrl}
            className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-ink-50 sm:inline-flex"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;