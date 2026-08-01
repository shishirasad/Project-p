import { Hero } from "./hero";
import { editorialActions, editorialCampaignMedia } from "../story-data";

export default {
  title: "Editorial/Hero",
  component: Hero,
  args: {
    media: editorialCampaignMedia,
    eyebrow: "Porsion Studio",
    title: "The House of Timeless Fashion",
    description: "A quiet luxury fashion house built for Faris, Laaj, and the next chapter of modern Bangladeshi design.",
    actions: editorialActions
  }
};

export const Default = {};
export const Centered = { args: { align: "center" } };
export const Medium = { args: { height: "medium" } };