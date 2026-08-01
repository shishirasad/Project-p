import { CircularProgress } from "./circular-progress";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/CircularProgress",
  component: CircularProgress,
  args: {
    label: "Processing",
    value: 72,
    showValue: true,
    tone: "info"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="flex flex-wrap items-center gap-6">{tones.map((tone) => <CircularProgress key={tone} tone={tone} label={`${tone} progress`} value={72} showValue />)}</div> };
export const Indeterminate = { args: { label: "Loading", isIndeterminate: true, showValue: false } };
export const Large = { args: { size: "lg", value: 88 } };