const GET_USER_DECKS = "decks/GET_USER_DECKS";
const ADD_DECK = "decks/ADD_DECK";
const REMOVE_DECK = "decks/REMOVE_DECK";

export const getUserDecksAction = (decks) => ({
  type: GET_USER_DECKS,
  payload: {...decks},
});



export const getUserDecks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/decks/user/${userId}`);

  if (response.ok) {
    const decks = await response.json();
    dispatch(getUserDecksAction(decks));
  }
};

export const addNewDeck = (newDeck) => async(dispatch) => {
  const response = await fetch(`/api/decks/create`, {
    method: 'POST',
    headers: {
      "CONTENT-TYPE": "application/json"
    },
    body: JSON.stringify(newDeck)
  })
  if (response.ok) {
    const {deck} = await response.json();

    dispatch(getUserDecks(deck.userId))
  }
  else {

  }

}

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_USER_DECKS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}
