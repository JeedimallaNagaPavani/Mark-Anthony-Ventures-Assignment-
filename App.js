import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";
import RecipeList from "./components/RecipeList";
import { recipesData } from "./data/recipes";

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ winner: false, featured: false });
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="app-container">
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="main-content">
        <FilterSidebar setFilters={setFilters} setSortOption={setSortOption} />
        <RecipeList recipes={recipes} searchQuery={searchQuery} filters={filters} sortOption={sortOption} />
      </div>
    </div>
  );
};

export default App;
