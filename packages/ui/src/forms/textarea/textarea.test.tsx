import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders an accessible textarea", () => {
    render(<Textarea label="Delivery note" />);
    expect(screen.getByLabelText("Delivery note")).toBeInTheDocument();
  });

  it("announces invalid copy", () => {
    render(<Textarea label="Delivery note" isInvalid errorMessage="Note is too long." />);
    expect(screen.getByRole("alert")).toHaveTextContent("Note is too long.");
  });
});