import "./SBDeckTitle.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../../store/decks";

const SBDeckTitle = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const storeDecks = useSelector((state) => state.userDecks.decks);
  const [userDecks, setUserDecks] = useState([]);

  useEffect(() => {
    const getDeckTitles = async (userId) => {
      await dispatch(deckActions.getUserDecks(userId));
    };
    if (sessionUser) {
      getDeckTitles(sessionUser.id);
    }
  }, [dispatch, sessionUser]);

  useEffect(()=>{
    setUserDecks(storeDecks);
  },[storeDecks])

  return (
    <div id="deck-title-div">
      <ul id="sidebar-ul">
        {userDecks?.map((deck) => (
          <li key={deck.id} tabIndex="0">
            {deck.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SBDeckTitle;
