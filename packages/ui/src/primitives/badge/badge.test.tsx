import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders badge text", () => {
    render(<Badge>New Arrival</Badge>);
    expect(screen.getByText("New Arrival")).toBeInTheDocument();
  });
});
