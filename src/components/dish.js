import React from "react";

function Dish(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span style={{ float: "right" }}>{props.price}</span>
    </div>
  );
}

export default Dish;
