import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ResultsPage.css";
export default function ResultsPage() {
  const results = useSelector((state) => state.searchResults);
  const history = useHistory();

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };
  if (!results) return <Redirect to="/" />; // if user refresh on results page go back to home

  return (
    <div id="results-container">
      <div id="results-heading">
        <button onClick={goBack}>Back</button>
        <h1> Results</h1>
      </div>
      <ul>
        {results.length ? (
          results.map((result) => (
            <li key={result.id} className='results-li'>
              <Link to={`/deck-page/${result.id}`}>{result.title}</Link>

            </li>
          ))
        ) : (
          <h1>No results found</h1>
        )}
      </ul>
    </div>
  );
}
