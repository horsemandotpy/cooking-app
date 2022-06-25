import React from "react";

export default function Ingredient(props) {
  return (
    <>
      <span>{props.item.name} </span>
      <span>{props.item.amount}</span>
    </>
  );
}
