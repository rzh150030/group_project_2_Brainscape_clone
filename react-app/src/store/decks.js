const GET_USER_DECKS = "decks/GET_USER_DECKS";
const GET_CURRENT_DECK = "decks/GET_CURRENT_DECK";

export const getUserDecksAction = (decks) => ({
  type: GET_USER_DECKS,
  payload: { ...decks },
});

const getCurrentDeckAction = (deck) => ({
  type: GET_CURRENT_DECK,
  payload: deck
});

export const getCurrentDeck = (deckId) => async dispatch => {
  const response = await fetch(`api/decks/${deckId}`);

  if (response.ok) {
    const currentDeck = await response.json();
    dispatch(getCurrentDeckAction(currentDeck.deck));
  }
};

export const getUserDecks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/decks/user/${userId}`);

  if (response.ok) {
    const decks = await response.json();
    dispatch(getUserDecksAction(decks));
  }
};

export const addNewDeck = (newDeck) => async (dispatch) => {
  const response = await fetch(`/api/decks/create`, {
    method: "POST",
    headers: {
      "CONTENT-TYPE": "application/json",
    },
    body: JSON.stringify(newDeck),
  });
  if (response.ok) {
    const { deck } = await response.json();

    dispatch(getUserDecks(deck.userId));
  }
};

export const removeDeck = ({deckId, userId}) => async (dispatch) => {

  const response = await fetch(`/api/decks/${deckId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(getUserDecks(userId));
  }
};

const initialState = {currentDeck: null};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DECKS:
      let newState = {...state};
      newState = action.payload;
      return newState;
    case GET_CURRENT_DECK:
      let newDeckState = {...state};
      newDeckState.currentDeck = action.payload;
      return newDeckState;
    default:
      return state;
  }
}
