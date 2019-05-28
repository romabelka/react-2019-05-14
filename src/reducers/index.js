import { combineReducers } from "redux";
import counterReducer from "./counter";
import cartReducer from "./cart";
import restaurantsReducer from "./restaurants";
import dishesReducer from "./dishes";

export default combineReducers({
  count: counterReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  dishes: dishesReducer
});
