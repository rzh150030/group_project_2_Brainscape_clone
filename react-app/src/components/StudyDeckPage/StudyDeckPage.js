import './StudyDeckPage.css'
import SideBar from '../SideBar/SideBar'
import DeckMainHeader from '../DeckMainHeader/DeckMainHeader'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'


const StudyDeckPage = () => {
  const page = 'study-deck-page';
  const currentDeck = useSelector((state) => state.cards)
  const [currentCard, setCurrentCard] = useState(0)

  let question;
  let answer;

  if (currentDeck[currentCard]) {
    question = currentDeck[currentCard].question;
    answer = currentDeck[currentCard].answer;
  }

  const deckLength = currentDeck.length;

  const handleClickNext = () => {

    if (currentCard < deckLength - 1) {
      setCurrentCard((prev) => prev + 1)

      question = currentDeck[currentCard].question;
      answer = currentDeck[currentCard].answer;
    }
    else {
      setCurrentCard(0)
    }

  }

  const handleClickPrevious = () => {

    if (currentCard >= 1 && currentCard < deckLength) {
      setCurrentCard((prev) => prev - 1)

      question = currentDeck[currentCard].question;
      answer = currentDeck[currentCard].answer;
    }
    else {
      setCurrentCard(deckLength - 1)
    }

  }


  const handleClick = () => {

    const studyCardContainer = document.querySelector(".study-card-div");
    studyCardContainer.classList.toggle("flip");
  }

  // useEffect(() => {
  //   // console.log(currentCard);
  // }, [currentCard])

  if (currentDeck.length === 0) {
    return <Redirect to="/decks-page" />
  }

  return (

    <div id="study-page-outer-main-div">
      <SideBar page={page} />
      <DeckMainHeader />



    <div id="study-card-container-grid">

      <div id="previous-card-button-div">
        <button onClick={handleClickPrevious}>
        <i class="fas fa-less-than"></i>
        </button>
      </div>


    <div className="study-card-container">
      <div className="study-card-div">



        <div className="the-front">
          {question}
        </div>

        <div className="the-back">
          {answer}
        </div>



      </div>
      <div id="flip-button-div">
           <button id="flip-button" onClick={handleClick}>Flip!</button>
      </div>
    </div>


      <div id="next-card-button-div">
        <button onClick={handleClickNext}>
        <i className="fas fa-greater-than"></i>
        </button>
      </div>


    </div>



    </div>

  );
}

export default StudyDeckPage;
