import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/**
 * @helix:story USER-347000
 * Features — 3x2 grid of Helix value props.
 * Server component. Imports only from components/ui.
 */

type Feature = {
  title: string;
  description: string;
  icon: (props: { className?: string }) => JSX.Element;
  accent: string;
};

function IconAtomic(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

function IconParallel(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M6 10v2a2 2 0 0 0 2 2h2" />
      <path d="M18 10v2a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

function IconDependency(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M5 7h4M5 12h4M5 17h4" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="15" cy="17" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M9 7h4M9 17h4M16.5 8.5 17.7 10.5M16.5 15.5 17.7 13.5" />
    </svg>
  );
}

function IconLanguage(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M4 5h8M8 3v2M5 9c0 4 3 6 6 6M11 9c0 4-3 6-6 6" />
      <path d="M14 21l4-10 4 10M15.5 18h5" />
    </svg>
  );
}

function IconProtected(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconTrace(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h10M4 18h16" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}

const features: Feature[] = [
  {
    title: "Atomic work breakdown",
    description:
      "Helix decomposes a vague requirement into small, testable, dependency-tagged cards — the right granularity for an agent to ship without surprises.",
    icon: IconAtomic,
    accent: "from-violet-500/20 to-fuchsia-500/20 text-violet-300",
  },
  {
    title: "Parallel agent orchestration",
    description:
      "Run multiple coding agents side-by-side, scoped to their own globs. Helix merges, reviews, and reconciles — no manual coordination tax.",
    icon: IconParallel,
    accent: "from-sky-500/20 to-indigo-500/20 text-sky-300",
  },
  {
    title: "Dependency-safe cards",
    description:
      "Cards declare their imports and consumers. Helix schedules execution so dependent work always waits on its prerequisites — no broken builds.",
    icon: IconDependency,
    accent: "from-emerald-500/20 to-teal-500/20 text-emerald-300",
  },
  {
    title: "Language-aware planning",
    description:
      "Plans respect the language, framework, and conventions of each path — TypeScript files get TS plans, Python files get Python-aware prompts.",
    icon: IconLanguage,
    accent: "from-amber-500/20 to-rose-500/20 text-amber-300",
  },
  {
    title: "Protected-path enforcement",
    description:
      "Sensitive files, secrets, and infra configs are off-limits by default. Add review gates per glob and Helix will never write past them.",
    icon: IconProtected,
    accent: "from-pink-500/20 to-purple-500/20 text-pink-300",
  },
  {
    title: "Reviewable audit trail",
    description:
      "Every write, plan, and decision shows up on a Kanban-style board. Inspect traces, diffs, and reasoning — or export them for compliance.",
    icon: IconTrace,
    accent: "from-cyan-500/20 to-blue-500/20 text-cyan-300",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      aria-labelledby="features-heading"
      eyebrow="Why Helix"
      title="Everything you need to ship AI-written code without losing control"
      description="Five core capabilities — built so engineering teams can adopt AI coding agents with the same rigor as any other change to the codebase."
      className="border-b border-white/5"
    >
      <Container>
        <ul
          role="list"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-br ${feature.accent.split(" ").slice(0, 2).join(" ")} opacity-0 transition group-hover:opacity-100`}
                />
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 ${feature.accent.split(" ").slice(-1)[0]}`}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}