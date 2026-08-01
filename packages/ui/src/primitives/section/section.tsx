import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: "sm" | "md" | "lg";
};

const spacingClasses = {
  sm: "py-10 md:py-14",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32"
};

export function Section({ className, spacing = "md", ...props }: SectionProps) {
  return <section className={cn(spacingClasses[spacing], className)} {...props} />;
}
