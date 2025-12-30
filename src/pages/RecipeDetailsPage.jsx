import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Heart } from "lucide-react";
import { getRecipeDetails } from "../services/recipeService";
import { useFavorites } from "../context/FavoritesContext";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import DietBadge from "../components/DietBadge";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        // const data = await getRecipeDetails(id)
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
            import.meta.env.VITE_SPOONACULAR_API_KEY
          }`
        );
        const data = await response.json();
        console.log("recipe details", data);
        setRecipe(data);
      } catch (err) {
        setError("Failed to load recipe details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!recipe) return <ErrorState message="Recipe not found" />;

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      diets: recipe.diets || [],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-sage-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-sage-600 hover:text-primary-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to recipes</span>
        </Link>

        <article className="recipe-card rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-80 md:h-96">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <button
              onClick={handleToggleFavorite}
              className={`absolute top-6 right-6 p-3 rounded-full transition-all ${
                isFavorite(recipe.id)
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/90 text-sage-600 hover:bg-white hover:text-red-500"
              }`}
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite(recipe.id) ? "fill-current" : ""
                }`}
              />
            </button>
          </div>

          <div className="p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold font-serif text-sage-800 mb-4">
                {recipe.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2 text-sage-600">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.readyInMinutes} minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-sage-600">
                  <Users className="h-4 w-4" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>

              {recipe.diets && recipe.diets.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {recipe.diets.map((diet) => (
                    <DietBadge key={diet} diet={diet} />
                  ))}
                </div>
              )}

              {recipe.summary && (
                <div
                  className="text-sage-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: recipe.summary }}
                />
              )}
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-bold font-serif text-sage-800 mb-6">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {recipe.extendedIngredients?.map((ingredient) => (
                    <li
                      key={ingredient.id}
                      className="flex items-start space-x-3"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sage-700">
                        {ingredient.original}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-serif text-sage-800 mb-6">
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {recipe.analyzedInstructions?.[0]?.steps?.map((step) => (
                    <li key={step.number} className="flex space-x-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {step.number}
                      </span>
                      <p className="text-sage-700 leading-relaxed pt-1">
                        {step.step}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            {recipe.nutrition && (
              <section className="mt-8 pt-8 border-t border-sage-200">
                <h2 className="text-2xl font-bold font-serif text-sage-800 mb-6">
                  Nutrition
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {recipe.nutrition.nutrients?.slice(0, 8).map((nutrient) => (
                    <div
                      key={nutrient.name}
                      className="text-center p-4 bg-sage-50 rounded-lg"
                    >
                      <p className="text-2xl font-bold text-primary-600">
                        {Math.round(nutrient.amount)}
                      </p>
                      <p className="text-sm text-sage-600">{nutrient.unit}</p>
                      <p className="text-sm font-medium text-sage-800">
                        {nutrient.name}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
