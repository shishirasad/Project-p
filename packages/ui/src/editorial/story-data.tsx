import { Button } from "../primitives/button";
import { Link } from "../primitives/link";
import type { BrandGatewayItem } from "./brand-gateway";
import type { EditorialMedia } from "./types";

export const editorialCampaignMedia: EditorialMedia = {
  src: "/brand-assets/porsion-studio-old-money-polo-campaign.png",
  alt: "Porsion Studio polo campaign with folded black polo and stone trousers",
  width: 960,
  height: 400,
  sizes: "(min-width: 768px) 50vw, 100vw"
};

export const editorialMarkMedia: EditorialMedia = {
  src: "/brand-assets/porsion-studio-logo-mark.jpg",
  alt: "Porsion Studio gold logo mark",
  width: 200,
  height: 200,
  sizes: "(min-width: 768px) 30vw, 100vw"
};

export const editorialActions = (
  <>
    <Button>Explore collection</Button>
    <Link href="#journal" variant="underline">Read the journal</Link>
  </>
);

export const brandGatewayItems: BrandGatewayItem[] = [
  {
    id: "faris",
    name: "Faris",
    href: "#faris",
    eyebrow: "Menswear",
    description: "Modern menswear shaped by quiet confidence.",
    media: editorialCampaignMedia,
    actionLabel: "Enter Faris"
  },
  {
    id: "laaj",
    name: "Laaj",
    href: "#laaj",
    eyebrow: "Womenswear",
    description: "Refined womenswear with an understated feminine rhythm.",
    media: editorialCampaignMedia,
    actionLabel: "Enter Laaj"
  }
];