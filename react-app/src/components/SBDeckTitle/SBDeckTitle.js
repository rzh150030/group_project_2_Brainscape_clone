import './SBDeckTitle.css';
import { NavLink } from 'react-router-dom';

const SBDeckTitle = () => {
  const temp = "foxy"

  return (
    <div id="deck-title-div" >
      <ul id="sidebar-ul">
        <li tabIndex="0">Math</li>
        <li tabIndex="0">English</li>
        <li tabIndex="0">Psychology</li>
        <li tabIndex="0">Science</li>
      </ul>
    </div>
  );
}

export default SBDeckTitle;
