import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
};

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4"
};

const gapClasses = { sm: "gap-3", md: "gap-4", lg: "gap-6" };

export function Grid({ className, columns = 3, gap = "md", ...props }: GridProps) {
  return <div className={cn("grid", columnClasses[columns], gapClasses[gap], className)} {...props} />;
}
