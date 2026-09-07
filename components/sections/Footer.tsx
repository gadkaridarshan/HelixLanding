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
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 font-bold"
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

          {COLUMNS.map((col) => (
            <nav
              key={col.title}
              aria-label={col.title}
              className="text-sm"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 transition hover:text-white"
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <span
              className="inline-flex shrink-0 items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300"
              aria-hidden="true"
            >
              {REFERENCE_SITE_BADGE}
            </span>
            <div className="text-sm leading-relaxed text-slate-300">
              <p className="font-semibold text-white">
                This is{" "}
                <span className="underline decoration-amber-400/60 underline-offset-2">
                  not
                </span>{" "}
                the live landing page for {brand.name}.
              </p>
              <p className="mt-2 text-slate-400">
                The link below goes to a{" "}
                <strong className="font-semibold text-slate-200">
                  reference site
                </strong>{" "}
                ({REFERENCE_SITE_HOST}) used only as a visual / brand
                reference. The live landing page for this product is a{" "}
                <strong className="font-semibold text-slate-200">
                  different site
                </strong>{" "}
                — it is not deployed from this repository.
              </p>
              <p className="mt-3">
                <a
                  href={REFERENCE_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={REFERENCE_SITE_LABEL}
                  title={REFERENCE_SITE_LABEL}
                  className="inline-flex items-center gap-1.5 text-cyan-300 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-200 hover:decoration-cyan-300"
                >
                  <span>
                    View reference site: {REFERENCE_SITE_HOST}
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </p>
              <p className="mt-3 text-xs text-slate-500">
                <span className="sr-only">{REFERENCE_SITE_DESCRIPTION}</span>
                <span aria-hidden="true">
                  Reference site — visual / brand reference only. Not the live
                  landing page.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>
            Live site:{" "}
            <a
              href={brand.url}
              className="text-slate-400 underline decoration-slate-500/50 underline-offset-4 transition hover:text-white hover:decoration-slate-300"
            >
              {brand.url.replace(/^https?:\/\//, "")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;