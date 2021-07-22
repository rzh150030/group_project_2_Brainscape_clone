import './DeckMainHeader.css'
import logo from '../../images/logo.png'

const DeckMainHeader = () => {
  return (
    <div id="deck-main-header-div">
      <div id="language-logo-div">
        <img src={logo} alt="language-logo"></img>
      </div>
    <div id="language-name-div">
      <h1>Python</h1>
    </div>
    <div id="study-deck-button-div">
      <button>Study Deck</button>
    </div>
    <div id="quote-div">
      <h1>Quote</h1>
    </div>
    </div>
  );
}

export default DeckMainHeader;
