import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "accent";
  children: ReactNode;
};

const sizeClasses = {
  sm: "text-[0.9375rem] leading-[1.6]",
  md: "text-base leading-[1.7]",
  lg: "text-lg leading-[1.7]"
};
const toneClasses = { default: "text-[var(--color-text)]", muted: "text-[var(--color-text-muted)]", accent: "text-[var(--color-accent)]" };

export function Text({ as, className, size = "md", tone = "default", children, ...props }: TextProps) {
  const Component = as ?? "p";
  return <Component className={cn("text-pretty", sizeClasses[size], toneClasses[tone], className)} {...props}>{children}</Component>;
}
