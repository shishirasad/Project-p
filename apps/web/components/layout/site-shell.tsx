import type { ReactNode } from "react";
import { PageShell } from "@porsion/ui";
import type { BrandContext } from "@/types/brand";
import { BrandScope } from "@/components/theme/brand-scope";
import { PremiumSiteHeader } from "@/components/navigation/premium-site-header";
import { MobileBottomNavigation } from "@/components/navigation/mobile-bottom-navigation";

export type SiteShellProps = {
  children: ReactNode;
  footer?: ReactNode;
  brandContext?: BrandContext;
  skipLinkLabel?: ReactNode;
  overlayHeader?: boolean;
};

export function SiteShell({ children, footer, brandContext = "house", skipLinkLabel = "Skip to content", overlayHeader = false }: SiteShellProps) {
  return (
    <BrandScope brandContext={brandContext}>
      <PageShell header={<PremiumSiteHeader brandContext={brandContext} overlayHero={overlayHeader} />} footer={footer} skipLinkLabel={skipLinkLabel}>
        {!overlayHeader ? <div aria-hidden="true" className="h-[calc(var(--announcement-height)+var(--nav-height-mobile))] lg:h-[calc(var(--announcement-height)+var(--nav-height-desktop))]" /> : null}
        <div className="storefront-route-enter">{children}</div>
      </PageShell>
      <MobileBottomNavigation brandContext={brandContext} />
    </BrandScope>
  );
}