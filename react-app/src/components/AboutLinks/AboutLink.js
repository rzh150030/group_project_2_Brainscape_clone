import "./AboutLink.css";

const AboutLink = () => {


    return (
        <footer className="about-links">
            <p className="author-credits">Developed by:
                <a className="authors" href="https://github.com/rzh150030">Richard Huang
                    <div className="underline"></div>
                </a>
                <a className="authors" href="https://github.com/justin-by">Justin Sung</a>
                <a className="authors" href="https://github.com/johnshivers3">John Shivers</a>
                <a className="authors" href="https://github.com/goosey-goose">Gustavo Miranda</a>
                <a hidden className="authors" href="https://github.com/rzh150030">Richard Huang</a>
                <a hidden className="authors" href="https://github.com/justin-by">Justin Sung</a>
                <a hidden className="authors" href="https://github.com/johnshivers3">John Shivers</a>
                <a hidden className="authors" href="https://github.com/goosey-goose">Gustavo Miranda</a>
            </p>
        </footer>
    );
};

export default AboutLink;
