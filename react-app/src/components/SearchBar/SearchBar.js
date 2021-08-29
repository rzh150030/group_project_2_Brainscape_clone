import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { searchDecks } from "../../store/search";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const zenQuotes = useSelector((state) => state.studyQuotes);
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [quote, setQuote] = useState(
    "He who knows how to wait need make no concessions."
  );
  const [author, setAuthor] = useState("Sigmund Freud");

  useEffect(() => {
    let max = 30;
    let randomNumber = Math.floor(Math.random() * max);
    if (zenQuotes[5]) {
      setQuote(zenQuotes[randomNumber]["q"]);
      setAuthor(zenQuotes[randomNumber]["a"]);
    }
  }, [zenQuotes]);
  const search = async (e) => {
    e.preventDefault();
    let searchSuccess = await dispatch(searchDecks(searchInput));

    if (searchSuccess) history.push("/search/results");
  };

  const returnSearch = async(e) => {
    e.preventDefault()
    if(e.key === 'Enter') {
      let searchSuccess = await dispatch(searchDecks(searchInput));

      if (searchSuccess) history.push("/search/results");
    } else {
      updateSearch(e)
    }
  }
  const updateSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div id="search-bar">
        <input
          type="search"
          placeholder=" Search for knowledge..."
          onKeyUpCapture={returnSearch}
        ></input>
        <button onClick={search}>Search</button>
      </div>

      <div id="quote-container">
        <div id="quotes-div">{'"' + quote + '"'}</div>
        <div id="authors-div">-- {author}</div>
      </div>
    </>
  );
};

export default SearchBar;
