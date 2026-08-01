import { Button } from "./button";

export default {
  title: "Primitives/Button",
  component: Button,
  args: {
    children: "Add to Bag"
  }
};

export const Primary = {};
export const Secondary = { args: { variant: "secondary", children: "Explore Faris" } };
export const Outline = { args: { variant: "outline", children: "View Details" } };
export const Ghost = { args: { variant: "ghost", children: "The Journal" } };
export const Loading = { args: { isLoading: true, children: "Processing" } };
