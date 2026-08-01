import { StepIndicator } from "./step-indicator";

const steps = [
  { id: "draft", label: "Draft", description: "Content is being prepared" },
  { id: "review", label: "Review", description: "Team approval required" },
  { id: "staging", label: "Staging", description: "Preview before publish" },
  { id: "live", label: "Live", description: "Published experience" }
];

export default {
  title: "Feedback/StepIndicator",
  component: StepIndicator,
  args: {
    steps,
    currentStep: "review"
  }
};

export const Default = {};
export const Vertical = { args: { orientation: "vertical" } };
export const WithError = { args: { steps: [steps[0], { ...steps[1], status: "error" }, steps[2], steps[3]], currentStep: "review" } };