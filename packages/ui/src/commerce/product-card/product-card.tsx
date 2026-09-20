import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "../../lib/cn";
import { IconButton } from "../../primitives/icon-button";
import { ProductImage } from "../product-image";
import { ProductTitle } from "../product-title";
import { ProductPrice } from "../product-price";
import { AddToBagButton } from "../add-to-bag-button";
import { WishlistButton } from "../wishlist-button";
import { CompareButton } from "../compare-button";
import type { CommerceImageRatio, ProductCardProduct, ProductCardVariant } from "../types";

export type ProductCardProps = Omit<HTMLAttributes<HTMLElement>, "onSelect"> & {
  product: ProductCardProduct;
  variant?: ProductCardVariant;
  imageRatio?: CommerceImageRatio;
  viewProductLabel?: string;
  addToBagLabel?: string;
  wishlistLabel?: string;
  enquiryLabel?: string;
  compareLabel?: string;
  isWishlisted?: boolean;
  isCompared?: boolean;
  imagePriority?: boolean;
  isLoading?: boolean;
  footer?: ReactNode;
  onProductSelect?: (product: ProductCardProduct) => void;
  onAddToBag?: (product: ProductCardProduct) => void;
  onWishlist?: (product: ProductCardProduct) => void;
  onEnquiry?: (product: ProductCardProduct) => void;
  onCompare?: (product: ProductCardProduct) => void;
};

const variantClasses: Record<ProductCardVariant, string> = {
  standard: "gap-3",
  compact: "gap-2",
  editorial: "gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] p-3"
};

export function ProductCard({
  product,
  variant = "standard",
  imageRatio,
  viewProductLabel,
  addToBagLabel,
  wishlistLabel,
  enquiryLabel,
  compareLabel,
  isWishlisted = false,
  isCompared = false,
  imagePriority = false,
  isLoading = false,
  footer,
  onProductSelect,
  onAddToBag,
  onWishlist,
  onEnquiry,
  onCompare,
  className,
  ...props
}: ProductCardProps) {
  const resolvedImageRatio = imageRatio ?? (variant === "compact" ? "square" : "portrait");
  const contentClassName = "grid min-w-0 gap-0 rounded-[var(--radius-sm)] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";
  const hasActions = Boolean((onAddToBag && addToBagLabel) || (onWishlist && wishlistLabel) || (onEnquiry && enquiryLabel) || (onCompare && compareLabel));
  const linkSelectionProps = onProductSelect ? { onClick: () => onProductSelect(product) } : undefined;
  const productContent = (
    <>
      <ProductImage image={product.image} ratio={resolvedImageRatio} priority={imagePriority} isLoading={isLoading} overlay={product.badges?.map((badge, index) => <span key={index}>{badge}</span>)} />
      <div className={cn("grid gap-2 px-1 pt-3", variant === "compact" && "gap-1 pt-2")}>
        <ProductTitle eyebrow={product.brand} subtitle={product.subtitle}>{product.title}</ProductTitle>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} />
          {product.status ? <span className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{product.status}</span> : null}
        </div>
      </div>
    </>
  );

  function handleProductKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onProductSelect?.(product);
    }
  }

  return (
    <article className={cn("group grid min-w-0 rounded-[var(--radius-sm)] text-[var(--color-text)]", variantClasses[variant], className)} data-product-id={product.id} data-variant={variant} {...props}>
      {product.href ? (
        <a className={contentClassName} href={product.href} aria-label={viewProductLabel} {...linkSelectionProps}>
          {productContent}
        </a>
      ) : onProductSelect ? (
        <div className={cn(contentClassName, "cursor-pointer")} role="button" tabIndex={0} aria-label={viewProductLabel} onClick={() => onProductSelect(product)} onKeyDown={handleProductKeyDown}>
          {productContent}
        </div>
      ) : (
        <div className={contentClassName}>{productContent}</div>
      )}
      {hasActions ? (
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          {onAddToBag && addToBagLabel ? <AddToBagButton className="flex-1" label={addToBagLabel} onClick={() => onAddToBag(product)} /> : null}
          {onWishlist && wishlistLabel ? <WishlistButton ariaLabel={wishlistLabel} isSelected={isWishlisted} onClick={() => onWishlist(product)} /> : null}
          {onEnquiry && enquiryLabel ? <IconButton ariaLabel={enquiryLabel} title={enquiryLabel} icon={<MessageCircle aria-hidden="true" size={17} strokeWidth={1.8} />} onClick={() => onEnquiry(product)} /> : null}
          {onCompare && compareLabel ? <CompareButton ariaLabel={compareLabel} isSelected={isCompared} onClick={() => onCompare(product)} /> : null}
        </div>
      ) : null}
      {footer ? <div className="px-1 text-sm text-[var(--color-text-muted)]">{footer}</div> : null}
    </article>
  );
}
