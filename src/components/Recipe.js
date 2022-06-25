import React, { useContext } from "react";
import { RecipeContext } from "./App";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{props.item.name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(props.item.id)}
          >
            Edit
          </button>
          <button
            onClick={() => handleRecipeDelete(props.item.id)}
            className="btn btn--danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{props.item.cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Serving:</span>
        <span className="recipe__value">{props.item.servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value repcipe__instructions recipe__value--indented">
          {props.item.instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value">
          <IngredientList ingredients={props.item.ingredients} />
        </div>
      </div>
    </div>
  );
}
