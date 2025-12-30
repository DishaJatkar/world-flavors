import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChefHat, Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

const Header = () => {
  const location = useLocation();
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl group-hover:scale-105 transition-transform">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text font-serif">
                World Flavors
              </h1>
              <p className="text-xs text-sage-600 font-light">
                Culinary adventures await
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                location.pathname === "/"
                  ? "text-primary-600 bg-primary-50"
                  : "text-sage-700 hover:text-primary-600 hover:bg-primary-50"
              }`}
            >
              Discover
            </Link>
            <Link
              to="/favorites"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                location.pathname === "/favorites"
                  ? "text-primary-600 bg-primary-50"
                  : "text-sage-700 hover:text-primary-600 hover:bg-primary-50"
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
