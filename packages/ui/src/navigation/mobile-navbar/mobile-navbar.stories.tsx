import { MobileNavbar } from "./mobile-navbar";

const items = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Collection", href: "/collection" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Bag", href: "/bag", badge: "0" }
];

export default {
  title: "Navigation/MobileNavbar",
  component: MobileNavbar,
  args: {
    items,
    activeHref: "/collection"
  },
  parameters: {
    layout: "fullscreen"
  }
};

export const Default = {};
export const Fixed = { args: { isFixed: true } };
