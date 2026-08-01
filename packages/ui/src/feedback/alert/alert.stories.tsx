import { Button } from "../../primitives/button";
import { Alert } from "./alert";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/Alert",
  component: Alert,
  args: {
    title: "Review needed",
    description: "This section needs approval before publishing.",
    closeLabel: "Dismiss alert"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="grid gap-3">{tones.map((tone) => <Alert key={tone} tone={tone} title={`${tone} alert`} description="Short, quiet feedback with clear hierarchy." />)}</div> };
export const LongMessage = { args: { tone: "warning", title: "Inventory sync delayed", description: "The storefront is still available, but the latest stock update is waiting for the next background sync cycle." } };
export const WithAction = { args: { tone: "info", action: <Button variant="outline" size="sm">View details</Button> } };