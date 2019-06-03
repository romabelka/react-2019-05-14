import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import "./review.css";
import { connect } from "react-redux";
import { createUserSelector } from "../../selectors";

function Review({ review, user }) {
  return (
    <Comment
      className="review"
      author={user.name}
      content={review.text}
      actions={[
        <Rate
          disabled
          allowHalf
          defaultValue={review.rating}
          className="review-rating"
        />
      ]}
    />
  );
}

export const ReviewPropType = {
  userId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

Review.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  review: PropTypes.shape(ReviewPropType)
};

const initMapStateToProps = () => {
  const userSelector = createUserSelector();
  return (state, ownProps) => ({
    user: userSelector(state, { id: ownProps.review.userId })
  });
};

export default connect(initMapStateToProps)(Review);
