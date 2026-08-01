import { LoadingState } from "./loading-state";

export default {
  title: "Feedback/LoadingState",
  component: LoadingState,
  args: {
    title: "Preparing preview",
    description: "This usually takes a moment."
  }
};

export const Default = {};
export const Small = { args: { size: "sm", title: "Loading", description: undefined } };
export const Large = { args: { size: "lg", title: "Building experience", description: "Assets, content, and tracking checks are being prepared." } };