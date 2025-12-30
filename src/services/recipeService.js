// Mock recipe service - replace with actual API integration
const MOCK_RECIPES = [
  {
    id: 1,
    title: "Creamy Garlic Parmesan Chicken",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop",
    readyInMinutes: 30,
    servings: 4,
    diets: ["gluten free"],
    summary: "A rich and creamy chicken dish with garlic and parmesan that's perfect for weeknight dinners.",
    extendedIngredients: [
      { id: 1, original: "4 boneless, skinless chicken breasts" },
      { id: 2, original: "3 cloves garlic, minced" },
      { id: 3, original: "1 cup heavy cream" },
      { id: 4, original: "1/2 cup grated Parmesan cheese" },
      { id: 5, original: "2 tablespoons olive oil" },
      { id: 6, original: "Salt and pepper to taste" },
      { id: 7, original: "Fresh parsley for garnish" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Season chicken breasts with salt and pepper on both sides." },
        { number: 2, step: "Heat olive oil in a large skillet over medium-high heat." },
        { number: 3, step: "Cook chicken breasts for 6-7 minutes per side until golden brown and cooked through." },
        { number: 4, step: "Remove chicken from skillet and set aside." },
        { number: 5, step: "Add minced garlic to the same skillet and cook for 1 minute." },
        { number: 6, step: "Pour in heavy cream and bring to a simmer." },
        { number: 7, step: "Stir in Parmesan cheese until melted and smooth." },
        { number: 8, step: "Return chicken to skillet and simmer for 2-3 minutes." },
        { number: 9, step: "Garnish with fresh parsley and serve immediately." }
      ]
    }],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 485, unit: "kcal" },
        { name: "Protein", amount: 42, unit: "g" },
        { name: "Fat", amount: 32, unit: "g" },
        { name: "Carbs", amount: 6, unit: "g" }
      ]
    }
  },
  {
    id: 2,
    title: "Mediterranean Quinoa Bowl",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop",
    readyInMinutes: 25,
    servings: 2,
    diets: ["vegetarian", "vegan", "gluten free"],
    summary: "A healthy and colorful quinoa bowl packed with Mediterranean flavors and fresh vegetables.",
    extendedIngredients: [
      { id: 1, original: "1 cup quinoa" },
      { id: 2, original: "2 cups vegetable broth" },
      { id: 3, original: "1 cucumber, diced" },
      { id: 4, original: "1 cup cherry tomatoes, halved" },
      { id: 5, original: "1/2 red onion, thinly sliced" },
      { id: 6, original: "1/2 cup kalamata olives" },
      { id: 7, original: "1/4 cup fresh parsley" },
      { id: 8, original: "3 tablespoons olive oil" },
      { id: 9, original: "2 tablespoons lemon juice" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Rinse quinoa under cold water until water runs clear." },
        { number: 2, step: "Bring vegetable broth to a boil in a medium saucepan." },
        { number: 3, step: "Add quinoa, reduce heat to low, cover and simmer for 15 minutes." },
        { number: 4, step: "Remove from heat and let stand 5 minutes, then fluff with a fork." },
        { number: 5, step: "Meanwhile, prepare vegetables by dicing cucumber and halving tomatoes." },
        { number: 6, step: "Whisk together olive oil and lemon juice for dressing." },
        { number: 7, step: "Combine cooked quinoa with vegetables and olives." },
        { number: 8, step: "Drizzle with dressing and toss gently." },
        { number: 9, step: "Garnish with fresh parsley and serve." }
      ]
    }],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 320, unit: "kcal" },
        { name: "Protein", amount: 12, unit: "g" },
        { name: "Fat", amount: 14, unit: "g" },
        { name: "Carbs", amount: 42, unit: "g" }
      ]
    }
  },
  {
    id: 3,
    title: "Spicy Thai Basil Stir Fry",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop",
    readyInMinutes: 20,
    servings: 3,
    diets: ["dairy free"],
    summary: "A quick and flavorful Thai-inspired stir fry with fresh basil and aromatic spices.",
    extendedIngredients: [
      { id: 1, original: "1 lb ground chicken or beef" },
      { id: 2, original: "3 cloves garlic, minced" },
      { id: 3, original: "2 Thai chilies, sliced" },
      { id: 4, original: "1 cup fresh Thai basil leaves" },
      { id: 5, original: "2 tablespoons fish sauce" },
      { id: 6, original: "1 tablespoon soy sauce" },
      { id: 7, original: "1 teaspoon sugar" },
      { id: 8, original: "2 tablespoons vegetable oil" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Heat oil in a large wok or skillet over high heat." },
        { number: 2, step: "Add garlic and chilies, stir-fry for 30 seconds until fragrant." },
        { number: 3, step: "Add ground meat and cook, breaking it up, for 5-6 minutes." },
        { number: 4, step: "Stir in fish sauce, soy sauce, and sugar." },
        { number: 5, step: "Cook for another 2-3 minutes until meat is fully cooked." },
        { number: 6, step: "Remove from heat and stir in fresh basil leaves." },
        { number: 7, step: "Serve immediately over steamed rice." }
      ]
    }],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 285, unit: "kcal" },
        { name: "Protein", amount: 28, unit: "g" },
        { name: "Fat", amount: 16, unit: "g" },
        { name: "Carbs", amount: 8, unit: "g" }
      ]
    }
  }
]

// Generate more mock recipes for pagination
const generateMockRecipes = (count = 50) => {
  const recipes = [...MOCK_RECIPES]
  const titles = [
    "Lemon Herb Salmon", "Mushroom Risotto", "Beef Tacos", "Caesar Salad",
    "Chocolate Brownies", "Vegetable Curry", "BBQ Ribs", "Pasta Carbonara",
    "Greek Salad", "Chicken Tikka", "Fish and Chips", "Ratatouille",
    "Beef Stroganoff", "Caprese Salad", "Pad Thai", "Sushi Rolls",
    "French Toast", "Pancakes", "Waffles", "Omelette"
  ]
  
  const images = [
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop",
    "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop",
    "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop"
  ]
  
  const diets = [
    ["vegetarian"], ["vegan"], ["gluten free"], ["ketogenic"], 
    ["dairy free"], ["paleo"], [], ["vegetarian", "gluten free"]
  ]

  for (let i = recipes.length; i < count; i++) {
    recipes.push({
      id: i + 1,
      title: titles[i % titles.length] + ` ${Math.floor(i / titles.length) + 1}`,
      image: images[i % images.length],
      readyInMinutes: Math.floor(Math.random() * 60) + 15,
      servings: Math.floor(Math.random() * 6) + 2,
      diets: diets[i % diets.length],
      summary: `Delicious ${titles[i % titles.length].toLowerCase()} recipe that's perfect for any occasion.`,
      extendedIngredients: MOCK_RECIPES[0].extendedIngredients,
      analyzedInstructions: MOCK_RECIPES[0].analyzedInstructions,
      nutrition: MOCK_RECIPES[0].nutrition
    })
  }
  
  return recipes
}

const ALL_RECIPES = generateMockRecipes()

export const searchRecipes = async (params, page = 1) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  let filteredRecipes = ALL_RECIPES

  // Filter by ingredients
  if (params.ingredients) {
    const ingredients = params.ingredients.toLowerCase().split(',').map(i => i.trim())
    filteredRecipes = filteredRecipes.filter(recipe =>
      ingredients.some(ingredient =>
        recipe.title.toLowerCase().includes(ingredient) ||
        recipe.extendedIngredients?.some(ing => 
          ing.original.toLowerCase().includes(ingredient)
        )
      )
    )
  }

  // Filter by diet
  if (params.diet) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.diets?.includes(params.diet)
    )
  }

  // Filter by cuisine (mock implementation)
  if (params.cuisine) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(params.cuisine.toLowerCase())
    )
  }

  // Filter by cooking time
  if (params.maxReadyTime) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.readyInMinutes <= parseInt(params.maxReadyTime)
    )
  }

  // Pagination
  const itemsPerPage = 12
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex)

  return {
    results: paginatedRecipes,
    totalResults: filteredRecipes.length,
    offset: startIndex,
    number: itemsPerPage
  }
}

export const getRecipeDetails = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const recipe = ALL_RECIPES.find(r => r.id === parseInt(id))
  if (!recipe) {
    throw new Error('Recipe not found')
  }
  
  return recipe
}
