import './StudyDeckPage.css'
import SideBar from '../SideBar/SideBar'
import DeckMainHeader from '../DeckMainHeader/DeckMainHeader'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'


const StudyDeckPage = () => {
  const page = 'study-deck-page';
  const currentDeck = useSelector((state) => state.currentDeck)
  const [currentCard, setCurrentCard] = useState(0)



  if (currentDeck.length === 0) {
    return <Redirect to="/decks-page" />
  }


  const questionText = currentDeck[currentCard].question;
  const answerText = currentDeck[currentCard].answer;



  // const handleClickNext = () => {
  //   //
  // }


  const handleClick = () => {

    const studyCardContainer = document.querySelector(".study-card-div");
    studyCardContainer.classList.toggle("flip");
  }

  // useEffect(() => {

  // }, [cardState])

  return (

    <div id="study-page-outer-main-div">
      <SideBar page={page} />
      <DeckMainHeader />



    <div id="study-card-container-grid">

      <div id="previous-card-button-div">
        <button>Previous</button>
      </div>


    <div className="study-card-container">
      <div className="study-card-div">



        <div className="the-front">
          Front of Card
        </div>

        <div className="the-back">
        Back of Card
        </div>



      </div>
      <div id="flip-button-div">
           <button id="flip-button" onClick={handleClick}>Flip!</button>
      </div>
    </div>


      <div id="next-card-button-div">
        <button>Next</button>
      </div>


    </div>



    </div>

  );
}

export default StudyDeckPage;
