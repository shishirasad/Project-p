import { Button } from "../../primitives/button";
import { ErrorState } from "./error-state";

export default {
  title: "Feedback/ErrorState",
  component: ErrorState,
  args: {
    eyebrow: "Unable to load",
    title: "Something needs attention",
    description: "The request could not be completed. Please try again.",
    primaryAction: <Button variant="danger">Retry</Button>
  }
};

export const Default = {};
export const ShortMessage = { args: { eyebrow: undefined, title: "Upload failed", description: undefined } };
export const LongMessage = { args: { title: "The preview could not be generated", description: "One or more linked assets are missing. Restore the assets or remove them from the experience before publishing." } };