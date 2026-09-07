// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-94000
 *
 * Footer — polished site-wide footer with brand mark, navigation
 * columns, social links, legal info, and SEO-friendly metadata.
 *
 * Pure server component. Brand surface (name, canonical URL,
 * GitHub URL, X/Twitter handle, theme color) is sourced from
 * `lib/brand.ts` so the same identity shows up in `<title>`,
 * OG cards, and this footer without duplication.
 *
 * Designed for Vercel deploys — emits structured JSON-LD
 * `Organization` data and exposes `itemProp` attributes on
 * social links so search engines and crawlers can parse the
 * brand surface consistently with the rest of the page.
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
  readonly external?: boolean;
}

interface FooterColumn {
  readonly title: string;
  readonly links: ReadonlyArray<FooterLink>;
}

interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: React.ReactNode;
}

const PRODUCT_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

const RESOURCES_LINKS: ReadonlyArray<FooterLink> = [
  {
    label: "GitHub",
    href: brand.githubUrl,
    external: true,
  },
  {
    label: "Documentation",
    href: `${brand.githubUrl}#readme`,
    external: true,
  },
  {
    label: "Changelog",
    href: `${brand.githubUrl}/blob/main/CHANGELOG.md`,
    external: true,
  },
];

const COMPANY_LINKS: ReadonlyArray<FooterLink> = [
  { label: "About", href: `${brand.url}/about` },
  { label: "Contact", href: `${brand.url}/contact` },
  { label: "Brand assets", href: `${brand.url}/brand` },
];

const LEGAL_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: `${brand.url}/privacy` },
  { label: "Terms", href: `${brand.url}/terms` },
  { label: "Security", href: `${brand.url}/security` },
];

const COLUMNS: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: PRODUCT_LINKS },
  { title: "Resources", links: RESOURCES_LINKS },
  { title: "Company", links: COMPANY_LINKS },
  { title: "Legal", links: LEGAL_LINKS },
];

const SOCIAL_LINKS: ReadonlyArray<SocialLink> = [
  {
    label: "GitHub",
    href: brand.githubUrl,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.593 1.028 2.686 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: brand.twitterUrl,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: brand.linkedInUrl,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
        />
      </svg>
    ),
  },
];

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.url,
  logo: brand.logoUrl,
  description: brand.tagline,
  sameAs: [brand.githubUrl, brand.twitterUrl, brand.linkedInUrl],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${brand.url}/contact`,
  },
} as const;

function FooterLinkItem({ link }: { link: FooterLink }): React.ReactElement {
  const isExternal = link.external ?? false;
  return (
    <li>
      <a
        href={link.href}
        className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {link.label}
      </a>
    </li>
  );
}

function FooterColumnBlock({
  column,
}: {
  column: FooterColumn;
}): React.ReactElement {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
        {column.title}
      </h3>
      <ul className="mt-4 space-y-3">
        {column.links.map((link) => (
          <FooterLinkItem key={`${column.title}-${link.label}`} link={link} />
        ))}
      </ul>
    </div>
  );
}

function SocialIconLink({
  social,
}: {
  social: SocialLink;
}): React.ReactElement {
  return (
    <a
      href={social.href}
      aria-label={social.label}
      title={social.label}
      target="_blank"
      rel="noopener noreferrer"
      itemProp="sameAs"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      {social.icon}
    </a>
  );
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      itemScope
      itemType="https://schema.org/Organization"
      className={[
        "relative isolate overflow-hidden border-t border-white/10",
        "bg-[linear-gradient(180deg,rgba(8,11,23,0.6)_0%,rgba(2,6,23,0.95)_100%)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <meta itemProp="name" content={brand.name} />
      <meta itemProp="url" content={brand.url} />
      <meta itemProp="logo" content={brand.logoUrl} />
      <meta itemProp="description" content={brand.tagline} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />

      <Container size="xl" className="py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <a
              href={brand.url}
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
                H
              </span>
              <span
                itemProp="name"
                className="text-base font-semibold text-white"
              >
                {brand.name}
              </span>
            </a>

            <p
              itemProp="description"
              className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400"
            >
              {brand.tagline}
            </p>

            <div className="mt-7 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <SocialIconLink key={social.label} social={social} />
              ))}
            </div>

            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.593 1.028 2.686 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
              <span>Star on GitHub</span>
              <span
                aria-hidden="true"
                className="text-cyan-300 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 lg:col-span-7 lg:grid-cols-4"
          >
            {COLUMNS.map((column) => (
              <FooterColumnBlock key={column.title} column={column} />
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Deployed on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            >
              Vercel
            </a>
            .
          </p>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORG_JSON_LD),
        }}
      />
    </footer>
  );
}

export default Footer;