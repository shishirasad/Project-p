import { EditorialCard } from "./editorial-card";
import { editorialCampaignMedia } from "../story-data";

export default {
  title: "Editorial/EditorialCard",
  component: EditorialCard,
  args: {
    href: "#journal",
    media: editorialCampaignMedia,
    eyebrow: "Journal",
    title: "The discipline of quiet luxury",
    excerpt: "A short editorial card for journal, lookbook, campaign, and collection storytelling.",
    meta: "5 min read",
    actionLabel: "Read"
  }
};

export const Default = {};