// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-616000
 *
 * Footer — site chrome with link columns, brand mark, and a clearly-labelled
 * reference-site pointer.
 *
 * The reference-site link points to `helix-ai-orchestrator.vercel.app`,
 * which is an externally-hosted Helix deployment used purely as a visual
 * / brand reference. It is NOT the live landing page for this product,
 * it is NOT deployed from this repository, and the canonical live URL
 * for this product lives in `lib/brand.ts` (`brand.url`).
 *
 * An inline note is rendered next to the reference-site link so visitors
 * are not misled into thinking they are navigating to the live Helix site.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";
const REFERENCE_SITE_NOTE =
  "Reference site — visual / brand reference only, not the deployed Helix site.";

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface FooterProps {
  className?: string;
}

const PRODUCT_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

const COMPANY_LINKS: ReadonlyArray<FooterLink> = [
  { label: "GitHub", href: brand.github, external: true },
  { label: "Twitter", href: brand.twitter, external: true },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  return (
    <footer
      className={
        "border-t border-white/10 bg-slate-950/60 backdrop-blur-sm " +
        (className ?? "")
      }
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500"
                aria-hidden="true"
              />
              <span className="text-base font-semibold text-white">
                {brand.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              {brand.description}
            </p>

            {/* Reference-site pointer with inline clarifying copy. */}
            <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300/80">
                Reference site
              </p>
              <a
                href={REFERENCE_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-medium text-amber-200 underline decoration-amber-400/40 underline-offset-4 transition-colors hover:text-amber-100"
              >
                {REFERENCE_SITE_URL}
              </a>
              <p className="mt-2 text-xs leading-relaxed text-amber-200/70">
                {REFERENCE_SITE_NOTE} The live {brand.name} site is deployed
                from this repository and its canonical URL is configured in
                {" "}
                <code className="rounded bg-slate-900/60 px-1 py-0.5 text-[11px] text-amber-100/90">
                  lib/brand.ts
                </code>
                {" "}
                (<code className="rounded bg-slate-900/60 px-1 py-0.5 text-[11px] text-amber-100/90">
                  brand.url
                </code>
                ).
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Product
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Live site: {" "}
            <span className="text-slate-400">{brand.url}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;