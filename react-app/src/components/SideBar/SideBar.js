import './SideBar.css';
import ProfileLogo from '../ProfileLogo/ProfileLogo'
import MyDecksSBTitle from '../MyDecksSBTitle/MyDecksSBTitle'
import AddNewCard from '../AddNewCard/AddNewCard';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const SideBar = ({page}) => {

  const { deckId } = useParams();
  const userDecks = useSelector(state => state.userDecks.decks);
  

  return (
    <div id="sidebar-div">
      <ProfileLogo />
      <MyDecksSBTitle page={page}/>
      {deckId && <AddNewCard deckId={deckId}/>}
    </div>
  );
}

export default SideBar;
