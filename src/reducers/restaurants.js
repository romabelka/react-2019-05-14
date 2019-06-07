import {
  ADD_REVIEW,
  FAIL,
  LOAD_RESTAURANTS,
  START,
  SUCCESS
} from "../constants";
import { fromJS } from "immutable";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (restaurantsState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_RESTAURANTS + START: {
      return restaurantsState.set("loading", true);
    }
    case LOAD_RESTAURANTS + SUCCESS: {
      return restaurantsState
        .set("entities", fromJS(action.response))
        .set("loading", false)
        .set("loaded", true);
    }
    case LOAD_RESTAURANTS + FAIL: {
      return restaurantsState
        .set("loading", false)
        .set("loaded", false)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      const targetRestaurant = restaurantsState
        .get("entities")
        .find(
          restaurant => restaurant.get("id") === action.payload.restaurantId
        );
      const targetIndex = restaurantsState
        .get("entities")
        .indexOf(targetRestaurant);

      return restaurantsState.updateIn(
        ["entities", targetIndex, "reviews"],
        reviews => reviews.push(action.generatedId)
      );
    }
    default:
      return restaurantsState;
  }
};
