const GET_CARDS = "cards/GET_CARDS";
const WIPE_CARDS = "cards/WIPE_CARDS";

export const getCardsAction = (cards) => ({
  type: GET_CARDS,
  payload: [...cards.cards],
});

export const wipeCurrentDeckCards = () => ({
  type: WIPE_CARDS,
  payload: []
})

export const getDeckCards = (deckId) => async (dispatch) => {
  const response = await fetch(`/api/cards/deck/${deckId}`);

  if (response.ok) {
    const cards = await response.json();
    dispatch(getCardsAction(cards));
  }
};

export const wipeCurrentCards = () => async (dispatch) => {
  dispatch(wipeCurrentDeckCards());
}

const initialState = [];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CARDS:
      newState = action.payload;
      return newState;
    case WIPE_CARDS:
      newState = action.payload
      return newState;
    default:
      return state;
  }
}
