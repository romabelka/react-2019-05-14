import React, { Component } from "react";
import Restaurant from "./restaurant";

class RestaurantList extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant key={restaurant.id} {...restaurant} />
        ))}
      </div>
    );
  }
}

export default RestaurantList;
