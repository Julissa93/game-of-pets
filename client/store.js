/* eslint-disable default-case */
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import axios from "axios";
/* 
  Trajectory for today's demo: 
  * How to make AJAX calls with Redux? We do that by using Thunk Middleware!
  * How can we modularize our Redux store in a large scale application? 
    * combineReducers - a helper function that allows us to split our reducers into multiple/separate reducers.
      Each managing different slices of our state. 
    * This function turns an object whose values are difference reducers into a single reducer.
  * Empty/Loading state pattern
*/

//action type
const GET_DRAGONS = "GET_DRAGONS";
const GET_WOLVES = "GET_WOLVES";

//action creators
export const getDragons = dragons => ({
  type: GET_DRAGONS,
  dragons
});

export const getWolves = wolves => ({
  type: GET_WOLVES,
  wolves
});

//thunk creator
export const fetchDragonsFromServer = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/dragons");
    dispatch(getDragons(data));
  };
};

export const fetchWolvesFromServer = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/wolves");
    dispatch(getWolves(data));
  }
}

//initial state
const initialState = {
  dragons: [],
  wolves: []
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WOLVES:
      return { ...state, wolves: action.wolves };
    case GET_DRAGONS:
      return { ...state, dragons: action.dragons };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export default store;
