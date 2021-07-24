import "./EditDeckPage.css";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDeckCards, updateDeck } from "../../store/cards";
import { getUserDecks } from "../../store/decks";

const EditDeckPage = () => {
  const { deckId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const cards = useSelector(state => state.cards)
  const title = useSelector(state => {
    if (state.userDecks.decks) {
      const deck = state.userDecks.decks.filter(deck => deck.id === Number(deckId))
      return deck[0].title
    }
  })
  
  const [deck, setDeck] = useState(cards);
  const history = useHistory();


  useEffect(() => {
    dispatch(getDeckCards(deckId));
    dispatch(getUserDecks(user.id));
  }, []);

  useEffect(() => {
    setDeck(cards);
  }, [cards]);


  const changeQuestion = (e, i) => {
    let newCard = deck[i];
    newCard.question = e.target.value;
    const newDeck = [...deck];
    newDeck.splice(i, 1, newCard);
    setDeck(newDeck);
  }

  const changeAnswer = (e, i) => {
    let newCard = deck[i];
    newCard.answer = e.target.value;
    const newDeck = [...deck];
    newDeck.splice(i, 1, newCard);
    setDeck(newDeck);
  }

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
      <h1 id="flash-cards-title"> {`Flash Cards in "${title}"`}</h1>
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
                onChange={(e) => changeQuestion(e, i)}
              ></textarea>
            </div>
            <div className="form-input-div">
              <textarea
                rows="3"
                className="form-input-box"
                type="text"
                value={card.answer}
                onChange={(e) => changeAnswer(e, i)}
              ></textarea>
            </div>
            <div>
              <button id={i} className="delete-card-button" onClick={(e) => deleteCard(e)} >X</button>
            </div>
          </div>
        ))}
      </form>
      <div className='buttons-holder'>
        <div className='add-card-holder'>
          <i className="far fa-plus-square" onClick={newCardInput}></i>
        </div>
        <div className='buttons-holder-right'>
          <button className='save-button' onClick={submitDeck}>
            Save Deck
          </button>
          <button className='study-button'>
            Start Studying
          </button>
        </div>
      </div>
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
