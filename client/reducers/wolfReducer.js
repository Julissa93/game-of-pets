import axios from 'axios';
//action type
const GET_WOLVES = 'GET_WOLVES';

//action creator
const getWolvesFromServer = wolves => ({
    type: GET_WOLVES,
    wolves
});

//thunky thunk
export const fetchWolves = () => async dispatch => {
    const { data } = await axios.get('/api/wolves');
    const action = getWolvesFromServer(data);
    dispatch(action);
}

const initialState = {
    all: [],
    loading: true,
    selected: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WOLVES:
            return {...state, all: action.wolves, loading: false}
        default:
            return state;
    }
}

export default reducer;