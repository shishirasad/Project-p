import { Button } from "../../primitives/button";
import { EmptyState } from "./empty-state";

export default {
  title: "Feedback/EmptyState",
  component: EmptyState,
  args: {
    eyebrow: "No results",
    title: "Nothing to show yet",
    description: "Try adjusting the filters or return to the full collection.",
    primaryAction: <Button variant="outline">Reset filters</Button>
  }
};

export const Default = {};
export const ShortMessage = { args: { eyebrow: undefined, title: "No saved items", description: undefined, primaryAction: undefined } };
export const LongMessage = { args: { title: "No campaign assets are linked", description: "Attach photography, video, copy, and tracking details before scheduling this landing experience for paid traffic." } };