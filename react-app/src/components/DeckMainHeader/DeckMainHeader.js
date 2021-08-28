import "./DeckMainHeader.css";
import logo from "../../images/logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Modal from "../Modal";
import LoginForm from "./auth/LoginForm";
import * as categoryActions from "../../store/categories";
import * as deckActions from "../../store/decks";

const DeckMainHeader = () => {
  const cards = useSelector((state) => state.cards);
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (deckId) {
      dispatch(categoryActions.getCategory(deckId));
    }
  }, [cards, deckId, dispatch]);

  const deleteUserDeck = (deleteId, userId) => {
    dispatch(deckActions.removeDeck({ deckId: deleteId, userId }));
    history.push("/decks-page");
  };

  const checkSession = (e) => {
    if (!sessionUser) { // open login modal

    }
    else { //direct to study page
      history.push(`/study-deck-page/${deckId}`);
    }
  };

  return (
    <div id="deck-main-header-div">
      <div id="language-logo-div">
        <img src={logo} alt="language-logo"></img>
      </div>
      <div id="language-name-div">
        <h1>{category?.name ? category.name : "Select a deck"}</h1>
      </div>
      <div id="study-deck-button-div">
        {cards.length ? (
          <button className="nav-button study-button" onClick={checkSession}>Study Deck</button>
        ) : null}
      </div>
      <div id="delete-deck-button-div">
        {cards.length ? (<button
          className="nav-button delete-button"
          onClick={() => deleteUserDeck(deckId, sessionUser.id)}
        >
          Delete Deck
        </button>) : null}
      </div>
    </div>
  );
};

export default DeckMainHeader;
