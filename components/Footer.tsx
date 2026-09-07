// helix: components/Footer.tsx
/**
 * @helix:story USER-82000
 *
 * Footer — site-wide footer with brand wordmark, Product / Resources /
 * Company / Legal link columns, social links, copyright, and a
 * "Built with Helix" wordmark.
 *
 * Pure server component. Brand surface (name, canonical URL,
 * GitHub URL) is sourced from `lib/brand.ts` so the same identity
 * shows up in `<title>`, OG cards, and this footer without
 * duplication.
 *
 * Lives at the canonical path `components/Footer.tsx` (this file).
 * Re-export shims at `components/sections/Footer.tsx` and
 * `app/components/sections/Footer.tsx` point here so both import
 * paths resolve to the same implementation.
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
    label: "Live site",
    href: brand.url,
    external: true,
  },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "Contact", href: `mailto:${brand.contactEmail}` },
  { label: "Reference", href: brand.referenceUrl, external: true },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
];

function SocialIcon({ label }: { label: string }): React.ReactElement {
  if (label === "GitHub") {
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        />
      </svg>
    );
  }
  // Generic fallback — a simple dot.
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function VercelBadge(): React.ReactElement {
  return (
    <a
      href="https://vercel.com?utm_source=helix-landing&utm_medium=badge"
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-200 transition hover:bg-white/10 hover:text-white"
      aria-label="Powered by Vercel"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-3.5 w-3.5"
        fill="currentColor"
      >
        <path d="M12 2 1 21h22L12 2Z" />
      </svg>
      <span>Deployed on Vercel</span>
    </a>
  );
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950/60 " +
        (className ?? "")
      }
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      {/* Decorative top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
      />

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-2">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-mono text-lg font-semibold text-white"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950"
              >
                {/* Mini atom mark */}
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
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
                    transform="rotate(-60 12 12)"
                  />
                </svg>
              </span>
              {brand.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ink-300">
              {brand.tagline}. The atomic work-breakdown orchestrator for AI
              coding agents — ship small, reviewable PRs.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.title} className="col-span-1 md:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noreferrer noopener",
                          }
                        : {})}
                      className="text-sm text-ink-200 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-ink-400">
              Built with {brand.name}
            </span>
            <VercelBadge />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;