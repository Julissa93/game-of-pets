import axios from 'axios';

//action type
const GET_WOLVES = "GET_WOLVES";

//action creators
export const getWolves = wolves => ({
  type: GET_WOLVES,
  wolves
});


export const fetchWolvesFromServer = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/wolves");
    setTimeout( () => dispatch(getWolves(data)), 3000);
   
  }
}

const initialState = {
  all: [],
  loading: true
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WOLVES:
      return {...state, all: action.wolves, loading: false};
    default:
        return state;
  }
};

export default reducer;