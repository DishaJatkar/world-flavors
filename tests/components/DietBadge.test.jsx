import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import DietBadge from "../../src/components/DietBadge";

describe("DietBadge Component", () => {
  it("renders correctly with different diet types", () => {
    const diets = [
      "vegetarian",
      "vegan",
      "gluten free",
      "ketogenic",
      "dairy free",
      "paleo",
      "unknown diet",
    ];
    diets.forEach((diet) => {
      const { getByText } = render(<DietBadge diet={diet} />);
      const badgeElement = getByText(new RegExp(diet, "i"));
      expect(badgeElement).toBeInTheDocument();
    });
  });

  it("applies correct styles based on diet type", () => {
    const { getByText } = render(<DietBadge diet="vegan" />);
    const badgeElement = getByText(/vegan/i);
    expect(badgeElement).toHaveClass("bg-emerald-100");
    expect(badgeElement).toHaveClass("text-emerald-800");
    expect(badgeElement).toHaveClass("border-emerald-200");
  });
});
