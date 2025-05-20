import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";

const rootRedeucer = combineReducers({ restaurantReducer, cartReducer });

const store = createStore(rootRedeucer, applyMiddleware(thunk));

export default store;
