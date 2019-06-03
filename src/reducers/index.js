import { combineReducers } from "redux";
import counterReducer from "./counter";
import cartReducer from "./cart";
import restaurantsReducer from "./restaurants";
import dishesReducer from "./dishes";
import reviewsReducer from "./reviews";
import usersReducer from "./users";

export default combineReducers({
  count: counterReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  dishes: dishesReducer,
  reviews: reviewsReducer,
  users: usersReducer
});
