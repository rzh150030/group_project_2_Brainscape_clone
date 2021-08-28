const GET_DECKS = "search/GET_DECKS";

const addResults = (results) => ({
    type: GET_DECKS,
    payload: results
});

//thunk for getting search results
export const searchDecks = (name) => async dispatch => {
    const response = await fetch(`/api/search/${name}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(addResults(data.results));
        return true;
    }
}

const initialState = null;

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_DECKS:
            return action.payload;
        default:
            return state;
    }
}
