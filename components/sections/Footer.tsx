// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-384000
 * @helix:story USER-440000
 *
 * Footer — site chrome with link columns, brand mark, and a clearly-labelled
 * reference-site pointer.
 *
 * The reference-site link points to `helix-ai-orchestrator.vercel.app`,
 * which is an externally-hosted Helix deployment used purely as a visual
 * / brand reference. It is **NOT** the live landing page for this product,
 * it is **NOT** deployed from this repository, and the canonical live URL
 * for this product lives in `lib/brand.ts` (`brand.url`).
 *
 * The visible link text, the badge, the surrounding paragraph, and the
 * accessible name all make it explicit that this outbound link goes to a
 * *reference site*, not to the live Helix landing page. Visitors should
 * not be misled into thinking following this link will take them to the
 * deployed version of the site they are currently viewing.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: ReadonlyArray<FooterLink>;
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
  { label: "About Helix", href: "#about" },
  { label: "Changelog", href: "#changelog" },
  { label: "Contact", href: "mailto:hello@helix.dev" },
];

const LEGAL_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Security", href: "#security" },
];

const COLUMNS: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: PRODUCT_LINKS },
  { title: "Company", links: COMPANY_LINKS },
  { title: "Legal", links: LEGAL_LINKS },
];

function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();
  const liveSiteUrl = brand.url;

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950 text-slate-300 " +
        (className ?? "")
      }
      aria-labelledby="footer-heading"
    >
      {/* Decorative gradient backdrop — purely visual, hidden from AT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]"
      />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
        <h2 id="footer-heading" className="sr-only">
          Site footer
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + reference-site pointer */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-lg shadow-cyan-500/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(120 12 12)"
                  />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                {brand.name}
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {brand.description}
            </p>

            {/* Reference-site block — explicitly NOT the live landing page */}
            <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                  Reference site
                </span>
                <span className="text-xs font-medium text-amber-200/90">
                  External — not this product's live site
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                The link below goes to an external Helix deployment used
                purely as a visual / brand reference. It is{" "}
                <strong className="font-semibold text-white">
                  not
                </strong>{" "}
                the live landing page for this product and is{" "}
                <strong className="font-semibold text-white">
                  not
                </strong>{" "}
                deployed from this repository. You are currently viewing{" "}
                <span className="font-mono text-cyan-300">{liveSiteUrl}</span>
                .
              </p>

              <a
                href={REFERENCE_SITE_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit the external Helix reference site (opens in a new tab) — not the live landing page for this product"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-amber-200 underline decoration-amber-400/40 underline-offset-4 transition hover:text-amber-100 hover:decoration-amber-300"
              >
                View Helix reference site
                <span aria-hidden="true" className="text-amber-300">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
          >
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => {
                    const external = link.external ?? isExternal(link.href);
                    return (
                      <li key={`${column.title}:${link.label}`}>
                        <a
                          href={link.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer noopener" : undefined}
                          className="text-sm text-slate-400 transition hover:text-white"
                        >
                          {link.label}
                          {external ? (
                            <span aria-hidden="true" className="ml-1 text-slate-500">
                              ↗
                            </span>
                          ) : null}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              Live site:{" "}
              <span className="font-mono text-slate-400">{liveSiteUrl}</span>
            </span>
            <span aria-hidden="true" className="text-slate-700">
              •
            </span>
            <span>
              Reference site:{" "}
              <span className="font-mono text-slate-400">
                helix-ai-orchestrator.vercel.app
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;