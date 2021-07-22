import './DeckMainHeader.css'
import logo from '../../images/logo.png'
import { Link, useParams } from 'react-router-dom';

const DeckMainHeader = () => {
  const { deckId } = useParams();

  return (
    <div id="deck-main-header-div">
      <div id="language-logo-div">
        <img src={logo} alt="language-logo"></img>
      </div>
    <div id="language-name-div">
      <h1>Python</h1>
    </div>
    <div id="study-deck-button-div">
      <Link to={`/study-deck-page/${deckId}`}>
        <button>Study Deck</button>
      </Link>
    </div>
    <div id="quote-div">
      <h1>Quote</h1>
    </div>
    </div>
  );
}

export default DeckMainHeader;
