import { ProductImage } from "./product-image";
import { campaignImage } from "../story-data";

export default {
  title: "Commerce/ProductImage",
  component: ProductImage,
  args: {
    image: campaignImage,
    ratio: "portrait"
  }
};

export const Default = {};
export const Square = { args: { ratio: "square" } };
export const Loading = { args: { isLoading: true } };
