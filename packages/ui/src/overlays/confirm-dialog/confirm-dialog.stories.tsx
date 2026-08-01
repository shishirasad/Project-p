import { ConfirmDialog } from "./confirm-dialog";

export default {
  title: "Overlays/ConfirmDialog",
  component: ConfirmDialog,
  args: {
    isOpen: true,
    title: "Publish this version?",
    description: "The selected experience will become visible after final approval.",
    closeLabel: "Close confirmation",
    cancelLabel: "Cancel",
    confirmLabel: "Publish"
  },
  parameters: {
    layout: "fullscreen"
  }
};

export const Default = {};
export const Danger = { args: { tone: "danger", title: "Archive this version?", description: "Archived versions can be restored later, but will stop serving immediately.", confirmLabel: "Archive" } };
export const Loading = { args: { isConfirmLoading: true } };