"use client";

import { useState } from "react";
import { ProductCard } from "@porsion/ui";
import type { StorefrontProductCard } from "@/lib/storefront/catalog";
import { ProductEnquiryDialog } from "./product-enquiry-dialog";
import { useStorefrontExperience } from "./storefront-experience-provider";

export function ProductCardWithSave({ product, variant = "standard", priority = false, imageRatio, viewProductLabel }: { product: StorefrontProductCard; variant?: "standard" | "compact" | "editorial"; priority?: boolean; imageRatio?: "portrait" | "square" | "wide"; viewProductLabel?: string }) {
  const { isWishlisted, toggleWishlist } = useStorefrontExperience();
  const saved = isWishlisted(product.id);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <ProductCard
        product={product}
        variant={variant}
        imageRatio={imageRatio ?? (variant === "compact" ? "square" : "portrait")}
        imagePriority={priority}
        viewProductLabel={viewProductLabel ?? `View ${product.title}`}
        wishlistLabel={saved ? `Remove ${product.title} from saved pieces` : `Save ${product.title}`}
        enquiryLabel={`Ask about ${product.title}`}
        isWishlisted={saved}
        onWishlist={() => toggleWishlist(product.id)}
        onEnquiry={() => setEnquiryOpen(true)}
      />
      <ProductEnquiryDialog product={product} isOpen={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  );
}
