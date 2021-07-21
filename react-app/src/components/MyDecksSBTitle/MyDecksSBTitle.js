import "./MyDecksSBTitle.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as deckActions from "../../store/decks";

const MyDecksSBTitle = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch()
  const addNewDeck = (e) => {
    e.preventDefault();
    dispatch(deckActions.addNewDeck({ title: "New Deck", category: 1}))
  };

  return (
    <>
      {sessionUser ? (
        <>
          <div id="outer-div-my-decks-title" className="outer-div">
            <div id="my-decks-text">
              <p>My Decks</p>
            </div>
            <div>
              <button onClick={addNewDeck}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <hr></hr>
        </>
      ) : (
        <>
          <div id="outer-div-my-decks-title" className="outer-div">
            <div id="my-decks-text">
              <p>Decks</p>
            </div>
          </div>
          <hr></hr>
        </>
      )}
    </>
  );
};

export default MyDecksSBTitle;
