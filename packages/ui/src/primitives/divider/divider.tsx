import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

export function Divider({ className, orientation = "horizontal", ...props }: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      className={cn(
        "border-0 bg-[var(--color-border)]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}
