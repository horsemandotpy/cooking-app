import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList(props) {
  const ingredientElements = props.ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} item={ingredient} />;
  });

  return <div className="ingredient-grid">{ingredientElements}</div>;
}
