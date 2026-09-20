import type { BrandContext } from "@/types/brand";

export type NavigationItem = {
  label: string;
  href: string;
  brandContext?: BrandContext;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Shop", href: "/shop" },
  { label: "FARIS", href: "/faris", brandContext: "faris" },
  { label: "LAAJ", href: "/laaj", brandContext: "laaj" },
  { label: "LABANNYA", href: "/labannya", brandContext: "labannya" },
  { label: "Journal", href: "/journal" }
];

export const mobileNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Bag", href: "/cart" },
  { label: "Chat", href: "/contact" }
];
