import axios from "axios";

//action types
const GET_DRAGONS = "GET_DRAGONS";

//action creator
const getDragonsFromServer = dragons => ({
  type: GET_DRAGONS,
  dragons
});

//thunky thunks

export const fetchDragons = () => async dispatch => {
  const res = await axios.get("/api/dragons");
  const action = getDragonsFromServer(res.data);
  setTimeout(() => {
    dispatch(action);
  }, 3000);
  
};

const initialState = {
  all: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return { ...state, all: action.dragons, loading: false };
    
    default:
      return state;
  }
};

export default reducer;