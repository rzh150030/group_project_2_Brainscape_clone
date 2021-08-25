import "./MyDecksSBTitle.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SBDeckTitle from "../SBDeckTitle/SBDeckTitle";
import Modal from "../Modal";
import AddDeckModal from "../AddDeckModal/AddDeckModal";

const MyDecksSBTitle = ({ page, modalToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const storeDecks = useSelector((state) => state.userDecks.decks);
  const [addDeck, setAddDeck] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return setTimeout(() => {
      setAddDeck(false);
    }, 300);
  }, [storeDecks]);

  const addNewDeck = (e) => {
    e.preventDefault();

    setShowModal(true);
    setAddDeck(true);
  };

  const onClose = () => {
    setShowModal(false);
    history.push("/decks-page");
  };

  if (modalToggle) {
    setShowModal(true);
  }
  return (
    <>
      {sessionUser ? (
        <>
          <div id="outer-div-my-decks-title" className="outer-div">
            <div id="my-decks-text">
              <p>My Decks</p>
            </div>
            <div>
              <button onClick={addNewDeck}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          {showModal === true && (
            <Modal onClose={onClose}>
              <AddDeckModal setShowModal={setShowModal} />
            </Modal>
          )}
          <hr></hr>
        </>
      ) : (
        <>
          <div id="outer-div-my-decks-title" className="outer-div">
            <div id="my-decks-text">
              <p>Decks</p>
            </div>
          </div>
          <hr></hr>
        </>
      )}
      <SBDeckTitle page={page} addDeck={addDeck} />
    </>
  );
};

export default MyDecksSBTitle;
