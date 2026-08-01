import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ImageNarrative } from "./image-narrative";
import { editorialCampaignMedia } from "../story-data";

describe("ImageNarrative", () => {
  it("renders caption and narrative body", () => {
    render(<ImageNarrative media={editorialCampaignMedia} caption="Campaign image">Narrative copy</ImageNarrative>);
    expect(screen.getByText("Campaign image")).toBeInTheDocument();
    expect(screen.getByText("Narrative copy")).toBeInTheDocument();
  });
});