const GET_CATEGORY = "decks/GET_CATEGORY";

export const getCategoryAction = (category) => ({
  type: GET_CATEGORY,
  payload: {category},
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
    default:
      return state;
  }
}
