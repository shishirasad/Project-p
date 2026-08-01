import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "./text";

describe("Text", () => {
  it("renders text", () => {
    render(<Text>Quiet luxury</Text>);
    expect(screen.getByText("Quiet luxury")).toBeInTheDocument();
  });
});
