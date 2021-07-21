import "./AddNewCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddNewCard = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      {sessionUser && (
        <>
          <hr></hr>
          <div id="outer-div-add-text" className="outer-div">
            <div id="add-new-card-text">
              <p>Add/Edit Flashcards</p>
            </div>
            <div id="add-new-card-button-div">
              <Link to="/edit-deck">
                <button>
                  <i className="fas fa-plus"></i>
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddNewCard;
