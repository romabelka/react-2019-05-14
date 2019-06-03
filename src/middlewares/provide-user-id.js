import uuid from "uuid/v4";

export default store => next => action => {
  const { provideUserId, ...rest } = action;
  if (!provideUserId) {
    next(rest);
  } else {
    const user = store
      .getState()
      .users.find(user => user.name === rest.payload.userName);
    next({
      ...rest,
      userId: user ? user.id : uuid()
    });
  }
};
