import React from "react";

const FilterSidebar = ({ setFilters, setSortOption }) => {
  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>
      <label>
        <input type="checkbox" onChange={(e) => setFilters((prev) => ({ ...prev, winner: e.target.checked }))} />
        Show Winners
      </label>
      <label>
        <input type="checkbox" onChange={(e) => setFilters((prev) => ({ ...prev, featured: e.target.checked }))} />
        Show Featured
      </label>

      <h3>Sort By</h3>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">None</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="highest">Highest Rated</option>
        <option value="lowest">Lowest Rated</option>
      </select>
    </div>
  );
};

export default FilterSidebar;
