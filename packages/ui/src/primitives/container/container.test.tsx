import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./container";

describe("Container", () => {
  it("renders content", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
