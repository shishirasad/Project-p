import { CampaignBlock } from "./campaign-block";
import { editorialActions, editorialCampaignMedia } from "../story-data";

export default {
  title: "Editorial/CampaignBlock",
  component: CampaignBlock,
  args: {
    media: editorialCampaignMedia,
    eyebrow: "Old Money Polo Collection",
    title: "Quiet pieces for daily confidence",
    description: "Campaign blocks connect seasonal marketing stories with calm commerce-ready content.",
    actions: editorialActions
  }
};

export const Default = {};
export const MediaStart = { args: { mediaPosition: "start" } };