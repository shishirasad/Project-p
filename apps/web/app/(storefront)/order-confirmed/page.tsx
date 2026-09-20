import type { Metadata } from "next";
import { Container, Section } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { OrderConfirmationExperience } from "@/components/storefront/order-confirmation-experience";
import { commerceConfig } from "@/config/commerce";
import { storefrontFooter } from "@/lib/storefront/page";

export const metadata: Metadata = {
  title: "Order received",
  description: "Your Porsion Studio order confirmation.",
  robots: { index: false, follow: false }
};

export default function OrderConfirmedPage() {
  return (
    <SiteShell footer={storefrontFooter()}>
      <Section aria-labelledby="order-confirmation-title">
        <Container>
          <h1 id="order-confirmation-title" className="sr-only">Order received</h1>
          <OrderConfirmationExperience giftWrapFeeBdt={commerceConfig.giftWrapFeeBdt} />
        </Container>
      </Section>
    </SiteShell>
  );
}