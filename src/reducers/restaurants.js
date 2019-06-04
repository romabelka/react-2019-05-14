import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW } from "../constants";
import { fromJS } from "immutable";

export default (restaurantsState = fromJS(normalizedRestaurants), action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const targetRestaurant = restaurantsState.find(
        restaurant => restaurant.get("id") === action.payload.restaurantId
      );
      const targetIndex = restaurantsState.indexOf(targetRestaurant);

      return restaurantsState.update(targetIndex, restaurant => {
        return restaurant.update("reviews", reviews => {
          return reviews.push(action.generatedId);
        });
        // return {
        //   ...restaurant,
        //   reviews: [
        //     ...restaurant.reviews,
        //     action.generatedId
        //   ]
        // }
      });
    }
    default:
      return restaurantsState;
  }
};
