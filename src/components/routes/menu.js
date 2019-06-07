import React from "react";
import RestaurantMenu from "../restaurant-menu/restaurant-menu";

function MenuPage(props) {
  return <RestaurantMenu id={props.match.params.restaurantId} />;
}

export default MenuPage;
