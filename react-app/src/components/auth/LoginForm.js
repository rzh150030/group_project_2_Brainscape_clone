import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, Link } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css";
import Logo from "../Logo/Logo";

const LoginForm = ({ setForm, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [demoUser, setDemoUser] = useState(false);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const userDecks = useSelector((state) => state.userDecks.decks);

  const onLogin = async (e) => {
    e.preventDefault();

    const data = await dispatch(login(email, password));

    console.log(email,password)

    if (data) {
      setErrors(data);
    }
    if(errors.length === 0)setShowModal(false);
  };

  const demoLogin = async() => {
    setDemoUser(true)
    setEmail("demo@aa.io")
    setPassword("password")

    await dispatch(login(email, password))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    if (userDecks && userDecks.length > 0) {
      const id = userDecks[0].id;
      return <Redirect to={`/deck-page/${id}`} />;
    }

    return <Redirect to="/decks-page" />;
  }

  return (
    <form id="login-form" onSubmit={onLogin}>
      <div id="login-header">
        <Logo />
      </div>
      <div id="login-form-title">
        Welcome Back!
      </div>
      {errors.length > 0 ? (
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
      ) : null}
      <div id="login-email-div">
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div id="login-password-div">
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <Link to="/signup">
        <p
          onClick={() => {
            setForm("signup");
          }}
        >
          Don't have an account? Click here to sign up!
        </p>
      </Link>
      <div id="login-button-div">
        <button type="submit">Login</button>
      </div>
      <div id="demo-button-div">
        <button onClick={demoLogin} type="submit">Demo</button>
      </div>
    </form>
  );
};

export default LoginForm;
