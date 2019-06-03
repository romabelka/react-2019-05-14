import React from "react";
import { List } from "antd";
import Review, { ReviewPropType } from "../review";
import PropTypes from "prop-types";
import { createReviewsSelector } from "../../selectors";
import { connect } from "react-redux";

function ReviewList({ reviews }) {
  return (
    <List data-automation-id="review-list">
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewPropType))
};

const initMapStateToProps = () => {
  const reviewsSelector = createReviewsSelector();
  return (state, ownProps) => {
    return {
      reviews: reviewsSelector(state, ownProps)
    };
  };
};

export default connect(initMapStateToProps)(ReviewList);
