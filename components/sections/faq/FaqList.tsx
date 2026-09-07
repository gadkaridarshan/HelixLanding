// helix: components/sections/faq/FaqList.tsx
/**
 * @helix:story USER-933000
 *
 * FaqList — internal subcomponent wrapper that mounts the accessible
 * `<FaqAccordion />` client island with content sourced from
 * `@/content/faq.json`. Pure server component on the outside.
 *
 * Consumers should normally use `<Faq />` directly; this subcomponent
 * exists to keep the section composable for future layouts.
 */
import * as React from "react";

import { FaqAccordion } from "@/components/landing/faq/FaqAccordion";

import faqData from "@/content/faq.json";

export interface FaqListProps {
  className?: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqContent {
  items: FaqItem[];
}

const { items } = faqData as FaqContent;

export function FaqList({ className }: FaqListProps): React.ReactElement {
  return (
    <div className={className ?? ""}>
      <FaqAccordion items={items} />
    </div>
  );
}

export default FaqList;