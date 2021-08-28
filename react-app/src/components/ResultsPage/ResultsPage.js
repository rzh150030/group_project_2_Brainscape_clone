import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function ResultsPage() {
    const results = useSelector(state => state.searchResults);

    useEffect(() => { // if user refresh on results page go back to home
        if (!results) return <Redirect to="/" />;
    }, [results])


    return (
        <div>
            
        </div>
    );
}
