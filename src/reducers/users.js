import { normalizedUsers } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState.find(user => user.id === action.userId)) {
        return [
          ...usersState,
          {
            id: action.userId,
            name: action.payload.userName
          }
        ];
      } else {
        return usersState;
      }
    }
    default:
      return usersState;
  }
};
