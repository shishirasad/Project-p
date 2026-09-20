"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Gift, ShieldCheck, ShoppingBag } from "lucide-react";
import { Button, EmptyState, Input, Link, Radio, Text, Textarea } from "@porsion/ui";
import { formatBdt, parseBdtPrice } from "@/lib/storefront/pricing";
import { storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";
import { useStorefrontExperience } from "./storefront-experience-provider";

export type CheckoutExperienceProps = {
  courierNames: string;
  giftWrapFeeBdt: number;
  paymentFailed?: boolean;
};

export function CheckoutExperience({ courierNames, giftWrapFeeBdt, paymentFailed = false }: CheckoutExperienceProps) {
  const router = useRouter();
  const {
    experienceReady,
    bag,
    giftPresentation,
    updateGiftPresentation,
    completeCheckout
  } = useStorefrontExperience();
  const [isSubmitting, setSubmitting] = useState(false);
  const subtotal = bag.reduce((total, item) => total + (parseBdtPrice(item.price) * item.quantity), 0);
  const total = subtotal + (giftPresentation.enabled ? giftWrapFeeBdt : 0);

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const payment = formData.get("payment") === "sslcommerz" ? "sslcommerz" : "cod";
    const reference = completeCheckout(payment);
    if (reference) router.push("/order-confirmed");
    else setSubmitting(false);
  };

  if (!experienceReady) {
    return <div className="min-h-80 animate-pulse border-y border-[var(--color-border)] bg-[var(--color-surface)]" aria-label="Loading checkout" aria-busy="true" />;
  }

  if (!bag.length) {
    return (
      <EmptyState
        eyebrow="Your bag is empty"
        title="Add a piece before checkout."
        description="Your FARIS and LAAJ selections share one bag and one secure checkout."
        icon={<ShoppingBag size={20} />}
        primaryAction={<Link href="/collection" className={storefrontPrimaryAction}>Shop the collection</Link>}
        secondaryAction={<Link href="/cart" className={storefrontSecondaryAction}>Return to bag</Link>}
      />
    );
  }

  return (
    <>
      {paymentFailed ? (
        <div role="alert" className="border-l-2 border-[var(--color-error)] bg-[var(--color-surface)] p-4 text-sm leading-6 text-[var(--color-text)]">
          <strong className="block font-medium">Payment was not completed.</strong>
          Your bag is unchanged. Retry online payment or choose Cash on Delivery below.
        </div>
      ) : null}

      <form onSubmit={submitOrder} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <div className="grid gap-8">
          <fieldset className="grid gap-5 border-b border-[var(--color-border)] pb-8">
            <legend className="text-base font-medium text-[var(--color-text)]">Contact</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input name="fullName" label="Full name" autoComplete="name" required />
              <Input name="phone" label="Mobile number" type="tel" inputMode="tel" autoComplete="tel" required placeholder="01XXXXXXXXX" pattern="01[3-9][0-9]{8}" description="Bangladesh mobile number used for order confirmation." />
            </div>
            <Input name="email" label="Email (optional)" type="email" inputMode="email" autoComplete="email" placeholder="For an email receipt" />
          </fieldset>

          <fieldset className="grid gap-5 border-b border-[var(--color-border)] pb-8">
            <legend className="text-base font-medium text-[var(--color-text)]">Delivery</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input name="district" label="District or city" autoComplete="address-level2" required placeholder="Dhaka, Chattogram..." />
              <Input name="area" label="Area" autoComplete="address-level3" required placeholder="Gulshan, Dhanmondi..." />
            </div>
            <Input name="address" label="Complete address" autoComplete="street-address" required placeholder="House, road, building, and landmark" />
          </fieldset>

          {giftPresentation.enabled ? (
            <fieldset className="grid gap-4 border-b border-[var(--color-border)] pb-8">
              <legend className="flex items-center gap-2 text-base font-medium text-[var(--color-text)]">
                <Gift aria-hidden="true" size={18} className="text-[var(--color-accent)]" />
                Gift note
              </legend>
              <Textarea
                name="giftNote"
                label="Message (optional)"
                value={giftPresentation.note}
                onChange={(event) => updateGiftPresentation({ enabled: true, note: event.currentTarget.value })}
                maxLength={180}
                rows={3}
                description="Up to 180 characters. The parcel will not include product prices."
              />
            </fieldset>
          ) : null}

          <fieldset className="grid gap-5">
            <legend className="text-base font-medium text-[var(--color-text)]">Payment</legend>
            <Radio
              name="payment"
              label="Choose a payment method"
              defaultValue="cod"
              options={[
                { value: "cod", label: "Cash on Delivery", description: "Pay when the order arrives. No advance payment." },
                { value: "sslcommerz", label: "Pay online via SSLCommerz", description: "Use bKash, Nagad, Rocket, bank card, or a supported bank channel." }
              ]}
            />
            <Text size="sm" tone="muted">Wallet or card credentials are handled in the secure SSLCommerz payment window and are not stored by Porsion Studio.</Text>
          </fieldset>
        </div>

        <aside className="grid gap-6 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 lg:sticky lg:top-[calc(var(--announcement-height)+var(--nav-height-desktop)+24px)]" aria-label="Checkout summary">
          <div className="grid gap-3">
            <Text as="p" size="sm" className="font-medium">Order summary</Text>
            {bag.map((item) => (
              <div key={item.lineId} className="flex items-start justify-between gap-4 text-sm">
                <span className="min-w-0 text-[var(--color-text-muted)]">
                  {item.quantity} x {item.title}
                  {item.color || item.size ? <small className="mt-1 block">{item.color ? `Colour: ${item.color}` : null}{item.color && item.size ? " / " : null}{item.size ? `Size: ${item.size}` : null}</small> : null}
                </span>
                <span className="shrink-0">{formatBdt(parseBdtPrice(item.price) * item.quantity)}</span>
              </div>
            ))}
            {giftPresentation.enabled ? (
              <div className="flex items-start justify-between gap-4 text-sm">
                <span className="text-[var(--color-text-muted)]">Gift presentation</span>
                <span>{formatBdt(giftWrapFeeBdt)}</span>
              </div>
            ) : null}
            <div className="flex items-start justify-between gap-4 text-sm">
              <span className="text-[var(--color-text-muted)]">Delivery</span>
              <span className="text-right">Courier-calculated</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-3 text-sm font-medium">
              <span>Subtotal before delivery</span>
              <span>{formatBdt(total)}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 border-t border-[var(--color-border)] pt-4">
            <ShieldCheck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
            <Text size="sm" tone="muted">{courierNames} calculates delivery from destination, parcel weight, and service. The final charge is confirmed before dispatch.</Text>
          </div>

          <label className="grid min-h-11 grid-cols-[1.25rem_1fr] items-start gap-3 border-t border-[var(--color-border)] pt-4 text-sm leading-6 text-[var(--color-text-muted)]">
            <input
              type="checkbox"
              name="policyAccepted"
              required
              className="mt-1 size-4 accent-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            />
            <span>
              I agree to the <Link href="/terms" variant="underline">Terms</Link>, <Link href="/delivery" variant="underline">Delivery Policy</Link>, <Link href="/returns" variant="underline">3-day Return Policy</Link>, and <Link href="/privacy" variant="underline">Privacy Policy</Link>.
            </span>
          </label>

          <Button type="submit" size="lg" disabled={isSubmitting} isLoading={isSubmitting} className="w-full">Place order</Button>
          <Link href="/cart" variant="underline" className="justify-center">Return to bag</Link>
        </aside>
      </form>
    </>
  );
}