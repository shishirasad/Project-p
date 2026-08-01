import { ImageNarrative } from "./image-narrative";
import { editorialCampaignMedia } from "../story-data";

export default {
  title: "Editorial/ImageNarrative",
  component: ImageNarrative,
  args: {
    media: editorialCampaignMedia,
    eyebrow: "Lookbook",
    title: "A cinematic pause inside the page",
    caption: "Campaign imagery can carry story, texture, and product context.",
    children: "Image narratives let the homepage breathe between commerce and brand moments."
  }
};

export const Default = {};