/* eslint-disable default-case */
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import wolfReducer from './reducers/wolfReducer';
import dragonReducer from './reducers/dragonReducer';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  wolves: wolfReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;