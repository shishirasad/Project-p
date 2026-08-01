import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./hero";
import { editorialCampaignMedia } from "../story-data";

describe("Hero", () => {
  it("renders editorial copy and priority media", () => {
    render(<Hero media={editorialCampaignMedia} title="The House of Timeless Fashion" description="Quiet luxury" />);
    expect(screen.getByRole("heading", { level: 1, name: "The House of Timeless Fashion" })).toBeInTheDocument();
    expect(screen.getByAltText("Porsion Studio polo campaign with folded black polo and stone trousers")).toHaveAttribute("loading", "eager");
  });
});