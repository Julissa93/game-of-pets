/* eslint-disable default-case */
import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

//action type
const GET_DRAGONS = "GET_DRAGONS";
const GET_WOLVES = 'GET_WOLVES';

//action creators
export const getDragons = (dragons) => ({
  type: GET_DRAGONS,
  dragons
})

export const getWolves = (wolves) => ({
  type: GET_WOLVES,
  wolves
})

//initial state
const initialState = {
    dragons: [],
    wolves: []
}

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WOLVES:
            return {...state, wolves: action.wolves}
        case GET_DRAGONS:
          return {...state, dragons: action.dragons};
        default:
            return state;
    }
}

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware)
);

export default store;