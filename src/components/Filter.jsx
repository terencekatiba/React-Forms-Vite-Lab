import React from "react";

function Filter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <label htmlFor="search">Search</label>

      <input
        id="search"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />


      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
