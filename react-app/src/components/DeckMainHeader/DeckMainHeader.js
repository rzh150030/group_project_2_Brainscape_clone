import "./DeckMainHeader.css";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import * as categoryActions from "../../store/categories";
import * as deckActions from "../../store/decks";

const DeckMainHeader = () => {
  const cards = useSelector((state) => state.cards);
  const category = useSelector((state) => state.categories.category);
  const currentDeck = useSelector((state) => state.currentDeck);
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const zenQuotes = useSelector((state) => state.studyQuotes);

  let max = 30;
  let randomNumber = Math.floor(Math.random() * max);

  console.log(zenQuotes.length);
  console.log(zenQuotes);

  let quote = "He who knows how to wait need make no concessions.";
  let author = "Sigmund Freud";

  if (zenQuotes[5]) {
    quote = zenQuotes[randomNumber]["q"];
    author = zenQuotes[randomNumber]["a"];
  }

  useEffect(() => {
    dispatch(categoryActions.getCategory(deckId));
  }, [cards]);

  useEffect(() => {}, [currentDeck]);
  const deleteUserDeck = (deleteId, userId) => {
    dispatch(deckActions.removeDeck({ deckId: deleteId, userId }));
    history.push("/decks-page");
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
        {cards ? (
          <Link to={`/study-deck-page/${deckId}`}>
            <button className="nav-button study-button">Study Deck</button>
          </Link>
        ) : null}
      </div>
      <div id="quote-div">
        <div id="actual-quote-div">"{zenQuotes && quote}"</div>
        <div id="actual-author-div">-- {zenQuotes && author}</div>
      </div>
      <div id="delete-deck-button-div">
        <button
          className="nav-button delete-button"
          onClick={() => deleteUserDeck(deckId, sessionUser.id)}
        >
          Delete Deck
        </button>
      </div>
    </div>
  );
};

export default DeckMainHeader;
