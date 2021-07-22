import './CardsContainer.css'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import * as cardActions from '../../store/cards'

const CardsContainer = () => {
  const currentDeck = useSelector(state => state.currentDeck)
  const [currentCards, setCurrentCards] = useState([])
  const {deckId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const pageLoaded = async () => await dispatch(cardActions.getDeckCards(deckId));
    pageLoaded();
  }, [])


  useEffect(() => {
    setCurrentCards(currentDeck)
  }, [currentDeck])

  return (
    <div id="cards-container-div">
      {currentDeck.map(card => (
      <div key={card.id} className="whole-card-div">
        <div className="question-div">
          {card.question}
        </div>
        <div className="answer-div">
          {card.answer}
        </div>
      </div>))}
    </div>
  );
}

export default CardsContainer;
