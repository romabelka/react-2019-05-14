import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const targetRestaurant = restaurantsState.find(
        restaurant => restaurant.id === action.payload.restaurantId
      );
      const updatedRestaurant = {
        ...targetRestaurant,
        reviews: [...targetRestaurant.reviews, action.generatedId]
      };
      return restaurantsState.map(restaurant =>
        restaurant === targetRestaurant ? updatedRestaurant : restaurant
      );
    }
    default:
      return restaurantsState;
  }
};
