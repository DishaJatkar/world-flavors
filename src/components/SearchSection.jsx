import React, { useState } from 'react'
import { Search, Filter } from 'lucide-react'

const SearchSection = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('')
  const [diet, setDiet] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [maxReadyTime, setMaxReadyTime] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch({
      ingredients: ingredients.trim(),
      diet,
      cuisine,
      maxReadyTime
    })
  }

  const dietOptions = [
    { value: '', label: 'Any Diet' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'ketogenic', label: 'Keto' },
    { value: 'gluten free', label: 'Gluten Free' },
    { value: 'dairy free', label: 'Dairy Free' },
    { value: 'paleo', label: 'Paleo' }
  ]

  const cuisineOptions = [
    { value: '', label: 'Any Cuisine' },
    { value: 'italian', label: 'Italian' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'indian', label: 'Indian' },
    { value: 'french', label: 'French' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'thai', label: 'Thai' },
    { value: 'mediterranean', label: 'Mediterranean' }
  ]

  const timeOptions = [
    { value: '', label: 'Any Time' },
    { value: '15', label: 'Under 15 min' },
    { value: '30', label: 'Under 30 min' },
    { value: '60', label: 'Under 1 hour' },
    { value: '120', label: 'Under 2 hours' }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto animate-scale-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-sage-400" />
          </div>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients (e.g., chicken, tomatoes, basil)"
            className="w-full pl-12 pr-4 py-4 text-lg bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/20 rounded-xl text-sage-700 hover:bg-white transition-all"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>

          <button
            type="submit"
            className="btn-primary px-8 py-3 text-white font-medium rounded-xl shadow-lg"
          >
            Search Recipes
          </button>
        </div>

        {showFilters && (
          <div className="grid sm:grid-cols-3 gap-4 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg animate-slide-up">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Diet</label>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {dietOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Cuisine</label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {cuisineOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Cooking Time</label>
              <select
                value={maxReadyTime}
                onChange={(e) => setMaxReadyTime(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {timeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default SearchSection
