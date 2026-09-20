import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  family?: "editorial" | "ui";
  tone?: "default" | "accent";
  children: ReactNode;
};

const sizeClasses = {
  sm: "text-2xl leading-[1.25]",
  md: "text-[1.75rem] leading-[1.2] md:text-4xl",
  lg: "text-[2.125rem] leading-[1.15] md:text-5xl",
  xl: "text-[2.75rem] leading-[1.08] md:text-[4rem]"
};
const familyClasses = {
  editorial: "font-serif font-normal",
  ui: "font-sans font-medium"
};
const toneClasses = { default: "text-[var(--color-text)]", accent: "text-[var(--color-accent)]" };

export function Heading({ as, className, size = "md", family = "editorial", tone = "default", children, ...props }: HeadingProps) {
  const Component = as ?? "h2";
  return <Component className={cn("text-balance", familyClasses[family], sizeClasses[size], toneClasses[tone], className)} {...props}>{children}</Component>;
}
