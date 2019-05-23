import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "./average-rating";
import ReviewList from "./review-list";
import { toggleVisibility } from "../decorators/toggleVisibility";
import * as PropTypes from "prop-types";

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
      image,
      name,
      menu,
      reviews,
      isMenuOpen,
      isOpen: isReviewOpen,
      toggleVisibility
    } = this.props;

    return this.state.error ? (
      "Not available"
    ) : (
      <>
        <List.Item
          style={{ paddingLeft: "8px" }}
          actions={[
            <AverageRating reviews={reviews} />,
            <Button onClick={toggleVisibility}>
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
            </Button>,
            <Button
              data-automation-id={`toggle-menu`}
              onClick={this.handleToggleOpenClick}
            >
              {isMenuOpen ? "Close menu" : "Open menu"}
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar shape="square" src={image} />}
            title={name}
          />
        </List.Item>
        {isReviewOpen ? <ReviewList reviews={reviews} /> : null}
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

Restaurant.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  menu: RestaurantMenu.propTypes.menu,
  reviews: ReviewList.propTypes.reviews,

  isMenuOpen: PropTypes.bool,
  toggleOpenMenu: PropTypes.func.isRequired,

  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func.isRequired
};

export default toggleVisibility(Restaurant);
