import "./EditDeckPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditDeckPage = () => {
  const [deck, setDeck] = useState([
    { id: 0, q: "", a: "" },
    { id: 0, q: "", a: "" },
    { id: 0, q: "", a: "" },
    { id: 0, q: "", a: "" },
  ]);

  // const { deckId } = useParams()

  useEffect(() => {}, []);
  const submitDeck = (e) => {
    e.preventDefault()
    console.log(deck);
  };
  const deleteCard = (e) => {
    e.preventDefault()
    console.log(e.target.id);
  };
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
              <button id={i} className="delete-card-button" onClick={deleteCard} >X</button>
            </div>
          </div>
        ))}
      </form>
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
