import './AddNewCard.css'
import { useSelector } from 'react-redux'

const AddNewCard = () => {
  const sessionUser = useSelector((state) => state.session.user)

  return (
    <>
    {sessionUser &&
      (<>
      <hr></hr>
      <div id="outer-div-add-text" className="outer-div">
        <div id="add-new-card-text">
          <p>Add New Flashcard</p>
        </div>
        <div id="add-new-card-button-div">
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </>)}
    </>
  );
}

export default AddNewCard;
