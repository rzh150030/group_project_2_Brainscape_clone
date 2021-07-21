const GET_USER_DECKS = "decks/GET_USER_DECKS";
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
