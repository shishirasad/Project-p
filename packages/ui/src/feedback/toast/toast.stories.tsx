import { Button } from "../../primitives/button";
import { Toast } from "./toast";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/Toast",
  component: Toast,
  args: {
    title: "Saved",
    description: "Your changes are ready for review.",
    closeLabel: "Dismiss notification"
  },
  parameters: {
    layout: "padded"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="grid gap-3">{tones.map((tone) => <Toast key={tone} tone={tone} title={`${tone} toast`} description="A calm notification for short-lived feedback." closeLabel="Dismiss notification" />)}</div> };
export const LongMessage = { args: { title: "Campaign saved as draft", description: "The landing experience is saved with its current content, audience note, tracking status, and approval metadata." } };
export const WithAction = { args: { tone: "info", action: <Button variant="ghost" size="sm">Review</Button> } };