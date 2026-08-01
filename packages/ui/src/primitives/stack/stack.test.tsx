import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stack } from "./stack";

describe("Stack", () => {
  it("renders children", () => {
    render(<Stack><span>Item</span></Stack>);
    expect(screen.getByText("Item")).toBeInTheDocument();
  });
});
