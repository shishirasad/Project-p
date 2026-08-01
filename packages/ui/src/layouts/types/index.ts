import type { ReactNode } from "react";

export type LayoutBreakpoint = "md" | "lg";
export type LayoutSide = "start" | "end";
export type LayoutWidth = "sm" | "md" | "lg";
export type ResponsiveSlotVisibility = "all" | "mobile" | "tablet" | "desktop";

export type FooterLayoutLink = {
  href: string;
  label: ReactNode;
};

export type FooterLayoutColumn = {
  title: ReactNode;
  links: FooterLayoutLink[];
};