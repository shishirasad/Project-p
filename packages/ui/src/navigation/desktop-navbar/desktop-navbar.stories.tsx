import { Logo } from "../../primitives/logo";
import { DesktopNavbar } from "./desktop-navbar";

const items = [
  { label: "The Collection", href: "/collection" },
  { label: "Faris", href: "/faris" },
  { label: "Laaj", href: "/laaj" },
  { label: "The Journal", href: "/journal" },
  { label: "The House", href: "/house" }
];

const actions = [
  { label: "Search", href: "/search" },
  { label: "Account", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Bag", href: "/bag", badge: "0" }
];

export default {
  title: "Navigation/DesktopNavbar",
  component: DesktopNavbar,
  args: {
    logo: <Logo href="/" />,
    items,
    actions,
    activeHref: "/faris"
  }
};

export const Default = {};
export const Transparent = { args: { variant: "transparent", isSticky: true } };
export const WithoutActions = { args: { actions: [] } };
