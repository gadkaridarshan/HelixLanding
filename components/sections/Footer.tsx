// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-384000
 * @helix:story USER-440000
 * @helix:story USER-633000
 * @helix:story USER-641000
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
 * will take them to the canonical deployment of the site they are
 * currently viewing.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

import styles from "./Footer.module.css";

interface FooterColumn {
  readonly title: string;
  readonly links: ReadonlyArray<{
    readonly label: string;
    readonly href: string;
    readonly external?: boolean;
    readonly annotation?: string;
  }>;
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
    title: "Project",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/gadkaridarshan/Helix",
        external: true,
      },
      { label: "Issues", href: "https://github.com/gadkaridarshan/Helix/issues", external: true },
      {
        label: "Reference site",
        href: "https://helix-ai-orchestrator.vercel.app/",
        external: true,
        annotation: "Visual / brand reference only — not the live site",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Open source license", href: "https://github.com/gadkaridarshan/Helix/blob/main/LICENSE", external: true },
      { label: "Code of conduct", href: "https://github.com/gadkaridarshan/Helix/blob/main/CODE_OF_CONDUCT.md", external: true },
    ],
  },
];

export function Footer(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      aria-labelledby="site-footer-title"
      className={styles.footer}
    >
      <Container>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <h2 id="site-footer-title" className={styles.brandTitle}>
              {brand.name}
            </h2>
            <p className={styles.brandTagline}>{brand.tagline}</p>
            <p className={styles.brandDescription}>{brand.description}</p>

            <div className={styles.brandMeta}>
              <a
                className={styles.brandLink}
                href={brand.url}
                aria-label={`${brand.name} canonical live URL (this site, when deployed)`}
              >
                <span aria-hidden="true" className={styles.brandDot} />
                Live site: {brand.url}
              </a>
              <a
                className={styles.brandLink}
                href="https://github.com/gadkaridarshan/Helix"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Helix GitHub repository (opens in a new tab)"
              >
                <span aria-hidden="true" className={styles.brandDot} />
                Source on GitHub
              </a>
            </div>
          </div>

          <nav
            className={styles.nav}
            aria-label="Footer navigation"
          >
            {COLUMNS.map((col) => (
              <div key={col.title} className={styles.column}>
                <h3 className={styles.columnTitle}>{col.title}</h3>
                <ul className={styles.columnList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className={styles.columnLink}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer noopener" : undefined}
                        aria-label={
                          link.annotation
                            ? `${link.label} — ${link.annotation}`
                            : link.label
                        }
                      >
                        <span>{link.label}</span>
                        {link.external ? (
                          <span
                            aria-hidden="true"
                            className={styles.externalIcon}
                          >
                            ↗
                          </span>
                        ) : null}
                      </a>
                      {link.annotation ? (
                        <span className={styles.columnAnnotation}>
                          {link.annotation}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.referenceBlock}>
          <p className={styles.referenceTitle}>
            <span className={styles.referenceBadge}>Reference site</span>
            <span>
              <a
                href="https://helix-ai-orchestrator.vercel.app/"
                className={styles.referenceLink}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Reference site — helix-ai-orchestrator.vercel.app (visual / brand reference only, not this product's live site). Opens in a new tab."
              >
                helix-ai-orchestrator.vercel.app
              </a>
            </span>
          </p>
          <p className={styles.referenceBody}>
            The link above is a <strong>reference site</strong> used purely as a
            visual and brand reference for Helix. It is{" "}
            <strong>not</strong> the live landing page for this product and is
            <strong> not</strong> deployed from this repository. The live
            landing page for this product is a different site, deployed at{" "}
            <a
              href={brand.url}
              className={styles.referenceLink}
              aria-label={`${brand.name} canonical live URL`}
            >
              {brand.url}
            </a>{" "}
            and configured in <code>lib/brand.ts</code> as{" "}
            <code>brand.url</code>.
          </p>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {brand.name}. All trademarks belong to their respective
            owners.
          </p>
          <p className={styles.builtWith}>
            Built with Next.js · Deployed on Vercel · Source on GitHub
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;