import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type ProductTitleProps = Omit<HTMLAttributes<HTMLHeadingElement>, "children"> & {
  as?: "h2" | "h3" | "h4";
  children: ReactNode;
  eyebrow?: ReactNode;
  subtitle?: ReactNode;
};

export function ProductTitle({ as: Component = "h3", children, eyebrow, subtitle, className, ...props }: ProductTitleProps) {
  return (
    <div className="min-w-0 space-y-1">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{eyebrow}</p> : null}
      <Component className={cn("text-base font-medium leading-snug text-[var(--color-text)]", className)} {...props}>{children}</Component>
      {subtitle ? <p className="text-sm leading-6 text-[var(--color-text-muted)]">{subtitle}</p> : null}
    </div>
  );
}
