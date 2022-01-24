import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./Admin/adminReducer";
import { employeeReducer } from "./Employee/employeeRedcuer";
import LoginReducer from "./Login/LoginReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  employee: employeeReducer,
  admin: adminReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const myEnhancer = composeEnhancers(applyMiddleware(thunk));

export const myStore = createStore(rootReducer, myEnhancer);
