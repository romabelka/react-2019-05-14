import { FAIL, START, SUCCESS } from "../constants";

export default store => next => action => {
  const { callAPI, ...rest } = action;
  if (callAPI) {
    next({
      type: action.type + START
    });
    fetch(callAPI)
      .then(res => res.json())
      .then(data => {
        next({
          ...rest,
          type: action.type + SUCCESS,
          response: data
        });
      })
      .catch(e => {
        next({
          ...rest,
          type: action.type + FAIL,
          error: e
        });
      });
  } else {
    next(rest);
  }
};
