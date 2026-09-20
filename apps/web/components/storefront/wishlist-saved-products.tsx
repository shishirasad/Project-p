"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { EmptyState, Grid } from "@porsion/ui";
import type { StorefrontProductCard } from "@/lib/storefront/catalog";
import { storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";
import { ProductCardWithSave } from "./product-card-with-save";
import { useStorefrontExperience } from "./storefront-experience-provider";

export function WishlistSavedProducts({ products }: { products: StorefrontProductCard[] }) {
  const { wishlist } = useStorefrontExperience();
  const savedProducts = products.filter((product) => wishlist.includes(product.id));

  if (!savedProducts.length) {
    return (
      <EmptyState
        eyebrow="Your wishlist"
        title="Nothing saved yet."
        description="Use the heart beside a product to keep a considered shortlist on this device."
        icon={<Heart size={20} />}
        primaryAction={<Link href="/collection" className={storefrontPrimaryAction}>View the collection</Link>}
        secondaryAction={<Link href="/account" className={storefrontSecondaryAction}>Account</Link>}
      />
    );
  }

  return <Grid columns={3} gap="lg">{savedProducts.map((product) => <ProductCardWithSave key={product.id} product={product} />)}</Grid>;
}
