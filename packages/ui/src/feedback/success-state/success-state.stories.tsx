import { Button } from "../../primitives/button";
import { SuccessState } from "./success-state";

export default {
  title: "Feedback/SuccessState",
  component: SuccessState,
  args: {
    eyebrow: "Approved",
    title: "Ready to publish",
    description: "The experience passed review and can move to staging.",
    primaryAction: <Button variant="outline">View preview</Button>
  }
};

export const Default = {};
export const ShortMessage = { args: { eyebrow: undefined, title: "Saved", description: undefined, primaryAction: undefined } };
export const LongMessage = { args: { title: "Campaign package is ready", description: "Landing page, social copy, UTM settings, and analytics checks are prepared for final approval." } };