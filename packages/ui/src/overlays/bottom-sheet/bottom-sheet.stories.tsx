import { Button } from "../../primitives/button";
import { BottomSheet } from "./bottom-sheet";

export default {
  title: "Overlays/BottomSheet",
  component: BottomSheet,
  args: {
    isOpen: true,
    title: "Select size",
    description: "A mobile-first overlay for compact decisions.",
    closeLabel: "Close bottom sheet",
    children: <div className="grid grid-cols-4 gap-2"><Button variant="outline">S</Button><Button variant="outline">M</Button><Button variant="outline">L</Button><Button variant="outline">XL</Button></div>,
    footer: <Button>Done</Button>
  },
  parameters: {
    layout: "fullscreen"
  }
};

export const Default = {};
export const LongContent = { args: { children: <div className="grid gap-3">{Array.from({ length: 8 }, (_, index) => <p key={index}>Quiet option {index + 1}</p>)}</div> } };