// helix: components/landing/Navbar/Navbar.tsx
/**
 * @helix:story USER-303000
 *
 * Navbar — sticky brand chrome with brand mark, section anchors, and
 * an early-access CTA.
 *
 * Pure server component. Section anchors link to in-page ids declared
 * by each section component.
 */
import * as React from "react";

export interface NavbarProps {
  className?: string;
}

interface NavLink {
  readonly href: string;
  readonly label: string;
}

const links: ReadonlyArray<NavLink> = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#personas", label: "For you" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar({ className }: NavbarProps): React.ReactElement {
  return (
    <header
      className={
        "sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 " +
        (className ?? "")
      }
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold text-white"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-[11px] font-bold text-slate-950"
          >
            H
          </span>
          Helix
        </a>

        <ul className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition hover:text-white focus:outline-none focus-visible:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-cyan-400 to-violet-400 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-violet-300"
        >
          Get early access
        </a>
      </nav>
    </header>
  );
}

export default Navbar;