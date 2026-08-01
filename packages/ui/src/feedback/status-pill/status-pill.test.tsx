import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusPill } from "./status-pill";

describe("StatusPill", () => {
  it("renders status detail", () => {
    render(<StatusPill tone="info" label="Running" description="Campaign live" />);
    expect(screen.getByText("Campaign live")).toBeInTheDocument();
  });
});