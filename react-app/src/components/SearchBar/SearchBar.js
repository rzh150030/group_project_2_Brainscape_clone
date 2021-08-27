import { useSelector } from 'react-redux'
import "./SearchBar.css";

const SearchBar = () => {

  const zenQuotes = useSelector((state) => state.studyQuotes);

  let max = 30;
  let randomNumber = Math.floor(Math.random() * max);

  // console.log(zenQuotes.length);
  // console.log(zenQuotes);

  let quote = "He who knows how to wait need make no concessions.";
  let author = "Sigmund Freud";

  if (zenQuotes[5]) {
    quote = zenQuotes[randomNumber]["q"];
    author = zenQuotes[randomNumber]["a"];
  }



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
