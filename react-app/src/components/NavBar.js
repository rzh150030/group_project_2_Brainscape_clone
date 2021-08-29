import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import LogoutButton from "./auth/LogoutButton";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import Modal from "./Modal";
import "./NavBar.css";
import * as cardActions from "../store/cards";
import { resetCategoryAction } from '../store/categories';

const NavBar = ({ modalToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState("login");
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onMyDecksClick = () => {
    dispatch(resetCategoryAction());
    dispatch(cardActions.wipeCurrentCards());
  };

  useEffect(() => {}, []);

  const showForm = (e) => {
    setForm(e.target.value);
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
    setForm("");
    history.push("/");
  };

  if (modalToggle) {
    setShowModal(true);
  }
  return (
    <>
      <nav>
        <NavLink id="logo-nav-link" to="/" exact={true} activeClassName="active">
          <Logo />
        </NavLink>
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
                <button
                  id="login-button"
                  className="nav-button"
                  onClick={showForm}
                  value="login"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  id="signup-button"
                  className="nav-button"
                  onClick={showForm}
                  value="signup"
                >
                  Sign Up
                </button>
              </li>
            </>
          )}
          {sessionUser ? (
            <>
              <li>
                <NavLink
                  to="/decks-page/"
                  exact={true}
                  activeClassName="active"
                >
                  <button
                    id="decks-page-button"
                    className="nav-button"
                    onClick={onMyDecksClick}
                  >
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
      {showModal === true && form === "login" && (
        <Modal onClose={onClose}>
          <LoginForm setForm={setForm} setShowModal={setShowModal} />
        </Modal>
      )}
      {showModal === true && form === "signup" && (
        <Modal onClose={onClose}>
          <SignUpForm showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default NavBar;
