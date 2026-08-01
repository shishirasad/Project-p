import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "subtle" | "nav" | "underline";
};

const variantClasses = {
  default: "text-[var(--color-text)] hover:text-[var(--color-accent)]",
  subtle: "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
  nav: "text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
  underline: "text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--color-accent)]"
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ className, variant = "default", ...props }, ref) {
  return (
    <a
      ref={ref}
      className={cn("inline-flex min-h-11 items-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]", variantClasses[variant], className)}
      {...props}
    />
  );
});

