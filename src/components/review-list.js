import React from "react";
import { List } from "antd";
import Review from "./review";
import PropTypes from "prop-types";

function ReviewList({ reviews }) {
  return (
    <List>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(Review.propTypes.review)
};

export default ReviewList;
