// helix: components/sections/Navbar.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-574000
 * @helix:story USER-440000
 *
 * Navbar — sticky top bar with the brand mark, in-page section anchors,
 * and two distinct call-to-action buttons:
 *
 *   1. "Live site" — opens `brand.url`, which is the **actual live
 *      landing page** for this product (deployed from this repo).
 *
 *   2. "Reference site" — opens the externally-hosted reference deployment
 *      at `https://helix-ai-orchestrator.vercel.app`, which is a visual /
 *      brand reference only and is **not** the live landing page. This
 *      button is clearly labelled so visitors are never led to believe
 *      it is the deployed version of the site they are viewing.
 *
 * The two links are intentionally kept separate so the "Live site" CTA
 * can never silently send visitors to the reference / orchestrator app.
 */
import * as React from "react";

import { brand } from "@/lib/brand";
import { Container } from "@/components/ui/Container";

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";
const REFERENCE_SITE_LABEL =
  "Reference site — visual / brand reference only (not the live landing page)";

export interface NavbarLink {
  readonly label: string;
  readonly href: string;
}

export interface NavbarProps {
  className?: string;
}

const LINKS: ReadonlyArray<NavbarLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar({ className }: NavbarProps): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={
        "sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md " +
        (className ?? "")
      }
    >
      <Container className="flex h-12 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2 text-white"
          aria-label={`${brand.name} — home`}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 font-bold"
          >
            H
          </span>
          <span className="text-base font-semibold tracking-tight">
            {brand.name}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${brand.name} — open the live landing site`}
            className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
          >
            <span aria-hidden="true">↗</span>
            <span>Live site</span>
          </a>
          <a
            href={REFERENCE_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={REFERENCE_SITE_LABEL}
            title={REFERENCE_SITE_LABEL}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-4 items-center rounded-full bg-amber-400/20 px-1.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200"
            >
              Ref
            </span>
            <span>Reference site</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-slate-950/95 md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${brand.name} — open the live landing site`}
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-950"
              >
                <span aria-hidden="true">↗</span>
                <span>Live site</span>
              </a>
              <a
                href={REFERENCE_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={REFERENCE_SITE_LABEL}
                title={REFERENCE_SITE_LABEL}
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-4 items-center rounded-full bg-amber-400/20 px-1.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200"
                >
                  Ref
                </span>
                <span>Reference site</span>
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;