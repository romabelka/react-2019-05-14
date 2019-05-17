import React from "react";
import Dish from "./dish";

function RestaurantMenu(props) {
  return (
    <div>
      {props.menu.map(dish => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}

export default RestaurantMenu;
