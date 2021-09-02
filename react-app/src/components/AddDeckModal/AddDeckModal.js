import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as deckActions from "../../store/decks";
import "./AddDeckModal.css";
import Logo from "../Logo/Logo";

const AddDeckModal = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  const onSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(
      deckActions.addNewDeck({ title, category: categoryId, userId: sessionUser.id  })
    );
    if (data) {
      setErrors(data.errors);
    }
    if (errors.length === 0) setShowModal(false);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateCategoryId = (e) => {
    setCategoryId(e.target.value);
  };

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
        <div id="category-select-div">
          <select
            name="category"
            placeholder="Password"
            value={categoryId}
            onChange={updateCategoryId}
          >
            <option value={1}>SQL</option>
            <option value={2}>CMS</option>
            <option value={3}>Dev Ops</option>
            <option value={4}>Docker</option>
            <option value={5}>HTML</option>
            <option value={6}>JavaScript</option>
            <option value={7}>Kubernetes</option>
            <option value={8}>Linux</option>
            <option value={9}>PHP</option>
          </select>
        </div>
      </div>
      <Link to="/signup">

      </Link>
      <div id="add-deck-button-div">
        <button type="submit">add-deck</button>
      </div>
    </form>
  );
};

export default AddDeckModal;
