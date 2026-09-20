"use client";

import { CheckCircle2, ShoppingBag } from "lucide-react";
import { EmptyState, Heading, Link, SuccessState, Text } from "@porsion/ui";
import { formatBdt, parseBdtPrice } from "@/lib/storefront/pricing";
import { storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";
import { useStorefrontExperience } from "./storefront-experience-provider";

export function OrderConfirmationExperience({ giftWrapFeeBdt }: { giftWrapFeeBdt: number }) {
  const { experienceReady, lastOrder } = useStorefrontExperience();

  if (!experienceReady) {
    return <div className="min-h-80 animate-pulse border-y border-[var(--color-border)] bg-[var(--color-surface)]" aria-label="Loading order confirmation" aria-busy="true" />;
  }

  if (!lastOrder) {
    return (
      <EmptyState
        eyebrow="No recent order"
        title="There is no confirmation on this device."
        description="Your most recent checkout confirmation will remain available here."
        icon={<ShoppingBag size={20} />}
        primaryAction={<Link href="/collection" className={storefrontPrimaryAction}>Shop the collection</Link>}
        secondaryAction={<Link href="/contact" className={storefrontSecondaryAction}>Contact support</Link>}
      />
    );
  }

  const subtotal = lastOrder.items.reduce((total, item) => total + (parseBdtPrice(item.price) * item.quantity), 0);
  const total = subtotal + (lastOrder.giftPresentation.enabled ? giftWrapFeeBdt : 0);
  const paymentDescription = lastOrder.payment === "sslcommerz"
    ? "Online payment is selected. Complete the secure SSLCommerz step to release the order for processing."
    : "Cash on Delivery is selected. The team will confirm delivery details through your mobile number.";

  return (
    <div className="grid gap-8">
      <SuccessState
        eyebrow="Order received"
        title="Thank you. Your order is with us."
        description={paymentDescription}
        icon={<CheckCircle2 size={22} />}
        primaryAction={<Link href="/collection" className={storefrontPrimaryAction}>Continue shopping</Link>}
        secondaryAction={<Link href="/contact" className={storefrontSecondaryAction}>Contact support</Link>}
      />
      <div className="mx-auto grid w-full max-w-2xl gap-5 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] pb-4">
          <div>
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.16em]">Order reference</Text>
            <Heading as="h2" size="sm" className="mt-2">{lastOrder.reference}</Heading>
          </div>
          <Text size="sm" tone="muted">{lastOrder.payment === "sslcommerz" ? "Payment pending" : "Confirmation pending"}</Text>
        </div>
        <div className="grid gap-3 text-sm">
          {lastOrder.items.map((item) => (
            <div key={item.lineId} className="grid gap-1 border-b border-[var(--color-border)] pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between gap-4"><span className="text-[var(--color-text-muted)]">{item.quantity} x {item.title}</span><span>{formatBdt(parseBdtPrice(item.price) * item.quantity)}</span></div>
              {item.color || item.size ? <Text size="sm" tone="muted">{item.color ? `Colour: ${item.color}` : null}{item.color && item.size ? " / " : null}{item.size ? `Size: ${item.size}` : null}</Text> : null}
            </div>
          ))}
          {lastOrder.giftPresentation.enabled ? <div className="flex justify-between gap-4"><span className="text-[var(--color-text-muted)]">Gift presentation</span><span>{formatBdt(giftWrapFeeBdt)}</span></div> : null}
          <div className="flex justify-between gap-4 border-t border-[var(--color-border)] pt-3 font-medium"><span>Subtotal before delivery</span><span>{formatBdt(total)}</span></div>
        </div>
        <Text size="sm" tone="muted">Keep this reference for delivery, payment, return, or exchange support.</Text>
      </div>
    </div>
  );
}