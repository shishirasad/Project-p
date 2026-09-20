"use client";

import Link from "next/link";
import { Heart, PackageOpen, ShieldCheck, ShoppingBag } from "lucide-react";
import { Heading, Text } from "@porsion/ui";
import { storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";
import { useStorefrontExperience } from "./storefront-experience-provider";

export function AccountFoundation() {
  const { experienceReady, wishlist, bagCount, lastOrder } = useStorefrontExperience();
  const orderStatus = lastOrder?.payment === "sslcommerz" ? "Payment pending" : "Confirmation pending";

  return (
    <div className="grid gap-10">
      <div className="grid max-w-3xl gap-4">
        <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Your Porsion</Text>
        <Heading as="h1" size="lg">One calm place for every choice.</Heading>
        <Text tone="muted">Your latest order reference, saved pieces, and current bag stay together on this device. Checkout remains guest-first and password-free.</Text>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <section className="grid content-start gap-5 border border-[var(--color-border)] bg-[var(--color-surface)] p-6" aria-labelledby="account-privacy-title">
          <ShieldCheck aria-hidden="true" className="text-[var(--color-accent)]" size={22} />
          <Heading as="h2" id="account-privacy-title" size="sm">Private by default</Heading>
          <Text size="sm" tone="muted">No account is required to order. Personal delivery details are entered only at secure checkout and are not displayed in this browser view.</Text>
          <Link href="/collection" className={storefrontPrimaryAction}>Continue shopping</Link>
          <Link href="/contact" className={storefrontSecondaryAction}>Get order help</Link>
        </section>

        <div className="grid gap-3 sm:grid-cols-3" aria-busy={!experienceReady || undefined}>
          <Link href={lastOrder ? "/order-confirmed" : "/collection"} className="grid min-h-52 content-start gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:bg-[var(--color-hover-surface)]">
            <PackageOpen aria-hidden="true" size={20} className="text-[var(--color-accent)]" />
            <Heading as="h2" size="sm">Latest order</Heading>
            <Text size="sm" tone="muted">{!experienceReady ? "Loading..." : lastOrder ? `${lastOrder.reference} · ${orderStatus}` : "No recent order on this device."}</Text>
          </Link>
          <Link href="/account/wishlist" className="grid min-h-52 content-start gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:bg-[var(--color-hover-surface)]">
            <Heart aria-hidden="true" size={20} className="text-[var(--color-accent)]" />
            <Heading as="h2" size="sm">Saved pieces</Heading>
            <Text size="sm" tone="muted">{!experienceReady ? "Loading..." : wishlist.length ? `${wishlist.length} piece${wishlist.length === 1 ? "" : "s"} saved for later.` : "Nothing saved yet."}</Text>
          </Link>
          <Link href="/cart" className="grid min-h-52 content-start gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:bg-[var(--color-hover-surface)]">
            <ShoppingBag aria-hidden="true" size={20} className="text-[var(--color-accent)]" />
            <Heading as="h2" size="sm">Your bag</Heading>
            <Text size="sm" tone="muted">{!experienceReady ? "Loading..." : bagCount ? `${bagCount} item${bagCount === 1 ? "" : "s"} ready for checkout.` : "Your bag is empty."}</Text>
          </Link>
        </div>
      </div>
    </div>
  );
}