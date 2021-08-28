const GET_CATEGORY = "decks/GET_CATEGORY";
const RESET_CATEGORY = "decks/RESET_CATEGORY";

export const getCategoryAction = (category) => ({
  type: GET_CATEGORY,
  payload: category,
});

export const resetCategoryAction = () => ({
  type: RESET_CATEGORY,
  payload: {name: null}
});


export const getCategory = (deckId) => async (dispatch) => {
  const response = await fetch(`/api/categories/deck/${deckId}`);

  if (response.ok) {
    const category = await response.json();
    dispatch(getCategoryAction(category));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CATEGORY:
      newState = action.payload;
      return newState;
    case RESET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
