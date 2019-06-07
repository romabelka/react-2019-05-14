import { Map } from "immutable";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  SUBTRACT_FROM_CART
} from "../constants";

export default (cartState = Map({}), action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const id = action.payload.id;
      return cartState.set(id, cartState.get(id) ? cartState.get(id) + 1 : 1);
    }
    case SUBTRACT_FROM_CART: {
      const id = action.payload.id;
      const amount = cartState.get(id);
      if (amount === 1) {
        return cartState.delete(id);
      } else if (amount) {
        return cartState.set(id, amount - 1);
      }
      return cartState;
    }
    case DELETE_FROM_CART: {
      const id = action.payload.id;
      return cartState.delete(id);
    }
    default:
      return cartState;
  }
};
