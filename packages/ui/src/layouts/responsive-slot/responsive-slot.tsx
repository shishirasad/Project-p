import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { ResponsiveSlotVisibility } from "../types";
import { responsiveSlotClasses } from "../utils";

export type ResponsiveSlotProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  show?: ResponsiveSlotVisibility;
  children: ReactNode;
};

export function ResponsiveSlot({ as, show = "all", children, className, ...props }: ResponsiveSlotProps) {
  const Component = as ?? "div";
  return <Component className={cn(responsiveSlotClasses[show], className)} {...props}>{children}</Component>;
}