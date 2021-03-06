import React from "react";

export default function RecipeIngredient({
  ingredient,
  handleIngredientChange,
  handleIngredientDel,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        onInput={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        className="recipe-edit__input"
        type="text"
        onInput={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button
        className=" btn btn--danger"
        onClick={() => handleIngredientDel(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}
