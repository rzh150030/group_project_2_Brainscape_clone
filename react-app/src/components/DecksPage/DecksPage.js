import SideBar from '../SideBar/SideBar'
import './DecksPage.css'
import DeckMainHeader from '../DeckMainHeader/DeckMainHeader';
import CardsContainer from '../CardsContainer/CardsContainer';
import { useSelector } from 'react-redux';

export const DecksPage = () => {
  const sessionUser = useSelector((state) => state.session.user)
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
