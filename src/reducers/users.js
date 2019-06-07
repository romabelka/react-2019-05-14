import { ADD_REVIEW, FAIL, LOAD_USERS, START, SUCCESS } from "../constants";
import { arrToMap, ResourceRecord } from "./utils";

export default (usersState = new ResourceRecord(), action) => {
  switch (action.type) {
    case LOAD_USERS + START: {
      return usersState
        .set("loading", true)
        .set("loaded", false)
        .set("error", null);
    }
    case LOAD_USERS + SUCCESS: {
      return usersState
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set("entities", arrToMap(action.response));
    }
    case LOAD_USERS + FAIL: {
      return usersState
        .set("loading", false)
        .set("loaded", false)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      if (!usersState.getIn(["entities", action.userId])) {
        return usersState.setIn(["entities", action.userId], {
          id: action.userId,
          name: action.payload.userName
        });
      } else {
        return usersState;
      }
    }
    default:
      return usersState;
  }
};
