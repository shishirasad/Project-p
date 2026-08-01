import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StepIndicator } from "./step-indicator";

const steps = [{ id: "draft", label: "Draft" }, { id: "review", label: "Review" }];

describe("StepIndicator", () => {
  it("marks the current step", () => {
    render(<StepIndicator steps={steps} currentStep="review" />);
    expect(screen.getByText("Review").closest("li")).toHaveAttribute("aria-current", "step");
  });
});