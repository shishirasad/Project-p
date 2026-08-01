import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InlineAlert } from "./inline-alert";

describe("InlineAlert", () => {
  it("renders an inline live message", () => {
    render(<InlineAlert tone="warning" message="Check this field" />);
    expect(screen.getByRole("status")).toHaveTextContent("Check this field");
  });
});