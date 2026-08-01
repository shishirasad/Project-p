import { Button } from "../../primitives/button";
import { Drawer } from "./drawer";

export default {
  title: "Overlays/Drawer",
  component: Drawer,
  args: {
    isOpen: true,
    title: "Filters",
    description: "Refine the current view without leaving context.",
    closeLabel: "Close drawer",
    children: <div className="grid gap-3"><p>Category</p><p>Color</p><p>Size</p><p>Availability</p></div>,
    footer: <><Button variant="outline">Reset</Button><Button>Apply</Button></>
  },
  parameters: {
    layout: "fullscreen"
  }
};

export const Default = {};
export const Left = { args: { placement: "left" } };