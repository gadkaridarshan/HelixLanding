// helix: components/sections/footer/Footer.tsx
/**
 * @helix:story USER-63000
 *
 * Footer — site-wide footer with brand wordmark, Product / Resources /
 * Company / Legal link columns, social links, copyright, and a
 * "Built with Helix" wordmark.
 *
 * Pure server component. Brand surface (name, canonical URL, GitHub
 * URL, contact email) is sourced from `@/lib/brand` so the same
 * identity surfaces consistently with metadata, OG cards, and the
 * FinalCTA without duplication.
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

interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

const productLinks: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

const resourcesLinks: ReadonlyArray<FooterLink> = [
  { label: "Documentation", href: brand.githubUrl, external: true },
  { label: "Changelog", href: `${brand.githubUrl}/blob/main/CHANGELOG.md`, external: true },
  { label: "Roadmap", href: `${brand.githubUrl}/projects`, external: true },
  { label: "Support", href: `mailto:${brand.contactEmail}` },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "About", href: `${brand.githubUrl}#about`, external: true },
  { label: "Contact", href: `mailto:${brand.contactEmail}` },
  { label: "Brand kit", href: `${brand.url}/brand` },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "MIT License", href: `${brand.githubUrl}/blob/main/LICENSE`, external: true },
  { label: "Privacy", href: `${brand.url}/privacy` },
  { label: "Terms", href: `${brand.url}/terms` },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  {
    label: "GitHub",
    href: brand.githubUrl,
    external: true,
  },
  {
    label: "X / Twitter",
    href: brand.twitterHandle
      ? `https://twitter.com/${brand.twitterHandle.replace(/^@/, "")}`
      : "https://twitter.com",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${brand.contactEmail}`,
  },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950/80 " +
        (className ?? "")
      }
    >
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href={brand.url}
              className="inline-flex items-center gap-2 text-ink-50"
              aria-label={`${brand.name} home`}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
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
              <span className="text-base font-semibold tracking-tight">
                {brand.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              {brand.tagline}. Atomic work-breakdown for AI coding agents —
              built for engineers who care about reviewable diffs.
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-ink-300 transition hover:border-brand-400/40 hover:bg-white/10 hover:text-ink-50"
                    aria-label={link.label}
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    <SocialIcon name={link.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Resources" links={resourcesLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
            />
            Built with Helix.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

interface FooterColumnProps {
  title: string;
  links: ReadonlyArray<FooterLink>;
}

function FooterColumn({ title, links }: FooterColumnProps): React.ReactElement {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-ink-400 transition hover:text-ink-100"
              {...(link.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }: { name: string }): React.ReactElement {
  if (name === "GitHub") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        />
      </svg>
    );
  }

  if (name === "X / Twitter") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2H21l-6.52 7.453L22 22h-6.828l-4.79-6.26L4.8 22H2.04l6.97-7.97L2 2h6.914l4.32 5.71L18.244 2Zm-2.396 18.13h1.604L7.27 3.78H5.55l10.298 16.35Z" />
      </svg>
    );
  }

  // Email
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}