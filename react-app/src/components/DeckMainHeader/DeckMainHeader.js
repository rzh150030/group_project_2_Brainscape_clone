import './DeckMainHeader.css';
import logo from "../../images/logo.png";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import * as categoryActions from "../../store/categories";
import * as deckActions from "../../store/decks";


const DeckMainHeader = () => {
  const cards = useSelector((state) => state.cards);
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);


  // const getInspirationalQuotes = async () => {
  //   const proxy = "https://aa-ketchup.herokuapp.com/";
  //   let response = await fetch(proxy + "https://zenquotes.io/api/quotes/");

  //   console.log(response);
  // }

  // getInspirationalQuotes();



  useEffect(() => {
    dispatch(categoryActions.getCategory(deckId));
  }, [cards]);


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
        <h1>{category?.name ? category.name : "Select a deck"}</h1>
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
