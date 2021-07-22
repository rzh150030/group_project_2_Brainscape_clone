import './SideBar.css';
import ProfileLogo from '../ProfileLogo/ProfileLogo'
import MyDecksSBTitle from '../MyDecksSBTitle/MyDecksSBTitle'
import SBDeckTitle from '../SBDeckTitle/SBDeckTitle'
import AddNewCard from '../AddNewCard/AddNewCard';
import { useParams } from 'react-router-dom';

const SideBar = ({page}) => {

  const { deckId } = useParams()

  return (
    <div id="sidebar-div">
      <ProfileLogo />
      <MyDecksSBTitle page={page}/>
      {deckId && <AddNewCard deckId={deckId}/>}
    </div>
  );
}

export default SideBar;
