// helix: components/footer/Footer.tsx
/**
 * @helix:story USER-434000
 *
 * Footer — site-wide footer with product / project / contact columns,
 * wordmark, tagline, and copyright row.
 *
 * Pure server component. Responsive three-column grid on desktop,
 * stacked on mobile. External links open in a new tab.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";
import { brand } from "@/lib/brand";

import styles from "./Footer.module.css";

export interface FooterLink {
  label: string;
  href: string;
  external: boolean;
}

export interface FooterColumn {
  title: string;
  links: ReadonlyArray<FooterLink>;
}

export interface FooterContent {
  tagline: string;
  columns: ReadonlyArray<FooterColumn>;
  copyright: string;
}

export interface FooterProps {
  content: FooterContent;
  className?: string;
}

export function Footer({ content, className }: FooterProps): React.ReactElement {
  const { tagline, columns, copyright } = content;
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-heading"
      className={cn("relative border-t border-white/5 bg-slate-950/80 py-16", className)}
    >
      <div aria-hidden="true" className={styles.glow} />

      <Container>
        <h2 id="footer-heading" className="sr-only">
          {brand.name} — site footer
        </h2>

        <div className={styles.grid}>
          <div className={styles.brandBlock}>
            <a href="#top" className={styles.wordmark} aria-label={`${brand.name} home`}>
              <Wordmark />
              <span className={styles.wordmarkText}>{brand.name}</span>
            </a>
            <p className={styles.tagline}>{tagline}</p>
            <p className={styles.subline}>{brand.description}</p>
          </div>

          {columns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className={styles.column}
            >
              <h3 className={styles.columnTitle}>{column.title}</h3>
              <ul role="list" className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.link}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span>{link.label}</span>
                      {link.external ? <ExternalIcon /> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {copyright.replace(/\d{4}/, String(year))}
          </p>
          <p className={styles.builtWith}>
            Built for teams who ship atomic PRs.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function Wordmark(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className="h-7 w-7"
    >
      <defs>
        <linearGradient id="hxFooterMark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#hxFooterMark)" />
      <path
        d="M10 11.5c0-1 .8-1.8 1.8-1.8h8.4c1 0 1.8.8 1.8 1.8v9c0 1-.8 1.8-1.8 1.8h-8.4c-1 0-1.8-.8-1.8-1.8v-9Z"
        fill="rgb(8 12 28 / 0.85)"
      />
      <path
        d="M13 16h6M13 12h6M13 20h4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExternalIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 opacity-60"
    >
      <path d="M7 13l10-10M9 3h8v8" />
    </svg>
  );
}

export default Footer;