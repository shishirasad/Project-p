import type { FloatingPlacement, OverlayPlacement, OverlaySize } from "../types";

export const overlaySizeClasses: Record<OverlaySize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[calc(100vw-(var(--gutter)*2))]"
};

export const drawerPlacementClasses: Record<OverlayPlacement, string> = {
  left: "inset-y-0 left-0 h-full w-full max-w-md",
  right: "inset-y-0 right-0 h-full w-full max-w-md",
  top: "inset-x-0 top-0 max-h-[85vh] w-full",
  bottom: "inset-x-0 bottom-0 max-h-[85vh] w-full"
};

export const floatingPlacementClasses: Record<FloatingPlacement, string> = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
  bottom: "left-1/2 top-full mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2"
};