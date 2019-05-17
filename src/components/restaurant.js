import React, { Component } from "react";
import RestaurantMenu from "./restaurant-menu";

class Restaurant extends Component {
  render() {
    const { image, name, menu } = this.props;
    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <RestaurantMenu menu={menu} />
      </div>
    );
  }
}

export default Restaurant;
