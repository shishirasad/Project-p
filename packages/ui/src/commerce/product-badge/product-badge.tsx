import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { CommerceTone } from "../types";
import { commerceToneClasses } from "../utils";

export type ProductBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: CommerceTone;
  children: ReactNode;
};

export function ProductBadge({ tone = "neutral", children, className, ...props }: ProductBadgeProps) {
  return (
    <span className={cn("inline-flex min-h-7 items-center rounded-[var(--radius-sm)] border px-2 text-xs uppercase tracking-[0.14em]", commerceToneClasses[tone], className)} data-tone={tone} {...props}>
      {children}
    </span>
  );
}
