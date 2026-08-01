import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:brightness-95",
  secondary: "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-hover-surface)]",
  outline: "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-hover-surface)]",
  ghost: "border border-transparent bg-transparent text-[var(--color-text)] hover:bg-[var(--color-hover-surface)]",
  link: "border border-transparent bg-transparent px-0 text-[var(--color-text)] underline-offset-4 hover:underline",
  danger: "border border-[var(--color-error)] bg-[var(--color-error)] text-[var(--color-on-error)] hover:brightness-95"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-11 px-3 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", isLoading = false, disabled, children, leftIcon, rightIcon, type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-medium uppercase tracking-[0.14em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        isLoading && "cursor-wait",
        className
      )}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading ? <span aria-hidden="true" className="h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" /> : leftIcon}
      <span>{children}</span>
      {!isLoading ? rightIcon : null}
    </button>
  );
});




