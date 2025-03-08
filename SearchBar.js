import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input 
      type="text" 
      placeholder="Search recipes..." 
      onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      className="search-bar"
    />
  );
};

export default SearchBar;
