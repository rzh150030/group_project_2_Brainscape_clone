const GET_QUOTES = "quotes/GET_QUOTES";

export const getZenQuotes = (allQuotes) => ({
  type: GET_QUOTES,
  payload: {...allQuotes}
});

export const getAllZenQuotes = () => async (dispatch) => {
  // const response = await fetch("https://pbrain-app-staging.herokuapp.com/api/quote/");
  const response = await fetch("/api/quote/");

  if (response.ok) {
    const jsonData = await response.json();

    dispatch(getZenQuotes(jsonData));
  }
};



const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_QUOTES:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}
