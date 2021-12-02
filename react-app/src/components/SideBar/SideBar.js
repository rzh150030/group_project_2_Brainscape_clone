import './SideBar.css';
import ProfileLogo from '../ProfileLogo/ProfileLogo'
import MyDecksSBTitle from '../MyDecksSBTitle/MyDecksSBTitle'
import AddNewCard from '../AddNewCard/AddNewCard';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SideBar = ({page}) => {
  const userOwnsDeck = false;
  const { deckId } = useParams();
  const userDecks = useSelector(state => state.userDecks.decks);

  useEffect(() => {
    for (let deck of userDecks) {
      if (deck.id === deckId) {
        userOwnsDeck = true;
      }
    }
  }, [])

  return (
    <div id="sidebar-div">
      <ProfileLogo />
      <MyDecksSBTitle page={page}/>
      {deckId && userOwnsDeck && <AddNewCard deckId={deckId}/>}
    </div>
  );
}

export default SideBar;
