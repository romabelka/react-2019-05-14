import React from "react";
import { Comment, Rate } from "antd";

function Review({ review }) {
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={[
        review.user,
        <Rate
          disabled
          defaultValue={review.rating}
          style={{ marginLeft: "24px" }}
        />
      ]}
      content={review.text}
    />
  );
}

export default Review;
