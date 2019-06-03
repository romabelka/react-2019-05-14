import uuid from "uuid/v4";

export default store => next => action => {
  const { generateId, ...rest } = action;
  if (!generateId) {
    next(rest);
  } else {
    next({
      ...rest,
      generatedId: uuid()
    });
  }
};
