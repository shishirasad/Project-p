import type { Metadata } from "next";
import { Container, Section } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { AccountFoundation } from "@/components/storefront/account-foundation";
import { storefrontFooter } from "@/lib/storefront/page";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your Porsion Studio account, orders, and saved pieces.",
  robots: { index: false, follow: false }
};

export default function AccountPage() {
  return (
    <SiteShell footer={storefrontFooter()}>
      <Section>
        <Container>
          <AccountFoundation />
        </Container>
      </Section>
    </SiteShell>
  );
}
