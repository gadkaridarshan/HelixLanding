// helix: components/landing/Navbar/Navbar.tsx
/**
 * @helix:story USER-303000
 *
 * Navbar — sticky brand mark + section anchors + early-access CTA.
 * Becomes opaque on scroll so it stays legible over the hero gradient.
 */
"use client";

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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent")
      }
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-center gap-2"
          aria-label={`${brand.name} — home`}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            H
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            {brand.name}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/gadkaridarshan/Helix"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden hx-btn-secondary sm:inline-flex"
          >
            GitHub
          </a>
          <a href="#cta" className="hx-btn-primary">
            Request early access
          </a>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;