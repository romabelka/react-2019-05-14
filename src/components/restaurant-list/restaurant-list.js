import React, { Component } from "react";
import Restaurant from "../restaurant";
import { accordion } from "../../decorators/accordion";
import { List, Spin } from "antd";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
  restaurantsSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector
} from "../../selectors";
import { loadRestaurants, loadReviews } from "../../ac";

class RestaurantList extends Component {
  componentDidMount() {
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadRestaurants();
    }
    if (!this.props.isReviewsLoading && !this.props.isReviewsLoaded) {
      this.props.loadReviews();
    }
  }

  render() {
    const {
      restaurants,
      loaded,
      isReviewsLoaded,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;

    return loaded && isReviewsLoaded ? (
      <List>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
          />
        ))}
      </List>
    ) : (
      <div style={{ textAlign: "center", padding: "24px" }}>
        <Spin size="large" />
      </div>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      menu: PropTypes.array.isRequired,
      reviews: PropTypes.array.isRequired
    })
  ).isRequired,

  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func.isRequired
};

export default connect(
  store => ({
    restaurants: restaurantsSelector(store),
    loading: restaurantsLoadingSelector(store),
    loaded: restaurantsLoadedSelector(store),
    isReviewsLoading: reviewsLoadingSelector(store),
    isReviewsLoaded: reviewsLoadedSelector(store)
  }),
  {
    loadRestaurants,
    loadReviews
  }
)(accordion(RestaurantList));
