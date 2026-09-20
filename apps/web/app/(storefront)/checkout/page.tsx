import type { Metadata } from "next";
import { Breadcrumb, Container, Heading, Section, StepIndicator, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { CheckoutExperience } from "@/components/storefront/checkout-experience";
import { businessProfile, fulfillmentPolicy } from "@/config/business";
import { commerceConfig } from "@/config/commerce";
import { storefrontFooter } from "@/lib/storefront/page";

export type CheckoutPageProps = {
  searchParams: Promise<{ payment?: string }>;
};

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Porsion Studio order.",
  robots: { index: false, follow: false }
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { payment } = await searchParams;
  const courierNames = fulfillmentPolicy.couriers.join(" / ");

  return (
    <SiteShell footer={storefrontFooter()}>
      <Section aria-labelledby="checkout-title">
        <Container className="grid max-w-[var(--container-checkout)] gap-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Bag", href: "/cart" }, { label: "Checkout" }]} />
          <div className="grid max-w-3xl gap-3">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Secure guest checkout</Text>
            <Heading as="h1" id="checkout-title" size="lg">Delivery, payment, done.</Heading>
            <Text tone="muted">No account or password. We will confirm the order through {businessProfile.phone ? "your mobile number" : "the mobile number you provide"}.</Text>
          </div>
          <StepIndicator
            currentStep="delivery"
            steps={[
              { id: "bag", label: "Bag", description: "Review" },
              { id: "delivery", label: "Checkout", description: "Delivery and payment" },
              { id: "confirmation", label: "Done", description: "Order received" }
            ]}
          />
          <CheckoutExperience courierNames={courierNames} giftWrapFeeBdt={commerceConfig.giftWrapFeeBdt} paymentFailed={payment === "failed"} />
        </Container>
      </Section>
    </SiteShell>
  );
}