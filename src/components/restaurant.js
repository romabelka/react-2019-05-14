import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, isMenuOpen } = this.props;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default Restaurant;
