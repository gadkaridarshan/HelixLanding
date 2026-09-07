// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-384000
 * @helix:story USER-440000
 * @helix:story USER-633000
 * @helix:story USER-868000
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
 * Every piece of UI that surfaces this URL — the visible link text, the
 * badge, the surrounding paragraph, and the accessible name — makes it
 * explicit that:
 *
 *   1. The link goes to a **reference site** (visual / brand reference only).
 *   2. It is **not** the live landing page for this product.
 *   3. The live landing page for this product is a **different site**,
 *      deployed at the URL configured in `lib/brand.ts` (`brand.url`).
 *
 * Visitors should not be misled into thinking that following this link
 * will take them to the deployed version of the site they are currently
 * viewing.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";
const REFERENCE_SITE_HOST = "helix-ai-orchestrator.vercel.app";
const REFERENCE_SITE_BADGE = "Reference site";
const REFERENCE_SITE_LABEL =
  "Reference site — visual / brand reference only (not the live site)";
const REFERENCE_SITE_DESCRIPTION =
  "This is a reference site used only for visual / brand reference. It is not the live landing page for this product — the live landing page is a different site, deployed at the URL configured in lib/brand.ts.";

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

const COLUMNS: ReadonlyArray<FooterColumn> = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Personas", href: "#personas" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/gadkaridarshan/Helix",
        external: true,
      },
      { label: "Changelog", href: "#changelog" },
      { label: "Docs", href: "#docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "mailto:hello@helix.dev", external: true },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative mt-24 border-t border-white/10 bg-slate-950/80 backdrop-blur-sm " +
        (className ?? "")
      }
    >
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 font-bold text-slate-950"
              >
                H
              </span>
              <span className="text-lg font-semibold text-white">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {brand.description}
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noreferrer noopener",
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hx-divider mt-12" />

        {/* Reference-site pointer — explicit, unambiguous, multi-layered. */}
        <aside
          aria-label="Reference site notice"
          className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
              {REFERENCE_SITE_BADGE}
            </span>
            <span className="text-xs font-medium text-slate-400">
              Not the live site — visual reference only
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {REFERENCE_SITE_DESCRIPTION}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Reference site:{" "}
            <a
              href={REFERENCE_SITE_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={REFERENCE_SITE_LABEL}
              title={REFERENCE_SITE_LABEL}
              className="font-medium text-amber-300 underline-offset-4 hover:underline"
            >
              {REFERENCE_SITE_HOST}
              <span aria-hidden="true" className="ml-1">
                ↗
              </span>
            </a>
            <span className="mx-2 text-slate-600">·</span>
            Live site for this product:{" "}
            <a
              href={brand.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${brand.name} — live site (${brand.url})`}
              className="font-medium text-cyan-300 underline-offset-4 hover:underline"
            >
              {brand.url}
            </a>
          </p>
        </aside>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>
            Built for engineers who refuse to ship a 1,000-line AI diff.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;