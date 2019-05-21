import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "./average-rating";
import ReviewList from "./review-list";
import { toggleVisibility } from "../decorators/toggleVisibility";

class Restaurant extends PureComponent {
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

    return (
      <>
        <List.Item
          style={{ paddingLeft: "8px" }}
          actions={[
            <AverageRating reviews={reviews} />,
            <Button onClick={toggleVisibility}>
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
            </Button>,
            <Button onClick={this.handleToggleOpenClick}>
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

export default toggleVisibility(Restaurant);
