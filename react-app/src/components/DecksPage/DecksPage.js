import SideBar from '../SideBar/SideBar'
import './DecksPage.css'
import DeckMainHeader from '../DeckMainHeader/DeckMainHeader';
import CardsContainer from '../CardsContainer/CardsContainer';

export const DecksPage = () => {
  const page = 'deck-page';

  return (
    <>
      <div id="decks-page-grid-container">
        <SideBar page={page}/>
        <DeckMainHeader />
        <CardsContainer />
      </div>
    </>
  );
}
