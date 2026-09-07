// helix: components/sections/CTASection.tsx
/**
 * @helix:story USER-641000
 * @helix:story USER-303000
 * @helix:story USER-440000
 * @helix:story USER-868000
 *
 * CTASection — final, full-bleed call-to-action block at the bottom of
 * the landing surface, just above the footer.
 *
 * Two primary actions:
 *   1. GitHub → https://github.com/gadkaridarshan/Helix
 *   2. Live Site → https://helix-ai-orchestrator.vercel.app
 *      (this URL is treated here as the "live site" target the existing
 *       upstream deployment owns; if the local brand.url becomes the
 *       canonical live deployment, swap the href to brand.url. The
 *       component reads from `lib/brand.ts` for any label-level policy.)
 *
 * Self-contained: uses Container + globals.css tokens. Responsive.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

import styles from "./CTASection.module.css";

export function CTASection(): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className={styles.section}
    >
      <Container>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <p className={styles.eyebrow}>Ready when you are</p>
          <h2 id="cta-title" className={styles.title}>
            Stop reviewing AI diffs.
            <br />
            Start shipping AI work.
          </h2>
          <p className={styles.lede}>
            Helix turns one prompt into a graph of reviewable, verifiable
            units. Pick where you want to start.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primary}
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open the Helix GitHub repository in a new tab"
            >
              <span aria-hidden="true" className={styles.primaryIcon}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.69-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </span>
              <span className={styles.primaryText}>
                <span className={styles.primaryLabel}>View on GitHub</span>
                <span className={styles.primaryHint}>
                  Source, issues, and roadmap
                </span>
              </span>
            </a>

            <a
              className={styles.secondary}
              href="https://helix-ai-orchestrator.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open the Helix live site (${brand.url} is this product's canonical live URL — see lib/brand.ts) in a new tab`}
            >
              <span aria-hidden="true" className={styles.secondaryIcon}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="presentation"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
              </span>
              <span className={styles.primaryText}>
                <span className={styles.primaryLabel}>Open live site</span>
                <span className={styles.primaryHint}>
                  Try Helix in your browser
                </span>
              </span>
            </a>
          </div>

          <p className={styles.fineprint}>
            Open source under the repo above. No sign-up required to read the
            code or open issues.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;