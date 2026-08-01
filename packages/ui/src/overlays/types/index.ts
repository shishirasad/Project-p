import type { ReactNode } from "react";

export type OverlaySize = "sm" | "md" | "lg" | "xl" | "full";
export type OverlayPlacement = "left" | "right" | "top" | "bottom";
export type FloatingPlacement = "top" | "right" | "bottom" | "left";
export type ConfirmTone = "neutral" | "danger";

export type OverlayAction = {
  label: ReactNode;
  onPress?: () => void;
  href?: string;
};