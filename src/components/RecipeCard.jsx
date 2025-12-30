import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, Heart, Eye } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import DietBadge from './DietBadge'

const RecipeCard = ({ recipe }) => {
  const { isFavorite, toggleFavorite } = useFavorites()

  const handleToggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      diets: recipe.diets || []
    })
  }

  return (
    <article className="recipe-card rounded-2xl overflow-hidden shadow-lg card-hover group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            isFavorite(recipe.id)
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white/90 text-sage-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite(recipe.id) ? 'fill-current' : ''}`} />
        </button>

        {recipe.diets && recipe.diets.length > 0 && (
          <div className="absolute bottom-3 left-3">
            <DietBadge diet={recipe.diets[0]} />
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-sage-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {recipe.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-sage-600 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.readyInMinutes || 'N/A'} min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings || 'N/A'} servings</span>
          </div>
        </div>

        <Link
          to={`/recipe/${recipe.id}`}
          className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all group/btn"
        >
          <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          <span>View Recipe</span>
        </Link>
      </div>
    </article>
  )
}

export default RecipeCard
