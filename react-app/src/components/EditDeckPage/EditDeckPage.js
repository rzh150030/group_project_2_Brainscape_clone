import "./EditDeckPage.css";
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const EditDeckPage = () => {
  useEffect(()=>{},[])
  return (
    <div id="edit-deck-page-main-div">
      <div id="flash-cards-title"> Flash Cards in "Deck Title"</div>
      <div id="question-answer-div">
        <div id="question-title-div">Question</div>
        <div id="answer-title-div">Answer</div>
      </div>
      <div id="edit-deck-form-box">
        <div className="card-number-div">1</div>
        <div className="form-input-div">
          <textarea rows="3" className="form-input-box" type="text"></textarea>
        </div>
        <div className="form-input-div">
          <textarea rows="3" className="form-input-box" type="text"></textarea>
        </div>
        <div>
          <button className="delete-card-button">X</button>
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
