import React, { Component } from "react";
import Restaurant from "./restaurant";

class RestaurantList extends Component {
  state = {
    openRestaurantMenuId: null
  };

  render() {
    const { restaurants } = this.props;
    const { openRestaurantMenuId } = this.state;
    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openRestaurantMenuId === restaurant.id}
            toggleOpenMenu={() => this.toggleOpenRestaurantMenu(restaurant.id)}
          />
        ))}
      </div>
    );
  }
  toggleOpenRestaurantMenu = id => {
    this.setState({
      openRestaurantMenuId: id
    });
  };
}

export default RestaurantList;
