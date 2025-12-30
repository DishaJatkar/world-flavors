import React, { useState, useEffect } from "react";
import SearchSection from "../components/SearchSection";
import RecipeGrid from "../components/RecipeGrid";
import Pagination from "../components/Pagination";
import LoadingState from "../components/LoadingState";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import { searchRecipes } from "../services/recipeService";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useState({
    ingredients: "",
    diet: "",
    cuisine: "",
    maxReadyTime: "",
  });
  const [hasSearched, setHasSearched] = useState(false);
  console.log("searchParams", searchParams);

  const handleSearch = async (params, page = 1) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    const queryParams = {
      number: 12,
      offset: (page - 1) * 12,
    };
    if (params.ingredients) {
      queryParams.includeIngredients = params.ingredients;
    }
    if (params.diet) {
      queryParams.diet = params.diet;
    }
    if (params.cuisine) {
      queryParams.cuisine = params.cuisine;
    }
    if (params.maxReadyTime) {
      queryParams.maxReadyTime = params.maxReadyTime;
    }
    const queryString = new URLSearchParams(queryParams).toString();

    try {
      // const data = await searchRecipes(params, page)
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_SPOONACULAR_API_KEY
        }&addRecipeInformation=true&${queryString}`
      );
      const data = await response.json();
      console.log("data", data.results);
      setRecipes(data.results);
      setTotalPages(Math.ceil(data.totalResults / 12));
      setCurrentPage(page);
      setSearchParams(params);
    } catch (err) {
      console.error("API error:", err);
      setError("Failed to fetch recipes. Please try again.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    handleSearch(searchParams, page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-sage-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 animate-fade-in">
            <span className="gradient-text">Discover</span>
            <br />
            <span className="text-sage-800">Culinary Magic</span>
          </h1>
          <p className="text-xl text-sage-600 mb-12 max-w-2xl mx-auto animate-slide-up">
            Transform simple ingredients into extraordinary meals. Search by
            what you have, filter by your preferences, and embark on delicious
            adventures.
          </p>
          <SearchSection onSearch={handleSearch} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {loading && <LoadingState />}

        {error && (
          <ErrorState
            message={error}
            onRetry={() => handleSearch(searchParams)}
          />
        )}

        {!loading && !error && recipes.length === 0 && hasSearched && (
          <EmptyState
            title="No recipes found"
            message="Try adjusting your search criteria or ingredients"
          />
        )}

        {!loading && !error && recipes.length === 0 && !hasSearched && (
          <EmptyState
            title="Ready to cook?"
            message="Search for recipes using the ingredients you have on hand"
          />
        )}

        {!loading && !error && recipes.length > 0 && (
          <>
            <RecipeGrid recipes={recipes} />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default HomePage;
