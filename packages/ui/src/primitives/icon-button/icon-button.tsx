import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  ariaLabel: string;
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "outline" | "solid";
};

const sizeClasses = {
  sm: "h-11 w-11",
  md: "h-11 w-11",
  lg: "h-12 w-12"
};

const variantClasses = {
  ghost: "border border-transparent bg-transparent hover:bg-[var(--color-hover-surface)]",
  outline: "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-hover-surface)]",
  solid: "border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]"
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { ariaLabel, icon, size = "md", variant = "ghost", className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text)] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
});

