export type CartSelection = {
  productSlug: string;
  quantity: number;
  giftWrap: boolean;
  giftNote?: string;
  selectedColor?: string;
  selectedSize?: string;
};

export function calculateOrderTotals(unitPriceBdt: number, quantity: number, giftWrap: boolean, giftWrapFeeBdt: number) {
  const subtotal = unitPriceBdt * quantity;
  return {
    subtotal,
    total: subtotal + (giftWrap ? giftWrapFeeBdt : 0)
  };
}

export function buildCheckoutHref({ productSlug, quantity, giftWrap, giftNote, selectedColor, selectedSize }: CartSelection) {
  const params = new URLSearchParams({
    item: productSlug,
    quantity: String(quantity)
  });

  if (giftWrap) {
    params.set("giftWrap", "1");
    if (giftNote?.trim()) params.set("giftNote", giftNote.trim());
  }

  if (selectedColor) params.set("color", selectedColor);
  if (selectedSize) params.set("size", selectedSize);

  return `/checkout?${params.toString()}`;
}