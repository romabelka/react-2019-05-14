import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return [
        ...reviewsState,
        {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating
        }
      ];
    }
    default:
      return reviewsState;
  }
};
