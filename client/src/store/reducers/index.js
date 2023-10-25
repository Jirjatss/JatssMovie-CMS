import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./movieReducer";
import castReducer from "./castReducer";

const rootReducer = combineReducers({
  movieReducer,
  castReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
