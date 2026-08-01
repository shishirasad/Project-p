import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  rounded?: "sm" | "md" | "lg" | "full";
};

const roundedClasses = {
  sm: "rounded-[var(--radius-sm)]",
  md: "rounded-[var(--radius-md)]",
  lg: "rounded-[var(--radius-lg)]",
  full: "rounded-full"
};

export function Skeleton({ className, rounded = "sm", ...props }: SkeletonProps) {
  return <div aria-hidden="true" className={cn("animate-pulse bg-[var(--color-border)]", roundedClasses[rounded], className)} {...props} />;
}
