import "@testing-library/jest-dom";
import React from "react";

// Mock environment variables for tests
Object.defineProperty(window, "import.meta", {
  value: {
    env: {
      VITE_SPOONACULAR_API_KEY: "test-api-key",
    },
  },
});

// Mock the useFavorites hook
import { vi } from "vitest";

vi.mock("../context/FavoritesContext", () => ({
  useFavorites: () => ({
    favorites: [],
    addToFavorites: vi.fn(),
    removeFromFavorites: vi.fn(),
    isFavorite: vi.fn(() => false),
    toggleFavorite: vi.fn(),
  }),
  FavoritesProvider: ({ children }) =>
    React.createElement("div", null, children),
}));
