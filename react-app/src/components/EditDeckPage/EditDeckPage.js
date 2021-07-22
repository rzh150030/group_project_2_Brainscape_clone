import "./EditDeckPage.css";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDeckCards, updateDeck } from "../../store/cards";

const EditDeckPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards)
  const [deck, setDeck] = useState(cards);
  const history = useHistory();

  const { deckId } = useParams();

  useEffect(() => {
    dispatch(getDeckCards(deckId));
  }, []);

  useEffect(() => {
    setDeck(cards);
  }, [cards]);

  const submitDeck = (e) => {
    e.preventDefault();

    const data = {
      cards: deck
    }

    let newDeck = dispatch(updateDeck(data, deckId));

    if (newDeck) history.push(`/deck-page/${deckId}`);
  };

  const deleteCard = (e) => {
    e.preventDefault();

    const newDeck = [...deck];
    newDeck.splice(e.target.id, 1);
    setDeck(newDeck);
  };

  const newCardInput = (e) => {
    e.preventDefault();

    setDeck([...deck, {id: 0, question: "", answer: "", deckId}]);
  }

  return (
    <div id="edit-deck-page-main-div">
      <h1 id="flash-cards-title"> Flash Cards in "Deck Title"</h1>
      <div id="question-answer-div">
        <h2 id="question-title-div">Question</h2>
        <h2 id="answer-title-div">Answer</h2>
      </div>
      <form id="edit-deck-form" onSubmit={submitDeck}>
        {deck.map((card, i) => (
          <div key={i} className="card-div">
            <div className="card-number-div">{i + 1}</div>
            <div className="form-input-div">
              <textarea
                rows="3"
                className="form-input-box"
                type="text"
                value={card.question}
                onChange={value}
              ></textarea>
            </div>
            <div className="form-input-div">
              <textarea
                rows="3"
                className="form-input-box"
                type="text"
                value={card.answer}
                onChange={value}
              ></textarea>
            </div>
            <div>
              <button id={i} className="delete-card-button" onClick={(e) => deleteCard(e)} >X</button>
            </div>
          </div>
        ))}
      </form>
      <button onClick={newCardInput}>
          Add New Card
      </button>
      <button onClick={submitDeck}>
        Save Deck
      </button>
    </div>
  );
};

export default EditDeckPage;

// const deck = {
//   'cards': [
//     {id: , q: "", a: "" },
//     {id: , q: "", a: "" },
//     {id: , q: "", a: "" },
//   ],
// };

// {deck.map(thing => {
//   <div>q</div>
// })}
