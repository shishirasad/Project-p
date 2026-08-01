import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dialog } from "./dialog";

describe("Dialog", () => {
  it("renders a dialog by default", () => {
    render(<Dialog isOpen title="Save draft?" closeLabel="Close dialog" />);
    expect(screen.getByRole("dialog", { name: "Save draft?" })).toBeInTheDocument();
  });

  it("supports alertdialog role", () => {
    render(<Dialog isOpen role="alertdialog" title="Discard changes?" closeLabel="Close dialog" />);
    expect(screen.getByRole("alertdialog", { name: "Discard changes?" })).toBeInTheDocument();
  });
});