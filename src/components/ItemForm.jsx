import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: String(Date.now()),
      name: name,
      category: category,
    };

    onItemFormSubmit(newItem);

    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>

      <div>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div>
        <label htmlFor="form-category">
          Category
        </label>

        <select
          id="form-category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <button type="submit">
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;

