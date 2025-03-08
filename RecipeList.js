import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, searchQuery, filters, sortOption }) => {
  let filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery) &&
    (!filters.winner || recipe.winner) &&
    (!filters.featured || recipe.featured)
  );

  if (sortOption === "newest") {
    filteredRecipes.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === "oldest") {
    filteredRecipes.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortOption === "highest") {
    filteredRecipes.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "lowest") {
    filteredRecipes.sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
