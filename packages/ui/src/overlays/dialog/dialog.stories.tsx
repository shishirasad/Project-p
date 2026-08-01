import { Button } from "../../primitives/button";
import { Dialog } from "./dialog";

export default {
  title: "Overlays/Dialog",
  component: Dialog,
  args: {
    isOpen: true,
    title: "Save draft?",
    description: "Your changes can be saved before leaving this workspace.",
    closeLabel: "Close dialog",
    actions: <><Button variant="outline">Discard</Button><Button>Save</Button></>
  },
  parameters: {
    layout: "fullscreen"
  }
};

export const Default = {};
export const AlertDialog = { args: { role: "alertdialog", title: "Discard changes?", description: "This action cannot be undone." } };