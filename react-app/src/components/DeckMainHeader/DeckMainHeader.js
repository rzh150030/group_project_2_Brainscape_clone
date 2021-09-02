import "./DeckMainHeader.css";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Modal from "../Modal";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import * as categoryActions from "../../store/categories";
import * as deckActions from "../../store/decks";

const DeckMainHeader = () => {
  const cards = useSelector((state) => state.cards);
  const categoryName = useSelector((state) => state.categories.name);
  const currentDeck = useSelector(state => state.userDecks.currentDeck);
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState("login");

  useEffect(() => {
    if (deckId) {
      dispatch(categoryActions.getCategory(deckId));
      dispatch(deckActions.getCurrentDeck(deckId));
    }
  }, [cards, deckId, dispatch]);

  const deleteUserDeck = (deleteId, userId) => {
    dispatch(deckActions.removeDeck({ deckId: deleteId, userId }));
    history.push("/decks-page");
  };

  const onClose = () => {
    setShowModal(false);
    setForm("");
  };

  const checkSession = (e) => {
    if (!sessionUser) { // open login modal
      setShowModal(true);
      setForm("login");
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
        <h1>{categoryName ? categoryName : "Select a deck"}</h1>
      </div>
      <div id="study-deck-button-div">
        {cards.length ? (
          <button className="nav-button study-button" onClick={checkSession}>Study Deck</button>
        ) : null}
      </div>
      <div id="delete-deck-button-div">
        {deckId && currentDeck?.userId === sessionUser?.id ? (<button
          className="nav-button delete-button"
          onClick={() => deleteUserDeck(deckId, sessionUser.id)}
        >
          Delete Deck
        </button>) : null}
      </div>
      {showModal === true && form === "login" && (
        <Modal onClose={onClose}>
          <LoginForm setForm={setForm} setShowModal={setShowModal} />
        </Modal>
      )}
      {showModal === true && form === "signup" && (
        <Modal onClose={onClose}>
          <SignUpForm showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default DeckMainHeader;
