import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import logger from "../middlewares/logger";
import generateId from "../middlewares/generate-id";
import provideUserId from "../middlewares/provide-user-id";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(
  applyMiddleware(generateId, provideUserId, logger)
);

const store = createStore(reducer, enhancer);

// dev mode
window.store = store;

export default store;
