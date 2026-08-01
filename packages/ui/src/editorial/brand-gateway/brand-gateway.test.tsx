import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrandGateway } from "./brand-gateway";
import { brandGatewayItems } from "../story-data";

describe("BrandGateway", () => {
  it("renders brand destinations", () => {
    render(<BrandGateway title="Choose" items={brandGatewayItems} />);
    expect(screen.getByRole("link", { name: /Faris/ })).toHaveAttribute("href", "#faris");
    expect(screen.getByRole("link", { name: /Laaj/ })).toHaveAttribute("href", "#laaj");
  });
});