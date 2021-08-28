import { useSelector, useDispatch } from 'react-redux';
import { searchDecks } from '../../store/search';
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const zenQuotes = useSelector((state) => state.studyQuotes);
  const dispatch = useDispatch();
  const history = useHistory();

  let max = 30;
  let randomNumber = Math.floor(Math.random() * max);

  let quote = "He who knows how to wait need make no concessions.";
  let author = "Sigmund Freud";

  if (zenQuotes[5]) {
    quote = zenQuotes[randomNumber]["q"];
    author = zenQuotes[randomNumber]["a"];
  }

  const search = (e) => {
    e.preventDefault();

    const name = e.target.value;
    let searchSuccess = dispatch(searchDecks(name));

    if (searchSuccess) history.push("/result page here");
  };


  return (
    <>
      <div id="search-bar">
        <input type="search" placeholder=" Search for knowledge..."></input>
        <button>Search</button>
      </div>
      <div>
      <div id="quotes-div">
        {'"' + quote + '"'}
      </div>
      <div id="authors-div">
        -- {author}
      </div>
      </div>
    </>
  );
};

export default SearchBar;
