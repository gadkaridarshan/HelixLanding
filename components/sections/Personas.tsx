// helix: components/sections/Personas.tsx
/**
 * @helix:story USER-641000
 * @helix:story USER-303000
 *
 * Personas — "Who Helix is for" section. A tabbed/grid surface that
 * surfaces tailored value propositions for four audiences:
 * Developer, Product Manager, Founder, Enterprise.
 *
 * Self-contained: uses Container + the shared theme tokens defined in
 * `app/globals.css`. Responsive (cards on small, grid on md+).
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import styles from "./Personas.module.css";

export type PersonaId = "developer" | "pm" | "founder" | "enterprise";

export interface Persona {
  readonly id: PersonaId;
  readonly label: string;
  readonly role: string;
  readonly headline: string;
  readonly bullets: ReadonlyArray<string>;
  readonly accent: "cyan" | "violet" | "amber" | "mint";
}

export const PERSONAS: ReadonlyArray<Persona> = [
  {
    id: "developer",
    label: "Developers",
    role: "Engineer working in a real codebase",
    headline:
      "Ship small, reviewable PRs instead of one sprawling agent diff.",
    bullets: [
      "Every prompt becomes atomic, reviewable units — no more mystery diffs.",
      "Each unit is type-checked, linted, and tested against the rest of your repo.",
      "Branches stay clean; reviewers see intent, not chaos.",
    ],
    accent: "cyan",
  },
  {
    id: "pm",
    label: "Product Managers",
    role: "PM shipping with AI assistance",
    headline: "Predictable output you can plan around.",
    bullets: [
      "Visible work-breakdown before code is written — scope is explicit, not hidden.",
      "Progress maps cleanly to tickets: one unit, one commit, one reviewer pass.",
      "Fewer rewrites, faster cycles, fewer surprises in standup.",
    ],
    accent: "violet",
  },
  {
    id: "founder",
    label: "Founders",
    role: "Building the company, not babysitting agents",
    headline: "Leverage AI without losing oversight of the codebase.",
    bullets: [
      "Audit trail per unit — see exactly what your agent did and why.",
      "Stay in control of architecture, dependencies, and release cadence.",
      "Move faster than headcount allows, without trading away quality.",
    ],
    accent: "amber",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    role: "Platform / Eng Productivity team",
    headline: "Governed AI coding that fits how you already ship.",
    bullets: [
      "Sandboxed execution, deterministic ordering, explicit dependencies.",
      "Bring your own models, policies, and review gates — Helix orchestrates, doesn't override.",
      "Drop-in for existing CI: same tests, same reviewers, same compliance posture.",
    ],
    accent: "mint",
  },
];

export function Personas(): React.ReactElement {
  const [active, setActive] = React.useState<PersonaId>("developer");
  const activePersona = React.useMemo(
    () => PERSONAS.find((p) => p.id === active) ?? PERSONAS[0],
    [active],
  );

  return (
    <section
      id="personas"
      aria-labelledby="personas-title"
      className={styles.section}
    >
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Who Helix is for</p>
          <h2 id="personas-title" className={styles.title}>
            Built for the people actually shipping with AI.
          </h2>
          <p className={styles.lede}>
            Helix fits into the way each role already works. Pick the one
            closest to you.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Personas"
          aria-orientation="horizontal"
          className={styles.tablist}
        >
          {PERSONAS.map((p) => {
            const isActive = p.id === active;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`persona-tab-${p.id}`}
                aria-selected={isActive}
                aria-controls={`persona-panel-${p.id}`}
                tabIndex={isActive ? 0 : -1}
                className={cn(styles.tab, isActive && styles.tabActive)}
                onClick={() => setActive(p.id)}
                data-accent={p.accent}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`persona-panel-${activePersona.id}`}
          aria-labelledby={`persona-tab-${activePersona.id}`}
          className={styles.panel}
          data-accent={activePersona.accent}
          key={activePersona.id}
        >
          <p className={styles.panelRole}>{activePersona.role}</p>
          <h3 className={styles.panelHeadline}>{activePersona.headline}</h3>
          <ul className={styles.bullets}>
            {activePersona.bullets.map((b, i) => (
              <li key={i} className={styles.bullet}>
                <span aria-hidden="true" className={styles.bulletDot} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.grid} aria-hidden="false">
          {PERSONAS.map((p) => (
            <li
              key={p.id}
              className={styles.card}
              data-accent={p.accent}
              aria-current={p.id === active ? "true" : undefined}
              onClick={() => setActive(p.id)}
            >
              <p className={styles.cardRole}>{p.label}</p>
              <h3 className={styles.cardHeadline}>{p.headline}</h3>
              <ul className={styles.cardBullets}>
                {p.bullets.slice(0, 2).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <span className={styles.cardHint} aria-hidden="true">
                View →
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Tiny local cn — avoids cross-folder imports in this self-contained file. */
function cn(
  ...values: ReadonlyArray<string | false | null | undefined>
): string {
  return values.filter((v): v is string => Boolean(v)).join(" ");
}

export default Personas;