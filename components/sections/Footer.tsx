// helix: components/sections/Footer.tsx
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
  { label: "Brand assets", href: `${brand.githubUrl}/tree/main/brand`, external: true },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "About", href: `${brand.githubUrl}#about`, external: true },
  { label: "GitHub", href: brand.githubUrl, external: true },
  { label: "Contact", href: `mailto:${brand.contactEmail}` },
  { label: "Press kit", href: `${brand.githubUrl}/tree/main/press`, external: true },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Security", href: "/legal/security" },
  { label: "License", href: `${brand.githubUrl}/blob/main/LICENSE`, external: true },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  {
    label: "GitHub",
    href: brand.githubUrl,
    external: true,
  },
  {
    label: "X / Twitter",
    href: `https://twitter.com/${brand.twitterHandle.replace(/^@/, "")}`,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${brand.contactEmail}`,
  },
];

const columns: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<FooterLink>;
}> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950/80 backdrop-blur-sm " +
        (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent"
      />
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-ink-100"
              aria-label={`${brand.name} — home`}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950 font-semibold shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]"
              >
                H
              </span>
              <span className="font-mono text-base tracking-tight">
                {brand.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              {brand.shortDescription}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-ink-200 transition hover:border-brand-400/40 hover:bg-white/10 hover:text-ink-100"
                    aria-label={social.label}
                  >
                    <span className="sr-only">{social.label}</span>
                    {social.label === "GitHub" ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.486 2 12.021c0 4.428 2.865 8.18 6.839 9.504.5.092.682-.218.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.622.069-.61.069-.61 1.004.071 1.532 1.034 1.532 1.034.892 1.532 2.341 1.089 2.91.833.092-.648.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .268.18.58.688.482A10.025 10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : social.label === "X / Twitter" ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="text-sm text-ink-400 transition hover:text-ink-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Built with{" "}
            <span className="font-mono text-ink-300">{brand.name}</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;