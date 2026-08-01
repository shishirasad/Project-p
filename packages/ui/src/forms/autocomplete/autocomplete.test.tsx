import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Autocomplete } from "./autocomplete";

const options = [{ value: "shirts", label: "Shirts" }];

describe("Autocomplete", () => {
  it("enables browser autocomplete", () => {
    render(<Autocomplete label="Suggested product type" options={options} />);
    expect(screen.getByLabelText("Suggested product type")).toHaveAttribute("autocomplete", "on");
  });
});