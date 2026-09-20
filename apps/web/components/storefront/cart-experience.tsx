"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Gift, PlayCircle, ShieldCheck, ShoppingBag } from "lucide-react";
import {
  Button,
  Checkbox,
  EmptyState,
  Link,
  Modal,
  QuantityStepper,
  Text,
  Textarea
} from "@porsion/ui";
import { formatBdt, parseBdtPrice } from "@/lib/storefront/pricing";
import { storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";
import { useStorefrontExperience } from "./storefront-experience-provider";
import type { StorefrontBagItemInput } from "./storefront-experience-provider";

export type CartExperienceProps = {
  giftWrapFeeBdt: number;
  giftWrapDemoUrl?: string;
  initialItem?: StorefrontBagItemInput;
};

export function CartExperience({ giftWrapFeeBdt, giftWrapDemoUrl, initialItem }: CartExperienceProps) {
  const {
    experienceReady,
    bag,
    giftPresentation,
    addToBag,
    updateBagQuantity,
    removeFromBag,
    updateGiftPresentation
  } = useStorefrontExperience();
  const [isGiftPreviewOpen, setGiftPreviewOpen] = useState(false);
  const importedItem = useRef(false);

  useEffect(() => {
    if (!experienceReady || !initialItem || importedItem.current) return;
    importedItem.current = true;
    addToBag(initialItem);
  }, [addToBag, experienceReady, initialItem]);

  const subtotal = bag.reduce((total, item) => total + (parseBdtPrice(item.price) * item.quantity), 0);
  const total = subtotal + (giftPresentation.enabled ? giftWrapFeeBdt : 0);

  if (!experienceReady || (initialItem && bag.length === 0)) {
    return <div className="min-h-64 animate-pulse border-y border-[var(--color-border)] bg-[var(--color-surface)]" aria-label="Loading your bag" aria-busy="true" />;
  }

  if (!bag.length) {
    return (
      <EmptyState
        eyebrow="Your bag is empty"
        title="Begin with a piece that feels right."
        description="Shop menswear by FARIS or womenswear by LAAJ, then return here to place the order."
        icon={<ShoppingBag size={20} />}
        primaryAction={<Link href="/collection" className={storefrontPrimaryAction}>Shop all pieces</Link>}
        secondaryAction={<Link href="/" className={storefrontSecondaryAction}>Return home</Link>}
      />
    );
  }

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <div className="grid gap-5">
          <div className="grid gap-3" aria-label="Bag items">
            {bag.map((item) => (
              <article key={item.lineId} className="grid gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 sm:grid-cols-[96px_1fr] sm:items-start">
                <Link href={item.href} className="relative block aspect-square w-24 overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-background)] sm:w-full" aria-label={`View ${item.title}`}>
                  <Image src={item.image.src} alt={item.image.alt} fill sizes="96px" className="object-cover" />
                </Link>
                <div className="grid min-w-0 gap-3">
                  <div className="grid gap-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link href={item.href} className="line-clamp-2 text-sm font-medium leading-5 hover:text-[var(--color-accent)]">{item.title}</Link>
                        <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">{item.brand}</p>
                      </div>
                      <strong className="shrink-0 text-sm text-[var(--color-text)]">{item.price}</strong>
                    </div>
                    {item.color || item.size ? (
                      <p className="text-xs text-[var(--color-text-muted)]">{item.color ? `Colour: ${item.color}` : null}{item.color && item.size ? " / " : null}{item.size ? `Size: ${item.size}` : null}</p>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <QuantityStepper
                      label={`Quantity for ${item.title}`}
                      value={item.quantity}
                      min={1}
                      max={10}
                      onValueChange={(quantity) => updateBagQuantity(item.lineId, quantity)}
                      decrementLabel={`Decrease ${item.title} quantity`}
                      incrementLabel={`Increase ${item.title} quantity`}
                      inputLabel={`${item.title} quantity`}
                    />
                    <button type="button" onClick={() => removeFromBag(item.lineId)} className="min-h-9 text-xs underline underline-offset-4">Remove</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link href="/collection" variant="underline" className="w-fit">Continue shopping</Link>

          <section className="grid gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5" aria-labelledby="gift-presentation-title">
            <div className="flex items-start gap-3">
              <Gift className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" size={20} />
              <div className="grid min-w-0 flex-1 gap-2">
                <Text as="p" id="gift-presentation-title" className="font-medium">Make it a gift</Text>
                <Text size="sm" tone="muted">Premium wrapping is added once per order. A short personal note can be placed inside.</Text>
              </div>
            </div>

            <Checkbox
              checked={giftPresentation.enabled}
              onChange={(event) => updateGiftPresentation({ enabled: event.currentTarget.checked, note: giftPresentation.note })}
              label={`Add gift presentation (+${formatBdt(giftWrapFeeBdt)})`}
            />

            {giftPresentation.enabled ? (
              <div className="grid gap-3 border-t border-[var(--color-border)] pt-4">
                <Textarea
                  label="Gift note (optional)"
                  value={giftPresentation.note}
                  onChange={(event) => updateGiftPresentation({ enabled: true, note: event.currentTarget.value })}
                  maxLength={180}
                  rows={3}
                  placeholder="Write a short message for the recipient"
                  description={`${giftPresentation.note.length}/180 characters. Price details are not included in the parcel.`}
                />
              </div>
            ) : null}

            <Button
              type="button"
              variant="link"
              className="w-fit"
              leftIcon={<PlayCircle aria-hidden="true" size={18} />}
              onClick={() => setGiftPreviewOpen(true)}
            >
              Preview gift presentation
            </Button>
          </section>
        </div>

        <aside className="grid gap-6 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 lg:sticky lg:top-[calc(var(--announcement-height)+var(--nav-height-desktop)+24px)]" aria-label="Order summary" aria-live="polite">
          <div className="grid gap-3">
            <Text as="p" size="sm" className="font-medium">Order summary</Text>
            {bag.map((item) => (
              <div key={item.lineId} className="flex items-start justify-between gap-4 text-sm text-[var(--color-text-muted)]">
                <span>{item.quantity} x {item.title}</span>
                <span className="shrink-0">{formatBdt(parseBdtPrice(item.price) * item.quantity)}</span>
              </div>
            ))}
            {giftPresentation.enabled ? (
              <div className="flex items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
                <span>Gift presentation</span>
                <span>{formatBdt(giftWrapFeeBdt)}</span>
              </div>
            ) : null}
            <div className="flex items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
              <span>Delivery</span>
              <span>At checkout</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-3 text-sm font-medium">
              <span>Estimated total</span>
              <span>{formatBdt(total)}</span>
            </div>
          </div>

          <Link href="/checkout" className={storefrontPrimaryAction}>Continue to secure checkout</Link>

          <div className="grid gap-2 border-t border-[var(--color-border)] pt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck aria-hidden="true" size={18} className="text-[var(--color-accent)]" />
              <Text as="p" size="sm" className="font-medium">Fast guest checkout</Text>
            </div>
            <Text size="sm" tone="muted">No account needed. Choose Cash on Delivery or pay securely through SSLCommerz with bKash, Nagad, Rocket, bank cards, and supported banks.</Text>
          </div>
        </aside>
      </div>

      <Modal
        isOpen={isGiftPreviewOpen}
        onOpenChange={setGiftPreviewOpen}
        title="The Porsion gift presentation"
        description="A quiet, considered finish for the moment it is received."
        closeLabel="Close gift presentation preview"
        size="lg"
      >
        {giftWrapDemoUrl ? (
          <video className="aspect-video w-full bg-[var(--color-background)] object-cover" controls playsInline preload="metadata">
            <source src={giftWrapDemoUrl} />
            Your browser does not support the gift presentation video.
          </video>
        ) : (
          <div className="relative grid aspect-video w-full place-items-center overflow-hidden bg-[var(--color-background)]" role="img" aria-label="Animated preview of a Porsion Studio gift box with ribbon and note card">
            <div className="relative h-36 w-52 motion-safe:animate-pulse">
              <div className="absolute inset-x-0 bottom-0 h-28 border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm" />
              <div className="absolute left-1/2 top-0 h-full w-7 -translate-x-1/2 bg-[var(--color-accent)]" />
              <div className="absolute inset-x-0 top-10 h-7 bg-[var(--color-accent)]" />
              <div className="absolute left-1/2 top-16 -translate-x-1/2 bg-[var(--color-surface)] px-3 py-2 text-center text-[10px] uppercase tracking-[0.18em] text-[var(--color-text)] shadow-sm">Porsion Studio</div>
            </div>
          </div>
        )}
        <div className="grid gap-2 pt-3">
          <Text as="p" size="sm" className="font-medium">Included in the presentation</Text>
          <Text size="sm" tone="muted">Premium wrapping, ribbon finish, and an optional handwritten-style note card. The exact paper tone may vary by season.</Text>
        </div>
      </Modal>
    </>
  );
}