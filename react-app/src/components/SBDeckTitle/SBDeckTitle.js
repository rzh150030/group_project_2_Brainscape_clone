import "./SBDeckTitle.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as deckActions from "../../store/decks";
import * as cardActions from "../../store/cards";

const SBDeckTitle = ({ addDeck, page }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const storeDecks = useSelector((state) => state.userDecks.decks);
  const [userDecks, setUserDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getDeckTitles = (userId) => {
      dispatch(deckActions.getUserDecks(userId));
    };
    if (sessionUser || addDeck) {
      getDeckTitles(sessionUser.id);
    }
  }, [dispatch, sessionUser, addDeck]);

  useEffect(() => {
    setUserDecks(storeDecks);
  }, [storeDecks]);

  const getDeckCards = (e) => {
    e.preventDefault();

    dispatch(cardActions.getDeckCards(e.target.id));
    history.push(`/deck-page/${e.target.id}`);
  };

  // const showDeck =

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
