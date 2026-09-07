// helix: components/sections/FAQ.tsx
/**
 * @helix:story USER-641000
 * @helix:story USER-303000
 *
 * FAQ — accessible accordion answering the questions a careful buyer
 * actually asks before adopting Helix. 5–8 entries covering atomic
 * cards, parallelism limits, supported languages, deployment, etc.
 *
 * Accessibility:
 *   • Each trigger is a real <button> with aria-expanded and
 *     aria-controls.
 *   • The panel uses the proper `region` role with an aria-labelledby
 *     pointing at the trigger.
 *   • Single-open behavior matches WAI-ARIA accordion best practices.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import styles from "./FAQ.module.css";

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export const FAQ_ITEMS: ReadonlyArray<FaqItem> = [
  {
    id: "what-is-an-atomic-card",
    question: "What is an atomic card?",
    answer:
      "An atomic card is the smallest unit of work Helix will execute — a single change with an explicit scope, dependencies, and a verifiable outcome. Helix breaks your prompt down into a graph of these cards, runs them in order, and verifies each one against your repo before moving on.",
  },
  {
    id: "parallelism",
    question: "How parallel can Helix get?",
    answer:
      "Helix executes independent cards in parallel up to the limit you configure. By default it stays conservative (sequential + small fan-out) to keep diffs reviewable, but you can raise the concurrency cap per project or per card group.",
  },
  {
    id: "languages",
    question: "Which languages and stacks are supported?",
    answer:
      "Anything your repo can verify. Helix is stack-agnostic — it relies on your existing toolchain (TypeScript, ESLint, pytest, go test, cargo, mix, etc.) to type-check, lint, and test each card. If your project can build and test it, Helix can orchestrate it.",
  },
  {
    id: "deployment",
    question: "How do I deploy Helix?",
    answer:
      "Drop Helix into the repo you already ship from. It runs as a CLI in CI or locally, and reads the same reviewers, tests, and policies you already enforce. There is nothing else to provision — Vercel, GitHub Actions, your laptop: pick where you want it to run.",
  },
  {
    id: "reviewer-experience",
    question: "What does the reviewer experience look like?",
    answer:
      "Reviewers see one card = one branch = one PR. Each PR has a tight scope, an explicit intent, and the verification output from your existing tests. No more 'please re-read this 4,000-line agent diff' tickets.",
  },
  {
    id: "models",
    question: "Can I bring my own model?",
    answer:
      "Yes. Helix orchestrates work; it does not lock you to a model provider. Point it at OpenAI, Anthropic, a self-hosted endpoint, or a mix — the orchestration layer stays the same.",
  },
  {
    id: "data",
    question: "What about my source code and data?",
    answer:
      "Your code never leaves the boundaries you set. Helix runs the orchestration in your environment, calls the model provider you choose under your credentials, and only persists the card graph + verification results you opt into.",
  },
  {
    id: "oss",
    question: "Is Helix open source?",
    answer:
      "Yes. The orchestration core is open source under the repository at github.com/gadkaridarshan/Helix. Enterprise features (governance, audit, policy gates) live alongside it.",
  },
];

export function FAQ(): React.ReactElement {
  const [openId, setOpenId] = React.useState<string | null>(
    FAQ_ITEMS[0]?.id ?? null,
  );

  const onToggle = React.useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={styles.section}
    >
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Frequently asked</p>
          <h2 id="faq-title" className={styles.title}>
            Questions buyers ask before they adopt.
          </h2>
          <p className={styles.lede}>
            Short, honest answers. If yours isn&apos;t here, open an issue on
            GitHub and we&apos;ll add it.
          </p>
        </header>

        <ul className={styles.list}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-trigger-${item.id}`;
            return (
              <li
                key={item.id}
                className={styles.item}
                data-open={isOpen ? "true" : "false"}
              >
                <h3 className={styles.itemHeading}>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => onToggle(item.id)}
                  >
                    <span className={styles.questionIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.questionText}>{item.question}</span>
                    <span aria-hidden="true" className={styles.chevron}>
                      <svg
                        viewBox="0 0 20 20"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 8 10 12 14 8" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  role="region"
                  id={panelId}
                  aria-labelledby={buttonId}
                  className={styles.panel}
                  hidden={!isOpen}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default FAQ;