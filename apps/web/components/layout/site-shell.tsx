import type { ReactNode } from "react";
import { PageShell } from "@porsion/ui";
import type { BrandContext } from "@/types/brand";
import { BrandScope } from "@/components/theme/brand-scope";
import { SiteHeader } from "@/components/navigation/site-header";
import { MobileBottomNavigation } from "@/components/navigation/mobile-bottom-navigation";

export type SiteShellProps = {
  children: ReactNode;
  footer?: ReactNode;
  brandContext?: BrandContext;
  skipLinkLabel?: ReactNode;
};

export function SiteShell({ children, footer, brandContext = "house", skipLinkLabel = "Skip to content" }: SiteShellProps) {
  return (
    <BrandScope brandContext={brandContext}>
      <PageShell header={<SiteHeader brandContext={brandContext} />} footer={footer} skipLinkLabel={skipLinkLabel}>
        {children}
      </PageShell>
      <MobileBottomNavigation brandContext={brandContext} />
    </BrandScope>
  );
}