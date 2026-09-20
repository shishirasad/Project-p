const parsedGiftWrapFee = Number(process.env.NEXT_PUBLIC_GIFT_WRAP_FEE_BDT ?? "200");

export const commerceConfig = {
  giftWrapFeeBdt: Number.isFinite(parsedGiftWrapFee) && parsedGiftWrapFee >= 0 ? parsedGiftWrapFee : 200,
  giftWrapDemoUrl: process.env.NEXT_PUBLIC_GIFT_WRAP_DEMO_URL?.trim() || undefined
} as const;