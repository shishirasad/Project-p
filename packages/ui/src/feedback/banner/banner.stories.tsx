import { Button } from "../../primitives/button";
import { Banner } from "./banner";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/Banner",
  component: Banner,
  args: {
    title: "Scheduled maintenance",
    description: "Publishing may be paused for a few minutes.",
    closeLabel: "Dismiss banner"
  },
  parameters: {
    layout: "fullscreen"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="grid gap-3">{tones.map((tone) => <Banner key={tone} tone={tone} title={`${tone} banner`} description="A page-level message that stays quiet but visible." />)}</div>, parameters: { layout: "fullscreen" } };
export const WithAction = { args: { tone: "info", action: <Button variant="outline" size="sm">Open status</Button> } };