import { normalizedRestaurants } from "../fixtures";

export default (restaurantsState = normalizedRestaurants, action) => {
  return restaurantsState;
};
