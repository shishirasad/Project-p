"use client";

import { Button } from "@porsion/ui";
import { Heart } from "lucide-react";
import { useStorefrontExperience } from "./storefront-experience-provider";

export function SaveProductButton({ productId, productName }: { productId: string; productName: string }) {
  const { isWishlisted, toggleWishlist } = useStorefrontExperience();
  const saved = isWishlisted(productId);

  return (
    <Button
      variant="outline"
      className="w-full"
      aria-pressed={saved}
      leftIcon={<Heart aria-hidden="true" size={17} fill={saved ? "currentColor" : "none"} />}
      onClick={() => toggleWishlist(productId)}
    >
      {saved ? "Saved to wishlist" : `Save ${productName}`}
    </Button>
  );
}
