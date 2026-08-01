import { Button } from "../../primitives/button";
import { Modal } from "./modal";

export default {
  title: "Overlays/Modal",
  component: Modal,
  args: {
    isOpen: true,
    title: "Review experience",
    description: "A calm surface for focused review before publishing.",
    closeLabel: "Close modal",
    children: "Use modal surfaces for focused tasks that should temporarily pause the surrounding interface.",
    footer: <><Button variant="outline">Cancel</Button><Button>Continue</Button></>
  },
  parameters: {
    layout: "fullscreen"
  }
};

export const Default = {};
export const Small = { args: { size: "sm" } };
export const Large = { args: { size: "lg" } };
export const NotDismissible = { args: { dismissible: false } };