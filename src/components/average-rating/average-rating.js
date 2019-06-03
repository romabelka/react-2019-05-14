import React, { PureComponent } from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReviewsSelector } from "../../selectors";

class AverageRating extends PureComponent {
  state = {
    value: 0
  };

  render() {
    const { reviews } = this.props;
    const rawRating =
      reviews.reduce((acc, { rating }) => {
        return acc + rating;
      }, 0) / reviews.length;
    const normalizedRating = Math.floor(rawRating * 2) / 2;

    return <Rate defaultValue={normalizedRating} disabled allowHalf />;
  }
}

AverageRating.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({ rating: PropTypes.number.isRequired }).isRequired
  ).isRequired
};

const initMapStateToProps = () => {
  const reviewsSelector = createReviewsSelector();
  return (state, ownProps) => {
    return {
      reviews: reviewsSelector(state, ownProps)
    };
  };
};

export default connect(initMapStateToProps)(AverageRating);
