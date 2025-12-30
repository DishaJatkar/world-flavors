import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeGrid = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe, index) => (
        <div
          key={recipe.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  )
}

export default RecipeGrid
