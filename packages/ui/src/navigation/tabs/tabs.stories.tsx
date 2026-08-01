import { Tabs } from "./tabs";

const items = [
  { value: "all", label: "All" },
  { value: "faris", label: "Faris" },
  { value: "laaj", label: "Laaj" },
  { value: "journal", label: "Journal" }
];

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  args: {
    items,
    defaultValue: "faris"
  },
  parameters: {
    layout: "padded"
  }
};

export const Default = {};
export const Contained = { args: { variant: "contained" } };
export const WithBadge = { args: { items: [{ value: "all", label: "All", badge: "12" }, ...items.slice(1)] } };
