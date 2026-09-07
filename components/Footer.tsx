// helix: components/Footer.tsx
/**
 * @helix:story USER-82000
 *
 * Footer — site-wide footer with brand wordmark, navigation links,
 * legal links, social links, and a "deployed on Vercel" badge.
 *
 * Pure server component. Brand surface (name, canonical URL, GitHub
 * URL) is sourced from `lib/brand.ts` so the same identity shows up
 * in `<title>`, OG cards, and this footer without duplication.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface FooterProps {
  className?: string;
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: ReadonlyArray<FooterLink>;
}

const productLinks: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

const resourcesLinks: ReadonlyArray<FooterLink> = [
  { label: "GitHub", href: brand.githubUrl, external: true },
  {
    label: "Reference site",
    href: brand.referenceUrl,
    external: true,
  },
  {
    label: "Live site",
    href: brand.url,
    external: true,
  },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Contact", href: `mailto:hello@${new URL(brand.url).hostname}` },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Legal", links: legalLinks },
];

function ColumnLinks({ column }: { column: FooterColumn }): React.ReactElement {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300/70">
        {column.title}
      </h3>
      <ul role="list" className="mt-4 space-y-3">
        {column.links.map((link) => (
          <li key={`${column.title}-${link.label}`}>
            <a
              href={link.href}
              className="text-sm text-ink-100 transition hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded-sm"
              {...(link.external
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
            >
              {link.label}
              {link.external ? (
                <span aria-hidden="true" className="ml-1 text-ink-300/60">
                  ↗
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-labelledby="footer-heading"
      className={
        "relative isolate border-t border-white/5 bg-ink-950/80 backdrop-blur supports-[backdrop-filter]:bg-ink-950/60 " +
        (className ?? "")
      }
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      {/* Subtle gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-64 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-white"
              aria-label={`${brand.name} — back to top`}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 via-brand-500 to-accent-500 font-mono text-sm font-bold text-ink-950 shadow-lg shadow-brand-500/20"
              >
                H
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                {brand.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-200/80">
              {brand.description}
            </p>

            {/* Vercel / OSS badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deploys by Vercel"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-100 transition hover:border-white/20 hover:bg-white/10"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 76 65"
                  className="h-3 w-3"
                  fill="currentColor"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
                <span>Deployed on Vercel</span>
              </a>
              <a
                href={brand.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${brand.name} on GitHub`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-100 transition hover:border-white/20 hover:bg-white/10"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                  />
                </svg>
                <span>Open source</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7"
          >
            {columns.map((column) => (
              <ColumnLinks key={column.title} column={column} />
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-300/70">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-300/70">
            Built with Next.js · Tailwind CSS · TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;