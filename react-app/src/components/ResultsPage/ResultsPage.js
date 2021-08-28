import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function ResultsPage() {
    const results = useSelector(state => state.searchResults);

    if (!results) return <Redirect to="/" />; // if user refresh on results page go back to home

    return (
        <div>

        </div>
    );
}
