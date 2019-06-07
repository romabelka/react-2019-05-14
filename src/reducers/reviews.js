import { ADD_REVIEW, FAIL, LOAD_REVIEWS, START, SUCCESS } from "../constants";
import { arrToMap, ResourceRecord } from "./utils";

export default (reviewsState = new ResourceRecord(), action) => {
  switch (action.type) {
    case LOAD_REVIEWS + START: {
      return reviewsState
        .set("loading", true)
        .set("loaded", false)
        .set("error", null);
    }
    case LOAD_REVIEWS + SUCCESS: {
      return reviewsState
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set("entities", arrToMap(action.response));
    }
    case LOAD_REVIEWS + FAIL: {
      return reviewsState
        .set("loading", false)
        .set("loaded", true)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      return reviewsState.setIn(["entities", [action.generatedId]], {
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating
      });
    }
    default:
      return reviewsState;
  }
};
