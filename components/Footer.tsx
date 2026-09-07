// helix: components/Footer.tsx
/**
 * @helix:story USER-73000
 * @helix:story USER-303000
 *
 * Footer — site-wide footer with brand mark, navigation columns,
 * social links, and copyright.
 *
 * Pure server component. Brand surface (name, tagline, canonical URL,
 * GitHub URL) is sourced from `lib/brand.ts` so the same identity
 * shows up in `<title>`, OG cards, and this footer without
 * duplication.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface FooterProps {
  className?: string;
}

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

interface FooterColumn {
  readonly title: string;
  readonly links: ReadonlyArray<FooterLink>;
}

interface SocialLink {
  readonly label: string;
  readonly href: string;
}

const PRODUCT_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

const RESOURCES_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Documentation", href: "#docs" },
  { label: "Changelog", href: "#changelog" },
  { label: "Roadmap", href: "#roadmap" },
];

const COMPANY_LINKS: ReadonlyArray<FooterLink> = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#careers" },
];

const LEGAL_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const SOCIAL_LINKS: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
  { label: "Twitter", href: brand.twitterUrl },
  { label: "LinkedIn", href: brand.linkedinUrl },
];

const COLUMNS: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: PRODUCT_LINKS },
  { title: "Resources", links: RESOURCES_LINKS },
  { title: "Company", links: COMPANY_LINKS },
  { title: "Legal", links: LEGAL_LINKS },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-heading"
      className={
        "relative border-t border-white/10 bg-slate-950/60 " +
        (className ?? "")
      }
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-base font-bold text-slate-950"
              >
                H
              </span>
              <div>
                <p className="text-base font-semibold text-white">
                  {brand.name}
                </p>
                <p className="text-sm text-white/60">{brand.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {brand.name} is an AI orchestrator that plans, executes, and
              verifies AI-generated code as atomic units — so your team
              can ship faster without losing the trust in your main branch.
            </p>

            <ul role="list" className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    {social.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M9 7h8v8"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7"
          >
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  {column.title}
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>
            Built for teams who want to ship AI-generated code they
            actually trust.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;