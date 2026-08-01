import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("associates label and description with the control", () => {
    render(<Input label="Email address" description="Use your account email." />);
    const input = screen.getByLabelText("Email address");
    expect(input).toHaveAccessibleDescription("Use your account email.");
  });

  it("marks invalid state accessibly", () => {
    render(<Input label="Email address" isInvalid errorMessage="Enter a valid email address." />);
    const input = screen.getByLabelText("Email address");
    expect(input).toBeInvalid();
    expect(input).toHaveAccessibleDescription("Enter a valid email address.");
  });

  it("disables while loading", () => {
    render(<Input label="Email address" isLoading />);
    expect(screen.getByLabelText("Email address")).toBeDisabled();
  });
});