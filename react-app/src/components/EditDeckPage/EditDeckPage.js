import "./EditDeckPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDeckCards } from "../../store/cards";

const EditDeckPage = () => {
  const dispatch = useDispatch();
  const [deck, setDeck] = useState(
    useSelector(state => state.cards)
  );

  const { deckId } = useParams();
  const cardCount = deck.length;


  useEffect(() => {
    dispatch(getDeckCards(deckId));
  }, [deck]);

  const submitDeck = (e) => {
    e.preventDefault();

  };

  const deleteCard = (e) => {
    e.preventDefault();

  };

  const newCardInput = (e) => {
    e.preventDefault();

    let newCardDiv = (
      <div key={cardCount} className="card-div">
            <div className="card-number-div">{cardCount + 1}</div>
            <div className="form-input-div">
              <textarea
                rows="3"
                className="form-input-box"
                type="text"
              ></textarea>
            </div>
            <div className="form-input-div">
              <textarea
                rows="3"
                className="form-input-box"
                type="text"
              ></textarea>
            </div>
            <div>
              <button id={cardCount} className="delete-card-button" onClick={deleteCard} >X</button>
            </div>
          </div>
    )

    return newCardDiv;
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
              ></textarea>
            </div>
            <div className="form-input-div">
              <textarea
                rows="3"
                className="form-input-box"
                type="text"
                value={card.answer}
              ></textarea>
            </div>
            <div>
              <button id={i} className="delete-card-button" onClick={deleteCard} >X</button>
            </div>
          </div>
        ))}
        
      </form>
      <button onClick={newCardInput}>
          Add New Card
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
