import './CardsContainer.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import * as cardActions from '../../store/cards';
import chooseDeck from "../../images/choosing-doors.jpg";

const CardsContainer = () => {
  const cards = useSelector(state => state.cards)
  const {deckId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const pageLoaded = () => dispatch(cardActions.getDeckCards(deckId));
    if (deckId) pageLoaded();
  }, [deckId, dispatch])

  return (
    <div id="cards-container-div">
      {cards.length ?
      cards.map(card => (
      <div key={card.id} className="whole-card-div">
        <div className="question-div">
          {card.question}
        </div>
        <div className="answer-div">
          {card.answer}
        </div>
      </div>))
      : <img src={chooseDeck} alt="Choose deck" id="choose-deck-doors"/>}
    </div>
  );
}

export default CardsContainer;
