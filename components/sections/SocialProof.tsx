// helix: components/sections/SocialProof.tsx
/**
 * @helix:story USER-641000
 * @helix:story USER-303000
 * @helix:story USER-440000
 * @helix:story USER-868000
 *
 * SocialProof — trust signals + lightweight testimonial placeholders.
 *
 * Surfaces:
 *   1. GitHub stars / forks badge linking to the upstream repo
 *      (https://github.com/gadkaridarshan/Helix).
 *   2. A clearly-labelled "reference site" link to
 *      https://helix-ai-orchestrator.vercel.app — this is NOT the live
 *      site for this product; see lib/brand.ts for the URL policy.
 *   3. Testimonial-style cards. We do NOT fabricate real people or real
 *      company logos. Each card shows a role/segment + a short,
 *      plausibly-cited quote, with a "placeholder" badge so visitors
 *      understand they are example illustrations, not endorsements.
 *
 * Self-contained: uses Container + globals.css tokens. Responsive.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import styles from "./SocialProof.module.css";

interface Testimonial {
  readonly id: string;
  readonly role: string;
  readonly segment: string;
  readonly quote: string;
  readonly accent: "cyan" | "violet" | "amber";
}

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    id: "t-dev",
    role: "Senior Engineer",
    segment: "Series B fintech",
    quote:
      "The atomic work-breakdown turns agent output into something my team can actually review. We stopped dreading the 'big AI PR'.",
    accent: "cyan",
  },
  {
    id: "t-pm",
    role: "Group Product Manager",
    segment: "B2B SaaS",
    quote:
      "I can finally plan around AI output. Each card maps to a ticket, each commit to a reviewer. Standups got calmer.",
    accent: "violet",
  },
  {
    id: "t-founder",
    role: "Founding Engineer",
    segment: "Early-stage startup",
    quote:
      "I'm moving at the pace of a five-person team without hiring a fifth. The audit trail per unit is the part I didn't know I needed.",
    accent: "amber",
  },
];

export function SocialProof(): React.ReactElement {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-title"
      className={styles.section}
    >
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Trusted to orchestrate AI work</p>
          <h2 id="social-proof-title" className={styles.title}>
            Signals from the people shipping with Helix.
          </h2>
        </header>

        <div className={styles.badges}>
          <a
            className={styles.githubBadge}
            href="https://github.com/gadkaridarshan/Helix"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open the Helix GitHub repository in a new tab"
          >
            <span aria-hidden="true" className={styles.githubIcon}>
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                role="presentation"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.69-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </span>
            <span className={styles.badgeBody}>
              <span className={styles.badgeLabel}>GitHub</span>
              <span className={styles.badgeValue}>
                <span className={styles.badgeStars}>★ stars</span>
                <span aria-hidden="true" className={styles.badgeDot} />
                <span className={styles.badgeForks}>⑂ forks</span>
              </span>
              <span className={styles.badgeHint}>
                Open source — view the repo
              </span>
            </span>
          </a>

          <a
            className={styles.referenceBadge}
            href="https://helix-ai-orchestrator.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open the Helix reference site (visual / brand reference only — not this product's live site) in a new tab"
          >
            <span aria-hidden="true" className={styles.referenceDot} />
            <span className={styles.badgeBody}>
              <span className={styles.badgeLabel}>Reference site</span>
              <span className={styles.badgeValue}>
                helix-ai-orchestrator.vercel.app
              </span>
              <span className={styles.badgeHint}>
                Visual / brand reference only — not the live site
              </span>
            </span>
          </a>
        </div>

        <div className={styles.callout} role="note">
          <strong>Heads up:</strong> the link above is a{" "}
          <em>reference site</em> — it shows the look and feel of Helix but is
          not the live deployment for this product. The live site for this
          product lives at the URL configured in{" "}
          <code>lib/brand.ts</code> (<code>brand.url</code>).
        </div>

        <ul className={styles.testimonials}>
          {TESTIMONIALS.map((t) => (
            <li
              key={t.id}
              className={styles.testimonial}
              data-accent={t.accent}
            >
              <span className={styles.placeholderBadge} aria-label="Illustrative placeholder testimonial">
                Placeholder
              </span>
              <blockquote className={styles.quote}>
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <footer className={styles.attribution}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.role.charAt(0)}
                </span>
                <span className={styles.who}>
                  <span className={styles.role}>{t.role}</span>
                  <span className={styles.segment}>{t.segment}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer}>
          Testimonials above are illustrative placeholders meant to convey the
          shape of feedback we expect. Real endorsements are not fabricated;
          check the GitHub repo for verifiable activity and discussion.
        </p>
      </Container>
    </section>
  );
}

export default SocialProof;