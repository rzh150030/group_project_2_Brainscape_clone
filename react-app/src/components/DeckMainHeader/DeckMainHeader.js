import './DeckMainHeader.css'
import logo from '../../images/logo.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import * as categoryActions from "../../store/categories";




const DeckMainHeader = () => {
  const category = useSelector((state) => state.categories.category)
  const cards = useSelector((state) => state.cards)
  const dispatch = useDispatch();
  const { deckId } = useParams();

  useEffect(() => {
    dispatch(categoryActions.getCategory(deckId))
  }, [cards])


  return (
    <div id="deck-main-header-div">
      <div id="language-logo-div">
        <img src={logo} alt="language-logo"></img>
      </div>
      <div id="language-name-div">
        <h1>{category.name}</h1>
      </div>
      <div id="study-deck-button-div">
        <button>Study Deck</button>
      </div>
      <div id="quote-div">
        <h1>Quote</h1>
      </div>
    </div>
  );
}

export default DeckMainHeader;
