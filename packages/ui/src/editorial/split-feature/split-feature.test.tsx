import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SplitFeature } from "./split-feature";
import { editorialCampaignMedia } from "../story-data";

describe("SplitFeature", () => {
  it("renders feature list items", () => {
    render(<SplitFeature media={editorialCampaignMedia} title="Fabric story" features={["Premium cotton", "Quiet fit"]} />);
    expect(screen.getByRole("heading", { level: 2, name: "Fabric story" })).toBeInTheDocument();
    expect(screen.getByText("Premium cotton")).toBeInTheDocument();
  });
});