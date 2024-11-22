const BASE_URL = "https://api.spoonacular.com/recipes";
const API_KEY = "e5f523659aac4ca8bb3f5a74e2184a6f";

export const getRecipes = async (query) => {
  const response = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`
  );
  return response.json();
};

export const getRecipeDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
  );
  return response.json();
};
