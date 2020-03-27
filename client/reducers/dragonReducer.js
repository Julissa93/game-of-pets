import axios from 'axios';

//action type
const GET_DRAGONS = "GET_DRAGONS";

//action creators
export const getDragons = dragons => ({
  type: GET_DRAGONS,
  dragons
});

//thunk creator
export const fetchDragonsFromServer = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/dragons");
    setTimeout(() => dispatch(getDragons(data)), 3000);
  };
};

const initialState = {
  all: [],
  loading: true
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DRAGONS:
      return {...state, all: action.dragons, loading: false};
    default:
      return state;
  }
}

export default reducer;