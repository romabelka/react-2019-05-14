import React, { PureComponent } from "react";
import RestaurantMenu from "../restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "../average-rating";
import ReviewList from "../review-list";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import * as PropTypes from "prop-types";
import "./restaurant.css";
import { NavLink } from "react-router-dom";

class Restaurant extends PureComponent {
  state = {
    error: null
  };
  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  render() {
    const {
      id,
      image,
      name,
      isMenuOpen,
      isOpen: isReviewOpen,
      toggleVisibility
    } = this.props;

    return this.state.error ? (
      "Not available"
    ) : (
      <>
        <List.Item
          className="restaurant-list-item"
          actions={[
            <AverageRating id={id} />,
            <Button
              data-automation-id={`toggle-review-list-${id}`}
              onClick={toggleVisibility}
            >
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
            </Button>,
            <Button
              data-automation-id={`toggle-menu-${id}`}
              onClick={this.handleToggleOpenClick}
            >
              <NavLink to={`/restaurant-menu/${id}`}>Go to menu</NavLink>
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar shape="square" src={image} />}
            title={name}
          />
        </List.Item>
        {isReviewOpen ? <ReviewList id={id} /> : null}
      </>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

Restaurant.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string),

  isMenuOpen: PropTypes.bool,
  toggleOpenMenu: PropTypes.func.isRequired,

  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func.isRequired
};

export default toggleVisibility(Restaurant);
