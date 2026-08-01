import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CampaignBlock } from "./campaign-block";
import { editorialCampaignMedia } from "../story-data";

describe("CampaignBlock", () => {
  it("renders campaign story content", () => {
    render(<CampaignBlock media={editorialCampaignMedia} title="Quiet pieces" description="Campaign copy" />);
    expect(screen.getByRole("heading", { level: 2, name: "Quiet pieces" })).toBeInTheDocument();
    expect(screen.getByText("Campaign copy")).toBeInTheDocument();
  });
});