// helix: components/landing/Footer.tsx
/**
 * @helix:story USER-303000
 *
 * Footer — minimal site chrome and secondary navigation.
 */
import * as React from "react";
import { brand } from "@/lib/brand";

export function Footer(): React.ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-cyan to-brand-violet text-brand-ink font-bold">
            H
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{brand.name}</p>
            <p className="text-xs text-brand-muted">{brand.tagline}</p>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-muted">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a
            href={brand.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </nav>
        <p className="text-xs text-brand-muted">
          © {year} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;