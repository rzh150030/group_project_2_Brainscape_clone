import "./SBDeckTitle.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../../store/decks";
import * as cardActions from "../../store/cards";


const SBDeckTitle = ({addDeck}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const storeDecks = useSelector((state) => state.userDecks.decks);
  const [userDecks, setUserDecks] = useState([]);

  useEffect(() => {
    const getDeckTitles = async (userId) => {
      await dispatch(deckActions.getUserDecks(userId));
    };
    if (sessionUser || addDeck) {
      getDeckTitles(sessionUser.id);
    }

  }, [dispatch, sessionUser, addDeck]);

  useEffect(() => {
    setUserDecks(storeDecks);
  }, [storeDecks]);

  const getDeckCards = async (e) => {
    e.preventDefault();
    await dispatch(cardActions.getDeckCards(e.target.id));
  };

  return (
    <>
      <div id="deck-title-div">
        <ul id="sidebar-ul">
          {userDecks?.map((deck) => (
            <li key={deck.id} id={deck.id} onClick={getDeckCards} tabIndex="0">
              {deck.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SBDeckTitle;