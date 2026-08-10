
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  function handleCategoryChange(categoryName) {
    setCategory(categoryName);
  }

  function handleItemFormSubmit(newItem) {
    setItems((currentItems) => [
      ...currentItems,
      newItem,
    ]);
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
      />

      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
      />

      <ShoppingList items={filteredItems} />

      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
