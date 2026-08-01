import { Button } from "../../primitives/button";
import { Popover } from "./popover";

export default {
  title: "Overlays/Popover",
  component: Popover,
  args: {
    defaultOpen: true,
    title: "Publishing note",
    trigger: <Button variant="outline">Open note</Button>,
    children: "Popover content gives extra context without moving the user away."
  }
};

export const Default = {};
export const Top = { args: { placement: "top" } };
export const Right = { args: { placement: "right" } };