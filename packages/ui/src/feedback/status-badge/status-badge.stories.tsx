import { StatusBadge } from "./status-badge";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/StatusBadge",
  component: StatusBadge,
  args: {
    label: "Draft",
    tone: "neutral",
    showDot: true
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="flex flex-wrap gap-3">{tones.map((tone) => <StatusBadge key={tone} tone={tone} label={tone} showDot />)}</div> };
export const WithoutDot = { args: { showDot: false } };