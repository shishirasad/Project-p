import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
};

const directionClasses = { row: "flex-row", column: "flex-col" };
const gapClasses = { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" };
const alignClasses = { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch" };
const justifyClasses = { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" };

export function Stack({ className, direction = "column", gap = "md", align = "stretch", justify = "start", wrap = false, ...props }: StackProps) {
  return <div className={cn("flex", directionClasses[direction], gapClasses[gap], alignClasses[align], justifyClasses[justify], wrap && "flex-wrap", className)} {...props} />;
}
