// helix: content/socialProof.ts
/**
 * @helix:story USER-308000
 *
 * SocialProof content — placeholder logos, headline metrics, and
 * testimonial-style quotes. Pure data.
 */
export interface SocialProofContent {
  logos: string[];
  metrics: { value: string; label: string; helper?: string }[];
  quotes: { quote: string; author: string; role: string }[];
}

export const socialProof: SocialProofContent = {
  logos: ["Acme", "Globex", "Initech", "Umbrella", "Hooli", "Stark"],
  metrics: [
    {
      value: "12×",
      label: "Faster PR throughput",
      helper: "vs. un-decomposed AI runs",
    },
    {
      value: "0",
      label: "Sprawling diffs merged",
      helper: "every unit is bounded and verified",
    },
    {
      value: "94%",
      label: "First-pass verification rate",
      helper: "types + tests + lint on the first run",
    },
    {
      value: "< 30m",
      label: "Median time-to-green",
      helper: "from prompt to a mergeable PR",
    },
  ],
  quotes: [
    {
      quote:
        "We stopped reviewing 600-line AI diffs. Now every PR is a small, scoped unit with a green check — it's the first AI workflow our tech leads actually trust.",
      author: "Engineering Lead",
      role: "Series B fintech",
    },
    {
      quote:
        "Helix made AI output auditable. The dependency graph is the spec, the units are the diff, and the verification report is the proof.",
      author: "Staff AI Engineer",
      role: "Developer tools",
    },
  ],
};