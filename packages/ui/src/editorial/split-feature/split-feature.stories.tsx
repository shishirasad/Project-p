import { SplitFeature } from "./split-feature";
import { editorialActions, editorialCampaignMedia } from "../story-data";

export default {
  title: "Editorial/SplitFeature",
  component: SplitFeature,
  args: {
    media: editorialCampaignMedia,
    eyebrow: "Fabric story",
    title: "Material, proportion, and restraint",
    description: "Split features support longer product, fabric, brand, and campaign storytelling without creating a page-specific component.",
    features: ["Premium material narrative", "Fit and proportion detail", "Care and longevity message"],
    actions: editorialActions
  }
};

export const Default = {};
export const MediaEnd = { args: { mediaPosition: "end" } };