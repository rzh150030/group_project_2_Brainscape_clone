import "./MyDecksSBTitle.css";
import { useSelector, useDispatch } from "react-redux";
import {  useEffect, useState } from "react";
import * as deckActions from "../../store/decks";
import SBDeckTitle from "../SBDeckTitle/SBDeckTitle"

const MyDecksSBTitle = ({page}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const storeDecks = useSelector(state => state.userDecks.decks)
  const [addDeck, setAddDeck] = useState(false)

  useEffect(()=> {
    return setTimeout(() => {
      setAddDeck(false)
    }, 300);
  },[storeDecks])

  const addNewDeck = (e) => {
    e.preventDefault();
    deckActions.addNewDeck({ title: "New Deck", category: 1})
    setAddDeck(true)
  };

  return (
    <>
      {sessionUser ? (
        <>
          <div id="outer-div-my-decks-title" className="outer-div">
            <div id="my-decks-text">
              <p>My Decks</p>
            </div>
            <div>
              <button onClick={addNewDeck}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <hr></hr>
        </>
      ) : (
        <>
          <div id="outer-div-my-decks-title" className="outer-div">
            <div id="my-decks-text">
              <p>Decks</p>
            </div>
          </div>
          <hr></hr>
        </>
      )}
      <SBDeckTitle page={page} addDeck={addDeck}/>
    </>
  );
};

export default MyDecksSBTitle;
