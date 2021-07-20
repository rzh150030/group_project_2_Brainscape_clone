import "./MyDecksSBTitle.css";
import { useSelector } from "react-redux";

const MyDecksSBTitle = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
    {sessionUser ? <>
      <div id="outer-div-my-decks-title" className="outer-div">
        <div id="my-decks-text">
          <p>My Decks</p>
        </div>
        <div>
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <hr></hr>
    </> :
    <>
      <div id="outer-div-my-decks-title" className="outer-div">
        <div id="my-decks-text">
          <p>Decks</p>
        </div>
      </div>
      <hr></hr>
    </>}
    </>
  );
};

export default MyDecksSBTitle;
