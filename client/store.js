/* eslint-disable default-case */
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import direwolfReducer from './reducers/direwolfReducer';
import dragonReducer from './reducers/dragonReducer'

const rootReducer = combineReducers({
  dragons: dragonReducer,
  direwolves: direwolfReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;