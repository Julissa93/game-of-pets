import axios from 'axios';

//action type
const GET_DIREWOLVES = 'GET_DIREWOLVES';

//action creator
const getDirewolvesFromServer = direwolves => ({
    type: GET_DIREWOLVES,
    direwolves
});

//thunky thunk
export const fetchDirewolves = () => async dispatch => {
    const res = await axios.get('/api/direwolves');
    const action = getDirewolvesFromServer(res.data);
    dispatch(action);
}

const initialState = {
    all: [],
    loading: true,
    selected: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIREWOLVES:
            return {...state, all: action.direwolves, loading: false}
        default:
            return state;
    }
}

export default reducer;