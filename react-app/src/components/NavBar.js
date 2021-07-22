import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import LogoutButton from "./auth/LogoutButton";
import LoginForm from "./auth/LoginForm";
import SignUpForm from './auth/SignUpForm'
import Modal from "./Modal";
import "./NavBar.css";

const NavBar = ({ modalToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const [formModal, setFormModal] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  // useEffect(() => {}, [showModal,formModal]);

  const showFormModal = (e) => {
    e.preventDefault();
    setFormModal(e.target.value);
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
    setFormModal("");
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
                    onClick={showFormModal}
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
                    onClick={showFormModal}
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
                <NavLink to="/decks-page" exact={true} activeClassName="active">
                  <button id="decks-page-button" className="nav-button">
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
      {showModal === true && formModal === "login" &&(
        <Modal onClose={onClose}>
          <LoginForm />
        </Modal>
      )}
      {showModal === true && formModal === "signup" &&(
        <Modal onClose={onClose}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
};

export default NavBar;
