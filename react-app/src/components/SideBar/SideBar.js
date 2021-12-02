import './SideBar.css';
import ProfileLogo from '../ProfileLogo/ProfileLogo'
import MyDecksSBTitle from '../MyDecksSBTitle/MyDecksSBTitle'
import AddNewCard from '../AddNewCard/AddNewCard';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const SideBar = ({page}) => {
  const { deckId } = useParams();
  const currentDeck = useSelector(state => state.userDecks.currentDeck);
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div id="sidebar-div">
      <ProfileLogo />
      <MyDecksSBTitle page={page}/>
      {deckId && currentDeck?.userId === sessionUser?.id && <AddNewCard deckId={deckId}/>}
    </div>
  );
}

export default SideBar;
