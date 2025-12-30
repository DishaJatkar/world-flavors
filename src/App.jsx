import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RecipeDetailsPage from './pages/RecipeDetailsPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </FavoritesProvider>
  )
}

export default App
