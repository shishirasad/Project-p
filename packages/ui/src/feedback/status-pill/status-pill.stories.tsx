import { StatusPill } from "./status-pill";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/StatusPill",
  component: StatusPill,
  args: {
    label: "Running",
    description: "Campaign live",
    tone: "success"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="flex flex-wrap gap-3">{tones.map((tone) => <StatusPill key={tone} tone={tone} label={tone} description="Status detail" />)}</div> };
export const WithoutDot = { args: { showDot: false } };