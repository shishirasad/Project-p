import { InlineAlert } from "./inline-alert";

const tones = ["neutral", "info", "success", "warning", "error"] as const;

export default {
  title: "Feedback/InlineAlert",
  component: InlineAlert,
  args: {
    message: "Use at least 8 characters.",
    tone: "info"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="grid gap-2">{tones.map((tone) => <InlineAlert key={tone} tone={tone} message={`${tone} inline message`} />)}</div> };
export const LongMessage = { args: { tone: "warning", message: "This promotional code can only be used once per customer and may not combine with other campaign offers." } };