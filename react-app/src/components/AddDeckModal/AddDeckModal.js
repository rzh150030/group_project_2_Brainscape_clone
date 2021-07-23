import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, Link } from "react-router-dom";
import * as deckActions from "../../store/decks"
import "./AddDeckModal.css";
import Logo from "../Logo/Logo";

const AddDeckModal = ({ setForm, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  // const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  // const userDecks = useSelector((state) => state.userDecks.decks);
  const history = useHistory()

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("title",title)
    console.log("categoryId",categoryId)
    const data = await dispatch(deckActions.addNewDeck({title, "category":categoryId}));

    if (data) {
      setErrors(data);
    }
    if (errors.length === 0) setShowModal(false);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateCategoryId = (e) => {
    setCategoryId(e.target.value);
  };

  // if (user) {
  //   if (userDecks && userDecks.length > 0) {
  //     const id = userDecks[0].id;
  //     return <Redirect to={`/deck-page/${id}`} />;
  //   }

  //   return <Redirect to="/decks-page" />;
  // }

  return (
    <form id="add-deck-form" onSubmit={onSubmit}>
      <div id="add-deck-header">
        <Logo />
      </div>
      <div id="add-deck-form-title">Enter Deck Details</div>
      {errors.length > 0 ? (
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
      ) : null}
      <div id="add-deck-title-div">
        <div>
          <label htmlFor="title">Title</label>
        </div>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={updateTitle}
        />
      </div>
      <div id="add-deck-category-div">
        <div>
          <label htmlFor="category">Category</label>
        </div>
        <select
          name="category"
          placeholder="Password"
          value={categoryId}
          onChange={updateCategoryId}
        >
          <option  value={1}>Java</option>
          <option  value={2}>Python</option>
          <option  value={3}>CMS</option>
          <option  value={4}>DevOps</option>
          <option  value={5}>Docker</option>
          <option  value={6}>Html</option>
          <option  value={7}>JavaScript</option>
          <option  value={8}>Kubernetes</option>
          <option  value={9}>Linux</option>
          <option  value={10}>PHP</option>
        </select>
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
      <div id="add-deck-button-div">
        <button type="submit">add-deck</button>
      </div>
    </form>
  );
};

export default AddDeckModal;
