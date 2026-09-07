// helix: components/UseCases.tsx
/**
 * @helix:story USER-468000
 *
 * UseCases — Use Cases / Testimonials band showcasing representative
 * scenarios and quotes across the user types served by the Helix AI
 * orchestrator (developers, indie hackers, startups, enterprise teams,
 * researchers). Self-contained server component with a colocated CSS
 * module so it can be dropped into the landing page without colliding
 * with the in-flight scaffold (USER-285000) or page assembly
 * (USER-303000) cards.
 */
import * as React from "react";

import styles from "./UseCases.module.css";

type UseCaseId =
  | "developer"
  | "indie-hacker"
  | "startup"
  | "enterprise"
  | "researcher";

interface UseCase {
  readonly id: UseCaseId;
  readonly role: string;
  readonly headline: string;
  readonly scenario: string;
  readonly outcome: string;
  readonly quote: string;
  readonly attribution: string;
}

const USE_CASES: ReadonlyArray<UseCase> = [
  {
    id: "developer",
    role: "Developers",
    headline: "Ship features, not 2,000-line AI PRs.",
    scenario:
      "You're a senior engineer at a fast-moving team. You ask Helix to add a billing webhook. Helix plans the units, executes them in order, and verifies each one against the existing repo before merging.",
    outcome:
      "A feature ships in an afternoon — every PR is atomic, every diff stays under review.",
    quote:
      "I stopped dreading AI-generated PRs. Helix hands me changes I can actually merge.",
    attribution: "Staff engineer, series-B SaaS",
  },
  {
    id: "indie-hacker",
    role: "Indie hackers",
    headline: "Move from idea to MVP without burning out.",
    scenario:
      "You're building your second product on nights and weekends. You point Helix at the repo, give it a roadmap, and walk away while it executes the boring parts.",
    outcome:
      "Auth, billing, and onboarding ship in days instead of months — solo.",
    quote:
      "Helix is the cofounder I couldn't afford. It just keeps shipping while I sleep.",
    attribution: "Solo founder, productivity SaaS",
  },
  {
    id: "startup",
    role: "Startups",
    headline: "Predictable velocity for investors and hiring.",
    scenario:
      "You're a 5-person startup that needs to ship a platform rewrite before the next board meeting. Helix orchestrates the migration in verifiable units so progress is traceable end-to-end.",
    outcome:
      "A migration that would have taken a quarter finishes in three weeks — with a paper trail.",
    quote:
      "Our burn dropped because we stopped re-doing AI's mistakes. Helix is leverage.",
    attribution: "CTO, seed-stage dev-tools startup",
  },
  {
    id: "enterprise",
    role: "Enterprise teams",
    headline: "Governance, by construction.",
    scenario:
      "You're an engineering leader at a regulated enterprise. Every change must clear review, tests, and policy gates. Helix orchestrates the loop so each unit is verified before merge.",
    outcome:
      "AI-generated code ships at startup speed without breaking compliance.",
    quote:
      "Helix gave us AI velocity with the audit trail our security team actually accepts.",
    attribution: "VP Engineering, Fortune 500 financial services",
  },
  {
    id: "researcher",
    role: "Researchers",
    headline: "Reproducible AI experiments, end-to-end.",
    scenario:
      "You're a research engineer building agents that need to call real tools in a real repo. Helix orchestrates each experiment as a sequence of verified units, so results are reproducible.",
    outcome:
      "Experiments that used to take a weekend run overnight, with full provenance.",
    quote:
      "Helix turned my agent benchmarks into something I can actually rerun and share.",
    attribution: "Research engineer, academic AI lab",
  },
];

export interface UseCasesProps {
  className?: string;
  headingId?: string;
}

export function UseCases({
  className,
  headingId = "use-cases-heading",
}: UseCasesProps): React.ReactElement {
  return (
    <section
      id="use-cases"
      aria-labelledby={headingId}
      className={[
        "section-pad relative isolate overflow-hidden",
        styles.section,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div aria-hidden="true" className={styles.bgGlow} />
      <div aria-hidden="true" className={styles.bgGrid} />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Use cases</p>
          <h2
            id={headingId}
            className={styles.heading}
          >
            Built for every team that ships with AI.
          </h2>
          <p className={styles.lede}>
            From solo founders to regulated enterprises, Helix orchestrates
            AI coding the way you actually work — verifiable, atomic, and
            traceable from prompt to merged PR.
          </p>
        </header>

        <ul
          role="list"
          className={styles.grid}
          aria-label="Customer use cases and testimonials"
        >
          {USE_CASES.map((useCase) => (
            <li key={useCase.id} className={styles.cardWrap}>
              <article
                className={styles.card}
                aria-labelledby={`${useCase.id}-headline`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.roleChip}>{useCase.role}</span>
                  <h3
                    id={`${useCase.id}-headline`}
                    className={styles.cardHeadline}
                  >
                    {useCase.headline}
                  </h3>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.scenarioBlock}>
                    <p className={styles.blockLabel}>Scenario</p>
                    <p className={styles.scenario}>
                      {useCase.scenario}
                    </p>
                  </div>
                  <div className={styles.outcomeBlock}>
                    <p className={styles.blockLabel}>Outcome</p>
                    <p className={styles.outcome}>
                      {useCase.outcome}
                    </p>
                  </div>
                </div>

                <figure className={styles.quote}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={styles.quoteIcon}
                  >
                    <path
                      d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46C10.5 7.87 8.63 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46 0-2.3-1.87-4.17-4.17-4.17z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote className={styles.quoteText}>
                    <p>{useCase.quote}</p>
                  </blockquote>
                  <figcaption className={styles.quoteAttr}>
                    {useCase.attribution}
                  </figcaption>
                </figure>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UseCases;