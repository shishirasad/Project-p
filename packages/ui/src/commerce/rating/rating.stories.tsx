import { Rating } from "./rating";

export default {
  title: "Commerce/Rating",
  component: Rating,
  args: {
    value: 4.5,
    label: "Rated 4.5 out of 5",
    showValue: true
  }
};

export const Default = {};
export const Small = { args: { size: "sm" } };
