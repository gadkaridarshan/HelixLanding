// helix: components/Footer.tsx
/**
 * @helix:story USER-308000
 *
 * Footer — site chrome: brand mark, link columns, reference-site badge.
 *
 * Self-contained server component. Surfaces the canonical live URL
 * (`brand.url`) and a clearly-labelled reference-site pointer for
 * `helix-ai-orchestrator.vercel.app`.
 */
import * as React from "react";

import { brand } from "@/lib/brand";
import { cn } from "@/components/ui/cn";

export interface FooterProps {
  className?: string;
}

interface Column {
  heading: string;
  links: ReadonlyArray<{ label: string; href: string; external?: boolean }>;
}

const COLUMNS: readonly Column[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "For your role", href: "#personas" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Project",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/gadkaridarshan/Helix",
        external: true,
      },
      {
        label: "Reference site",
        href: "https://helix-ai-orchestrator.vercel.app",
        external: true,
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Open source license", href: "https://github.com/gadkaridarshan/Helix/blob/main/LICENSE" },
    ],
  },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer
      aria-labelledby="footer-heading"
      className={cn(
        "relative isolate border-t border-white/5 bg-ink-950",
        className,
      )}
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a
              href={brand.url}
              className="inline-flex items-center gap-2 text-white"
              aria-label={`${brand.name} home`}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-pill bg-gradient-to-br from-brand-400 to-accent-400 text-ink-950 font-bold"
              >
                H
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                {brand.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              {brand.description}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand-400"
              />
              Live:&nbsp;
              <a
                href={brand.url}
                className="font-medium text-white underline-offset-4 hover:underline"
              >
                {brand.url.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav
              key={col.heading}
              aria-label={col.heading}
              className="text-sm"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noreferrer noopener",
                          }
                        : {})}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      {link.label}
                      {link.external ? (
                        <span aria-hidden="true" className="ml-1 text-neutral-500">
                          ↗
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {brand.name}. Open source under the repository license.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-300" />
            <span>
              <a
                href="https://helix-ai-orchestrator.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                className="text-neutral-400 underline-offset-4 hover:text-white hover:underline"
              >
                helix-ai-orchestrator.vercel.app
              </a>
              &nbsp;is a visual / brand reference — not deployed from this repo.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;