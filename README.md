# Recipe Discovery App

A modern, responsive web application for discovering and exploring recipes using the Spoonacular API. Built with React, Vite, and Tailwind CSS, featuring recipe search, pagination, favorites management, and comprehensive testing.

## 🌟 Features

- **Recipe Search**: Search for recipes by ingredients, cuisine, or keywords
- **Pagination**: Navigate through large result sets with smooth pagination
- **Favorites**: Save and manage your favorite recipes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Recipe Details**: View detailed recipe information including ingredients and instructions
- **Dietary Information**: Display dietary badges (vegetarian, vegan, gluten-free, etc.)
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 4.4.5
- **Styling**: Tailwind CSS 3.3.0
- **Routing**: React Router DOM 6.8.1
- **Icons**: Lucide React
- **API**: Spoonacular Recipe API
- **Testing**: Vitest, React Testing Library, jsdom
- **Deployment**: Ready for static hosting (Vercel, Netlify, etc.)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Spoonacular API key (get one at [spoonacular.com](https://spoonacular.com/food-api))

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd recipe-discovery-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_SPOONACULAR_API_KEY=your_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 📖 Usage

### Searching Recipes

- Use the search bar on the home page to find recipes
- Filter by ingredients, cuisine type, or dietary restrictions
- Browse through results with pagination controls

### Managing Favorites

- Click the heart icon on any recipe card to add/remove from favorites
- View all your favorite recipes on the Favorites page
- Favorites are persisted in local storage

### Viewing Recipe Details

- Click "View Recipe" on any recipe card to see full details
- Includes ingredients list, cooking instructions, and nutritional information

## 🧪 Testing

The project includes comprehensive test coverage with Vitest and React Testing Library.

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run tests in UI mode
npm run test:ui
```

### Test Structure

- **Unit Tests**: Component functionality and logic
- **Integration Tests**: Component interactions and API calls
- **Coverage**: 100% statement coverage for tested components

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DietBadge.jsx    # Dietary restriction badges
│   ├── EmptyState.jsx   # Empty state components
│   ├── ErrorState.jsx   # Error handling components
│   ├── Header.jsx       # App header
│   ├── LoadingState.jsx # Loading indicators
│   ├── Pagination.jsx   # Pagination controls
│   ├── RecipeCard.jsx   # Recipe display cards
│   └── SearchSection.jsx # Search interface
├── context/             # React Context providers
│   └── FavoritesContext.jsx # Favorites state management
├── pages/               # Page components
│   ├── FavoritesPage.jsx    # Favorites page
│   ├── HomePage.jsx         # Main search page
│   └── RecipeDetailsPage.jsx # Recipe details page
├── services/            # API services
│   └── recipeService.js     # Spoonacular API integration
└── test/                # Test utilities
    └── setup.js         # Test configuration

tests/                   # Test files
└── components/          # Component tests
    ├── DietBadge.test.jsx
    └── RecipeCard.test.jsx
```

## 🔧 Configuration

### Vite Configuration

- Located in `vite.config.js`
- Configured for React and testing with Vitest
- Includes coverage reporting setup

### Tailwind CSS

- Configuration in `tailwind.config.js`
- Custom color scheme and responsive breakpoints
- PostCSS configuration in `postcss.config.js`

## 🌐 API Integration

This app uses the Spoonacular Recipe API. You'll need to:

1. Sign up at [spoonacular.com](https://spoonacular.com/food-api)
2. Get your API key
3. Add it to your `.env` file as `VITE_SPOONACULAR_API_KEY`

### API Endpoints Used

- `GET /recipes/complexSearch` - Recipe search with filters
- `GET /recipes/{id}/information` - Detailed recipe information

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Deployment Platforms

- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Great for static sites with form handling
- **GitHub Pages**: Free hosting for public repositories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 🙏 Acknowledgments

- [Spoonacular API](https://spoonacular.com/food-api) for recipe data
- [React](https://reactjs.org/) for the UI framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for fast development
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Happy cooking! 🍳**
