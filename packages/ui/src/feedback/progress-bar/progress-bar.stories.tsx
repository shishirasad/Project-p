import { ProgressBar } from "./progress-bar";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  args: {
    label: "Upload progress",
    value: 64,
    showValue: true,
    tone: "info"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="grid w-full max-w-xl gap-4">{tones.map((tone) => <ProgressBar key={tone} tone={tone} label={`${tone} progress`} value={64} showValue />)}</div> };
export const Indeterminate = { args: { label: "Syncing", isIndeterminate: true, showValue: false } };