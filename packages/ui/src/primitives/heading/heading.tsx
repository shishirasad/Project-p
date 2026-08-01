import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "default" | "accent";
  children: ReactNode;
};

const sizeClasses = {
  sm: "text-2xl leading-tight",
  md: "text-3xl leading-tight md:text-4xl",
  lg: "text-4xl leading-tight md:text-6xl",
  xl: "text-5xl leading-tight md:text-7xl"
};
const toneClasses = { default: "text-[var(--color-text)]", accent: "text-[var(--color-accent)]" };

export function Heading({ as, className, size = "md", tone = "default", children, ...props }: HeadingProps) {
  const Component = as ?? "h2";
  return <Component className={cn("font-medium", sizeClasses[size], toneClasses[tone], className)} {...props}>{children}</Component>;
}
