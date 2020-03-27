/* eslint-disable default-case */
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import axios from "axios";
import wolvesReducer from './reducers/wolfReducer';
import dragonsReducer from './reducers/dragonReducer';
/* 
  Trajectory for today's demo: 
  * How to make AJAX calls with Redux? 
  * How can we modularize our Redux store in a large scale application? 
  * Empty/Loading state pattern
*/

const rootReducer = combineReducers({
  dragons: dragonsReducer,
  wolves: wolvesReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument(axios), loggerMiddleware)
);

export default store;
