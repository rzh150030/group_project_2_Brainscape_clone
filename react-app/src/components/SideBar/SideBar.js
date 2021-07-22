import './SideBar.css';
import ProfileLogo from '../ProfileLogo/ProfileLogo'
import MyDecksSBTitle from '../MyDecksSBTitle/MyDecksSBTitle'
import SBDeckTitle from '../SBDeckTitle/SBDeckTitle'
import AddNewCard from '../AddNewCard/AddNewCard';

const SideBar = ({page}) => {
  return (
    <div id="sidebar-div">
      <ProfileLogo />
      <MyDecksSBTitle page={page}/>
      <AddNewCard />
    </div>
  );
}

export default SideBar;
