import type { ReactNode } from "react";
import type { BrandContext } from "@/types/brand";

export type BrandScopeProps = {
  brandContext: BrandContext;
  children: ReactNode;
};

export function BrandScope({ brandContext, children }: BrandScopeProps) {
  return <div data-brand={brandContext}>{children}</div>;
}
