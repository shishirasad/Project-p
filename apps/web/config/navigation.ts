import type { BrandContext } from "@/types/brand";

export type NavigationItem = {
  label: string;
  href: string;
  brandContext?: BrandContext;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "The Collection", href: "/collection" },
  { label: "Faris", href: "/faris", brandContext: "faris" },
  { label: "Laaj", href: "/laaj", brandContext: "laaj" },
  { label: "The Journal", href: "/journal" },
  { label: "The House", href: "/the-house", brandContext: "house" }
];

export const mobileNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Collection", href: "/collection" },
  { label: "Wishlist", href: "/account/wishlist" },
  { label: "Bag", href: "/cart" }
];
