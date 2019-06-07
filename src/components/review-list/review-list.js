import React, { useEffect } from "react";
import { List, Spin } from "antd";
import Review, { ReviewPropType } from "../review";
import PropTypes from "prop-types";
import {
  createReviewsSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector
} from "../../selectors";
import { connect } from "react-redux";
import AddReview from "../add-review";
import { loadReviews, loadUsers } from "../../ac";

function ReviewList(props) {
  const {
    reviews,
    id,
    isReviewsLoading,
    isReviewsLoaded,
    isUsersLoading,
    isUsersLoaded
  } = props;
  useEffect(() => {
    if (!isReviewsLoading && !isReviewsLoaded) {
      props.loadReviews();
    }
    if (!isUsersLoading && !isUsersLoaded) {
      props.loadUsers();
    }
  });
  return isReviewsLoaded && isUsersLoaded ? (
    <List data-automation-id="review-list">
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
      <AddReview restaurantId={id} />
    </List>
  ) : (
    <div style={{ textAlign: "center", padding: "24px" }}>
      <Spin />
    </div>
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
      reviews: reviewsSelector(state, ownProps),
      isReviewsLoading: reviewsLoadingSelector(state),
      isReviewsLoaded: reviewsLoadedSelector(state),
      isUsersLoading: usersLoadingSelector(state),
      isUsersLoaded: usersLoadedSelector(state)
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    loadReviews,
    loadUsers
  }
)(ReviewList);
