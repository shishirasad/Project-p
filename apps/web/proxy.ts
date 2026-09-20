import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type CampaignBrand = "faris" | "laaj" | "labannya";

function getCampaignBrand(searchParams: URLSearchParams): CampaignBrand | null {
  const explicitBrand = searchParams.get("brand")?.toLowerCase();
  if (explicitBrand === "faris" || explicitBrand === "laaj" || explicitBrand === "labannya") return explicitBrand;

  const campaignSignal = ["utm_campaign", "utm_content", "utm_term"]
    .map((key) => searchParams.get(key)?.toLowerCase() ?? "")
    .join(" ");

  if (campaignSignal.includes("faris")) return "faris";
  if (campaignSignal.includes("laaj")) return "laaj";
  if (campaignSignal.includes("labannya")) return "labannya";
  return null;
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const targetBrand = getCampaignBrand(request.nextUrl.searchParams);
  if (!targetBrand) return NextResponse.next();

  const brandUrl = request.nextUrl.clone();
  brandUrl.pathname = "/" + targetBrand;
  return NextResponse.redirect(brandUrl, 302);
}

export const config = {
  matcher: ["/"]
};