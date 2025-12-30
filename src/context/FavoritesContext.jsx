import React, { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('recipe-favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('recipe-favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (recipe) => {
    setFavorites(prev => [...prev, recipe])
  }

  const removeFromFavorites = (recipeId) => {
    setFavorites(prev => prev.filter(recipe => recipe.id !== recipeId))
  }

  const isFavorite = (recipeId) => {
    return favorites.some(recipe => recipe.id === recipeId)
  }

  const toggleFavorite = (recipe) => {
    if (isFavorite(recipe.id)) {
      removeFromFavorites(recipe.id)
    } else {
      addToFavorites(recipe)
    }
  }

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      toggleFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}
