import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type ProductPriceProps = HTMLAttributes<HTMLDivElement> & {
  price: ReactNode;
  compareAtPrice?: ReactNode;
  priceLabel?: string;
  compareAtPriceLabel?: string;
};

export function ProductPrice({ price, compareAtPrice, priceLabel, compareAtPriceLabel, className, ...props }: ProductPriceProps) {
  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm", className)} {...props}>
      <span className="font-medium text-[var(--color-text)]" aria-label={priceLabel}>{price}</span>
      {compareAtPrice ? <span className="text-[var(--color-text-muted)] line-through" aria-label={compareAtPriceLabel}>{compareAtPrice}</span> : null}
    </div>
  );
}
