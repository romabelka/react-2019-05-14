import { arrToMap, ResourceRecord } from "./utils";
import { FAIL, LOAD_DISHES, START, SUCCESS } from "../constants";

export default (dishesState = new ResourceRecord(), action) => {
  switch (action.type) {
    case LOAD_DISHES + START: {
      return dishesState
        .set("loading", true)
        .set("loaded", false)
        .set("error", null);
    }
    case LOAD_DISHES + SUCCESS: {
      return dishesState
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set("entities", arrToMap(action.response));
    }
    case LOAD_DISHES + FAIL: {
      return dishesState
        .set("loading", false)
        .set("loaded", false)
        .set("error", action.error);
    }
    default:
      return dishesState;
  }
};
