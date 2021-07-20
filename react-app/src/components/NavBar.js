import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import { useSelector } from "react-redux";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
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
                <button id="login-button" className="nav-button">
                  Login
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                <button id="signup-button" className="nav-button">
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
  );
};

export default NavBar;
