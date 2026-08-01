import { Button } from "../../primitives/button";
import { Tooltip } from "./tooltip";

export default {
  title: "Overlays/Tooltip",
  component: Tooltip,
  args: {
    defaultOpen: true,
    trigger: <Button variant="outline">Details</Button>,
    content: "Use tooltips for short labels only."
  }
};

export const Default = {};
export const Bottom = { args: { placement: "bottom" } };
export const LongMessage = { args: { content: "This should stay short, readable, and non-intrusive across responsive viewports." } };