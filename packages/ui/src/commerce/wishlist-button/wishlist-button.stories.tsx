import { WishlistButton } from "./wishlist-button";

export default {
  title: "Commerce/WishlistButton",
  component: WishlistButton,
  args: {
    ariaLabel: "Save to wishlist"
  }
};

export const Default = {};
export const Selected = { args: { isSelected: true } };
