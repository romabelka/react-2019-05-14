import uuid from "uuid/v4";
import { usersSelector } from "../selectors";

export default store => next => action => {
  const { provideUserId, ...rest } = action;
  if (!provideUserId) {
    next(rest);
  } else {
    const user = usersSelector(store.getState()).find(
      user => user.name === rest.payload.userName
    );
    next({
      ...rest,
      userId: user ? user.id : uuid()
    });
  }
};
