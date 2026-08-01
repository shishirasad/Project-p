import { BrandGateway } from "./brand-gateway";
import { brandGatewayItems } from "../story-data";

export default {
  title: "Editorial/BrandGateway",
  component: BrandGateway,
  args: {
    eyebrow: "House of brands",
    title: "Choose your direction",
    description: "One house, distinct expressions for menswear and womenswear.",
    items: brandGatewayItems
  }
};

export const Default = {};