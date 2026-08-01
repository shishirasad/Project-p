import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EditorialCard } from "./editorial-card";
import { editorialCampaignMedia } from "../story-data";

describe("EditorialCard", () => {
  it("renders as a link when href is provided", () => {
    render(<EditorialCard href="#journal" media={editorialCampaignMedia} title="Journal entry" actionLabel="Read" />);
    expect(screen.getByRole("link", { name: /Journal entry/ })).toHaveAttribute("href", "#journal");
  });
});