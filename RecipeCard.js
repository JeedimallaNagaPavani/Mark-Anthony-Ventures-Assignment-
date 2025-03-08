import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p><strong>Type:</strong> {recipe.type}</p>
      <p><strong>Rating:</strong> {recipe.rating}⭐</p>
      <p><strong>Date:</strong> {new Date(recipe.date).toDateString()}</p>
      {recipe.winner && <span className="winner-badge">🏆 Winner</span>}
      {recipe.featured && <span className="featured-badge">🔥 Featured</span>}
    </div>
  );
};

export default RecipeCard;
