import { MediaBlock } from "./media-block";
import { editorialCampaignMedia } from "../story-data";

export default {
  title: "Editorial/MediaBlock",
  component: MediaBlock,
  args: {
    media: editorialCampaignMedia,
    ratio: "cinematic",
    caption: "A reusable media block for journal, campaign, and lookbook layouts."
  }
};

export const Default = {};
export const Portrait = { args: { ratio: "portrait" } };