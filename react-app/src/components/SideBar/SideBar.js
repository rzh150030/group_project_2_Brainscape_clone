import './SideBar.css';
import ProfileLogo from '../ProfileLogo/ProfileLogo'
import MyDecksSBTitle from '../MyDecksSBTitle/MyDecksSBTitle'
import SBDeckTitle from '../SBDeckTitle/SBDeckTitle'

const SideBar = () => {
  return (
    <div id="sidebar-div">
      <ProfileLogo />
      <MyDecksSBTitle />
      <SBDeckTitle/>
    </div>
  );
}

export default SideBar;
