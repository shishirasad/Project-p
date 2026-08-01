import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MediaBlock } from "./media-block";
import { editorialCampaignMedia } from "../story-data";

describe("MediaBlock", () => {
  it("renders media with caption", () => {
    render(<MediaBlock media={editorialCampaignMedia} caption="Lookbook media" />);
    expect(screen.getByAltText("Porsion Studio polo campaign with folded black polo and stone trousers")).toBeInTheDocument();
    expect(screen.getByText("Lookbook media")).toBeInTheDocument();
  });
});