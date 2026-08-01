import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "editorial" | "reading" | "checkout";
};

const widthClasses = {
  default: "max-w-[var(--container-max)]",
  editorial: "max-w-[var(--container-editorial)]",
  reading: "max-w-[var(--container-reading)]",
  checkout: "max-w-[var(--container-checkout)]"
};

export function Container({ className, variant = "default", ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-[var(--gutter)]", widthClasses[variant], className)} {...props} />;
}
