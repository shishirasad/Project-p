"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import type { StorefrontProduct } from "@/lib/storefront/catalog";
import { storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";
import { useStorefrontExperience } from "./storefront-experience-provider";
import { FitSuggestion } from "./fit-suggestion";
import { ProductEnquiryDialog } from "./product-enquiry-dialog";
import { SaveProductButton } from "./save-product-button";

export function ProductPurchaseForm({ product }: { product: StorefrontProduct }) {
  const router = useRouter();
  const { addToBag } = useStorefrontExperience();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.value ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const hasBodySizeGuide = product.sizes.length > 1 && product.categoryKey !== "footwear";

  const addSelectedProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const colorLabel = product.colors.find((option) => option.value === selectedColor)?.label ?? selectedColor;
    addToBag({
      productId: String(product.id),
      productSlug: product.slug,
      href: product.href ?? `/product/${product.slug}`,
      title: String(product.title),
      brand: String(product.brand ?? "Porsion Studio"),
      price: String(product.price),
      image: product.image,
      color: colorLabel || undefined,
      size: selectedSize || undefined,
      quantity
    });
    router.push("/cart");
  };

  return (
    <>
      <form id="product-purchase" onSubmit={addSelectedProduct} className="grid gap-6">
        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-[var(--color-text)]">Colour</legend>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((option) => (
              <label key={option.value} className="cursor-pointer">
                <input className="peer sr-only" type="radio" name="color" value={option.value} checked={selectedColor === option.value} onChange={() => setSelectedColor(option.value)} />
                <span className="inline-flex min-h-11 items-center gap-2 border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm text-[var(--color-text)] transition peer-checked:border-[var(--color-accent)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-accent)]">
                  <span className="h-6 w-6 rounded-full border border-[var(--color-border)]" style={{ backgroundColor: option.color }} aria-hidden="true" />
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="grid gap-3">
          <div className="flex items-center justify-between gap-4">
            <legend className="text-sm font-medium text-[var(--color-text)]">Size</legend>
            {hasBodySizeGuide ? <FitSuggestion product={product} selectedSize={selectedSize} onSelectSize={setSelectedSize} /> : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((option) => (
              <label key={option} className="cursor-pointer">
                <input className="peer sr-only" type="radio" name="size" value={option} checked={selectedSize === option} onChange={() => setSelectedSize(option)} />
                <span className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm uppercase tracking-[0.12em] text-[var(--color-text-muted)] transition peer-checked:border-[var(--color-accent)] peer-checked:text-[var(--color-text)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-accent)]">{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="grid max-w-28 gap-2 text-sm font-medium text-[var(--color-text)]">
          Quantity
          <select value={quantity} onChange={(event) => setQuantity(Number(event.currentTarget.value))} className="min-h-11 border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]">
            {[1, 2, 3, 4, 5].map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>

        <button type="submit" className={storefrontPrimaryAction}>Add to bag</button>
        <button type="button" className={`${storefrontSecondaryAction} w-full gap-2`} onClick={() => setEnquiryOpen(true)}>
          <MessageCircle aria-hidden="true" size={17} />
          Ask on WhatsApp
        </button>
        <SaveProductButton productId={String(product.id)} productName={String(product.title)} />
        <p className="text-xs leading-5 text-[var(--color-text-muted)]">Your colour, size and quantity remain visible in the bag. No payment is taken at this step.</p>
      </form>

      <ProductEnquiryDialog
        product={product}
        isOpen={enquiryOpen}
        onOpenChange={setEnquiryOpen}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />
    </>
  );
}