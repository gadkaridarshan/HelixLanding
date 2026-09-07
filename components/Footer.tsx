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

interface SocialLink {
  label: string;
  href: string;
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

const socialLinks: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
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
              className="inline-flex items-center text-sm text-ink-100 transition hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded-sm"
              {...(link.external
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
            >
              <span>{link.label}</span>
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
  const hostname = (() => {
    try {
      return new URL(brand.url).hostname;
    } catch {
      return brand.url;
    }
  })();

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
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950 shadow-lg shadow-brand-500/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="presentation"
                >
                  <circle cx="12" cy="12" r="2.5" />
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.5"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.5"
                    transform="rotate(120 12 12)"
                  />
                </svg>
              </span>
              <span className="font-mono text-base font-semibold tracking-tight">
                {brand.name}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm text-ink-200/80">
              {brand.description}
            </p>

            <ul role="list" className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.name} on ${social.label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-ink-100 transition hover:border-brand-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                    <span className="sr-only">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7"
          >
            {columns.map((column) => (
              <ColumnLinks key={column.title} column={column} />
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-300/70">
            © {year} {brand.name}. Hosted on{" "}
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-100 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded-sm"
            >
              {hostname}
            </a>
            .
          </p>

          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deployed on Vercel"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-100 transition hover:border-brand-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M24 22.525H0L12 1.475 24 22.525Z" />
            </svg>
            <span className="font-medium">Deployed on Vercel</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;