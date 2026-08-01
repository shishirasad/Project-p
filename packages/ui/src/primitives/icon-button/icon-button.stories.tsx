import { Search } from "lucide-react";
import { IconButton } from "./icon-button";

export default {
  title: "Primitives/IconButton",
  component: IconButton,
  args: {
    ariaLabel: "Search",
    icon: <Search aria-hidden="true" size={18} strokeWidth={1.75} />
  }
};

export const Default = {};
export const Outline = { args: { variant: "outline" } };
export const Solid = { args: { variant: "solid" } };