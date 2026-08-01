import type { LayoutBreakpoint, LayoutSide, LayoutWidth, ResponsiveSlotVisibility } from "../types";

export const layoutFocusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

const sidebarStartWidthClasses: Record<LayoutBreakpoint, Record<LayoutWidth, string>> = {
  md: {
    sm: "md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]",
    md: "md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]",
    lg: "md:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]"
  },
  lg: {
    sm: "lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]",
    md: "lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]",
    lg: "lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]"
  }
};

const sidebarEndWidthClasses: Record<LayoutBreakpoint, Record<LayoutWidth, string>> = {
  md: {
    sm: "md:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]",
    md: "md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]",
    lg: "md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]"
  },
  lg: {
    sm: "lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]",
    md: "lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]",
    lg: "lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]"
  }
};

export const sidebarCollapseClasses: Record<LayoutBreakpoint, string> = {
  md: "md:grid",
  lg: "lg:grid"
};

export const responsiveSlotClasses: Record<ResponsiveSlotVisibility, string> = {
  all: "",
  mobile: "md:hidden",
  tablet: "hidden md:block lg:hidden",
  desktop: "hidden lg:block"
};

export function getSidebarWidthClass(side: LayoutSide, width: LayoutWidth, collapseAt: LayoutBreakpoint) {
  return side === "start" ? sidebarStartWidthClasses[collapseAt][width] : sidebarEndWidthClasses[collapseAt][width];
}