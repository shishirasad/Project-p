import { CTASection } from "./cta-section";
import { editorialActions } from "../story-data";

export default {
  title: "Editorial/CTASection",
  component: CTASection,
  args: {
    eyebrow: "Begin",
    title: "Enter the digital flagship",
    description: "A calm call-to-action block for collection, brand, campaign, and journal journeys.",
    actions: editorialActions
  }
};

export const Default = {};
export const LeftAligned = { args: { align: "start" } };