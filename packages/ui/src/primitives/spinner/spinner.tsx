import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  label?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7"
};

export function Spinner({ className, label = "Loading", size = "md", ...props }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className={cn("inline-flex", className)} {...props}>
      <span aria-hidden="true" className={cn("animate-spin rounded-full border border-current border-t-transparent", sizeClasses[size])} />
    </span>
  );
}
