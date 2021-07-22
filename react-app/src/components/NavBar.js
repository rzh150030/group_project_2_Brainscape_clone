import React, { useState, useEffect, useDebugValue } from "react";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import LogoutButton from "./auth/LogoutButton";
import LoginForm from "./auth/LoginForm";
import SignUpForm from './auth/SignUpForm'
import Modal from "./Modal";
import "./NavBar.css";
import useModal from "../context/Modal"
import * as deckActions from '../store/decks'
import * as cardActions from '../store/cards'


const NavBar = ({ modalToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const userDecks = useSelector((state) => state.userDecks.decks);
  const history = useHistory();
  const dispatch = useDispatch();

  const onMyDecksClick = () => {
    dispatch(cardActions.wipeCurrentCards());
  }

  // let id;

  // if (sessionUser) {
  //   const checkIfDeckExists = async () => await dispatch(deckActions.getUserDecks(sessionUser.id))
  //   checkIfDeckExists()

  //     if (userDecks?.length > 0) {
  //       id = userDecks[0].id;
  //     }


  //   }
  //     else {
  //       return <Redirect to="/decks-page" />;
  //     }

  // {`/deck-page/${id}`}

  useEffect(() => {}, []);

  const showForm = (e) => {
    // e.preventDefault();
    setForm(e.target.value);
    setShowModal(true);
  };


  const onClose = () => {
    setShowModal(false);
    setForm("");
  };

  if (modalToggle) {
    setShowModal(true);
  }
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <button id="home-button" className="nav-button">
                Home
              </button>
            </NavLink>
          </li>
          {sessionUser ? null : (
            <>
              <li>
                <NavLink to="/login" exact={true} activeClassName="active">
                  <button
                    id="login-button"
                    className="nav-button"
                    onClick={showForm}
                    value="login"
                  >
                    Login
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/sign-up" exact={true} activeClassName="active">
                  <button
                    id="signup-button"
                    className="nav-button"
                    onClick={showForm}
                    value="signup"
                  >
                    Sign Up
                  </button>
                </NavLink>
              </li>
            </>
          )}
          {sessionUser ? (
            <>
              <li>
                <NavLink to="/decks-page/" exact={true} activeClassName="active">
                  <button id="decks-page-button" className="nav-button" onClick={onMyDecksClick}>
                    My Decks
                  </button>
                </NavLink>
              </li>
              <li>
                <LogoutButton />
              </li>
            </>
          ) : null}
        </ul>
      </nav>
      {showModal === true && form === "login" &&(
        <Modal onClose={onClose}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
      {showModal === true && form === "signup" &&(
        <Modal onClose={onClose}>
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default NavBar;
