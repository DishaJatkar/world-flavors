import React, { useState } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import RecipeGrid from '../components/RecipeGrid'
import EmptyState from '../components/EmptyState'
import { ChevronDown } from 'lucide-react'

const FavoritesPage = () => {
  const { favorites } = useFavorites()
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  const sortedFavorites = [...favorites].sort((a, b) => {
    let comparison = 0
    
    switch (sortBy) {
      case 'name':
        comparison = a.title.localeCompare(b.title)
        break
      case 'time':
        comparison = (a.readyInMinutes || 0) - (b.readyInMinutes || 0)
        break
      case 'servings':
        comparison = (a.servings || 0) - (b.servings || 0)
        break
      default:
        comparison = 0
    }
    
    return sortOrder === 'asc' ? comparison : -comparison
  })

  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('asc')
    }
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-sage-50 pt-20">
        <EmptyState
          title="No favorites yet"
          message="Start exploring recipes and add your favorites to see them here"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-sage-50">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              <span className="gradient-text">Your Favorite</span>
              <br />
              <span className="text-sage-800">Recipes</span>
            </h1>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              {favorites.length} recipe{favorites.length !== 1 ? 's' : ''} saved for your culinary adventures
            </p>
          </header>

          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-2 shadow-sm">
              <span className="text-sm font-medium text-sage-700 px-3">Sort by:</span>
              
              <button
                onClick={() => handleSortChange('name')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  sortBy === 'name'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-sage-600 hover:text-primary-600'
                }`}
              >
                <span>Name</span>
                {sortBy === 'name' && (
                  <ChevronDown className={`h-3 w-3 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
                )}
              </button>

              <button
                onClick={() => handleSortChange('time')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  sortBy === 'time'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-sage-600 hover:text-primary-600'
                }`}
              >
                <span>Cooking Time</span>
                {sortBy === 'time' && (
                  <ChevronDown className={`h-3 w-3 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
                )}
              </button>

              <button
                onClick={() => handleSortChange('servings')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  sortBy === 'servings'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-sage-600 hover:text-primary-600'
                }`}
              >
                <span>Servings</span>
                {sortBy === 'servings' && (
                  <ChevronDown className={`h-3 w-3 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
                )}
              </button>
            </div>
          </div>

          <RecipeGrid recipes={sortedFavorites} />
        </div>
      </section>
    </div>
  )
}

export default FavoritesPage
