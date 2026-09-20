import { describe, expect, it } from "vitest";
import { buildCheckoutHref, calculateOrderTotals } from "./cart";
import { clampQuantity, parseBdtPrice } from "./pricing";

describe("storefront cart helpers", () => {
  it("calculates quantity and a single per-order gift fee", () => {
    expect(calculateOrderTotals(3490, 2, true, 200)).toEqual({
      subtotal: 6980,
      total: 7180
    });
  });

  it("preserves the selected gift presentation in the checkout URL", () => {
    expect(buildCheckoutHref({
      productSlug: "old-money-polo",
      quantity: 2,
      giftWrap: true,
      giftNote: "  With love  "
    })).toBe("/checkout?item=old-money-polo&quantity=2&giftWrap=1&giftNote=With+love");
  });

  it("ignores a gift note when wrapping is not selected", () => {
    expect(buildCheckoutHref({
      productSlug: "refined-set",
      quantity: 1,
      giftWrap: false,
      giftNote: "Do not include"
    })).toBe("/checkout?item=refined-set&quantity=1");
  });

  it("normalizes display prices and unsafe quantities", () => {
    expect(parseBdtPrice("BDT 5,890")).toBe(5890);
    expect(clampQuantity("99")).toBe(10);
    expect(clampQuantity("not-a-number")).toBe(1);
  });
});