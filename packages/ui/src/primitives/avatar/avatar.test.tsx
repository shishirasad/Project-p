import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("renders initials", () => {
    render(<Avatar initials="PS" />);
    expect(screen.getByText("PS")).toBeInTheDocument();
  });
});
