import React from "react";
import { List } from "antd";
import Review from "./review";

function ReviewList({ reviews }) {
  return (
    <List>
      {reviews.map(review => (
        <Review review={review} />
      ))}
    </List>
  );
}

export default ReviewList;
