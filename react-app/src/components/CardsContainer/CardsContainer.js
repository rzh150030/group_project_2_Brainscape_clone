import './CardsContainer.css'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import * as cardActions from '../../store/cards'

const CardsContainer = () => {
  const cards = useSelector(state => state.cards)
  const [currentCards, setCurrentCards] = useState([])
  const {deckId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const pageLoaded = () => dispatch(cardActions.getDeckCards(deckId));
     if (deckId) pageLoaded();
  }, [deckId, dispatch])


  useEffect(() => {
    setCurrentCards(cards)
  }, [cards])

  return (
    <div id="cards-container-div">
      {cards.map(card => (
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
