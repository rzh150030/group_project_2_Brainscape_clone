const GET_DECKS = "search/GET_DECKS";

const addResults = (results) => ({
    type: GET_DECKS,
    payload: results
});

//thunk for getting search results

const initialState = {results: []};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_DECKS:
            return {results: action.payload};
        default:
            return state;
    }
}
