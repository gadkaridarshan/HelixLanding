// helix: components/landing/personas/Personas.tsx
/**
 * @helix:story USER-303000
 *
 * Personas — who Helix is for. Three tiles with role, pain, and benefit.
 */
import * as React from "react";

interface Persona {
  readonly role: string;
  readonly pain: string;
  readonly benefit: string;
}

const personas: readonly Persona[] = [
  {
    role: "Solo founders",
    pain: "You ship features with agents but spend hours untangling the diff.",
    benefit: "Helix turns each prompt into reviewable units you can merge with confidence.",
  },
  {
    role: "Platform teams",
    pain: "Adopting AI without losing the review rigor your org depends on.",
    benefit: "Atomic PRs and per-unit verification slot into your existing review process.",
  },
  {
    role: "OSS maintainers",
    pain: "Contributors ship sprawling AI-generated PRs that touch everything.",
    benefit: "Helix produces small, scoped changes that fit your contribution guidelines.",
  },
];

export function Personas(): React.ReactElement {
  return (
    <section
      aria-labelledby="personas-title"
      className="section-pad"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Built for</span>
          <h2
            id="personas-title"
            className="h-display mt-4 text-3xl font-semibold text-white sm:text-4xl"
          >
            For people who ship with agents.
          </h2>
          <p className="mt-4 text-brand-muted">
            Different roles, the same problem: AI code that’s hard to review.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <article
              key={p.role}
              className="card-glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white">{p.role}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                <span className="text-brand-fg">Pain — </span>
                {p.pain}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                <span className="text-brand-cyan">Helix — </span>
                {p.benefit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personas;