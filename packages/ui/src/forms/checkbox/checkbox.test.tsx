import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders with an accessible label", () => {
    render(<Checkbox label="Save this preference" />);
    expect(screen.getByLabelText("Save this preference")).toHaveAttribute("type", "checkbox");
  });
});