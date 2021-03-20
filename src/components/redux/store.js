import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./users/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  User: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
