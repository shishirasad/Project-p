import { Breadcrumb } from "./breadcrumb";

export default {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Faris", href: "/faris" },
      { label: "Polo Collection" }
    ]
  }
};

export const Default = {};
export const DotSeparator = { args: { separator: "·" } };
