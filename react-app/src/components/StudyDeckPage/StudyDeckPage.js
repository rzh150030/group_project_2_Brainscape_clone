import './StudyDeckPage.css'
import SideBar from '../SideBar/SideBar'
import DeckMainHeader from '../DeckMainHeader/DeckMainHeader'


const StudyDeckPage = () => {
  const page = 'study-deck-page';


  return (
    <div id="study-page-outer-main-div">
      <SideBar page={page} />
      <DeckMainHeader />
      <div id="study-card-container">
        <h1>Testing</h1>
      </div>
    </div>
  );
}

export default StudyDeckPage;
