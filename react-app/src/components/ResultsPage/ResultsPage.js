import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export default function ResultsPage() {
    const results = useSelector(state => state.searchResults);

    if (!results) return <Redirect to="/" />; // if user refresh on results page go back to home

    return (
        <div>
            <ul>
                {results.map(result => (
                    <li key={result.id}>
                        <Link to={`/deck-page/${result.id}`}>{result.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
