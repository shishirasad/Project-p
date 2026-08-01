import { CommandPalette } from "./command-palette";

const groups = [
  { title: "Navigation", commands: [{ id: "collection", label: "Open collection", description: "Go to the full catalog", shortcut: "G C" }, { id: "journal", label: "Open journal", shortcut: "G J" }] },
  { title: "Actions", commands: [{ id: "search", label: "Search products", description: "Find products or stories" }, { id: "wishlist", label: "Open wishlist" }] }
];

export default {
  title: "Navigation/CommandPalette",
  component: CommandPalette,
  args: {
    isOpen: true,
    title: "Command Palette",
    label: "Command search",
    closeLabel: "Close",
    clearLabel: "Clear command search",
    placeholder: "Search commands",
    groups,
    emptyMessage: "No commands found."
  }
};

export const Default = {};
export const Filtered = { args: { defaultQuery: "journal" } };
