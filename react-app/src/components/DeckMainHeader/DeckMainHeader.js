import "./DeckMainHeader.css";
import logo from "../../images/logo.png";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as deckActions from "../../store/decks";

const DeckMainHeader = () => {
  const { deckId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const deleteUserDeck = (deleteId, userId) => {
    dispatch(deckActions.removeDeck({ deckId: deleteId, userId }));
    history.push('/decks-page')
  };

  return (
    <div id="deck-main-header-div">
      <div id="language-logo-div">
        <img src={logo} alt="language-logo"></img>
      </div>
      <div id="language-name-div">
        <h1>Python</h1>
      </div>
      <div id="study-deck-button-div">
        <Link to={`/study-deck-page/${deckId}`}>
          <button>Study Deck</button>
        </Link>
      </div>
      <div id="quote-div">
        <h1>Quote</h1>
        <button id="" onClick={() => deleteUserDeck(deckId, sessionUser.id)}> Delete Deck</button>
      </div>
    </div>
  );
};

export default DeckMainHeader;
