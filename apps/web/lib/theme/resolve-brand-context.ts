import type { BrandContext } from "@/types/brand";

export function resolveBrandContextFromPath(pathname: string): BrandContext {
  if (pathname.startsWith("/faris")) return "faris";
  if (pathname.startsWith("/laaj")) return "laaj";
  if (pathname.startsWith("/labannya")) return "labannya";
  if (pathname.startsWith("/campaign") || pathname.startsWith("/l/")) return "campaign";
  return "house";
}
