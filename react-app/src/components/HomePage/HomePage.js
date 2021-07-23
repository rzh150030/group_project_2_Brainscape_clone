import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import background1 from "../../images/pexels-vlada-karpovich-4050296.jpg";
import background2 from "../../images/pexels-christina-morillo-1181676.jpg";
// import background3 from "../../images/pexels-pexels-pixabay-270408.jpg";
import background4 from "../../images/pexels-olia-danilevich-4974920.jpg";
import background5 from "../../images/programmer-5863772.jpg";
import background6 from "../../images/pexels-cottonbro-4709291.jpg";
import background7 from "../../images/pexels-cottonbro-5474032.jpg";
import background8 from "../../images/pexels-ketut-subiyanto-4474038.jpg";
import background9 from "../../images/pexels-mart-production-7605984.jpg";
import background10 from "../../images/pexels-mikhail-nilov-7988240.jpg";
import background11 from "../../images/pexels-startup-stock-photos-7374.jpg";
import background12 from "../../images/pexels-vlada-karpovich-4050350.jpg";

import Logo from "../Logo/Logo";
import "./HomePage.css";

const HomePage = () => {
  const backgroundsArr = [
    background1,
    background2,
    // background3,
    background4,
    background5,
    background6,
    background7,
    background8,
    background9,
    background10,
    background11,
    background12,
  ];
  const [bgImage, setBgImage] = useState({ url: backgroundsArr[0], index: 0 });
  const [showing, setShowing] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const bgInterval = setInterval(() => {
      if (bgImage.index < 11)
        setBgImage({
          url: backgroundsArr[bgImage.index + 1],
          index: bgImage.index + 1,
        });
      else setBgImage({ url: backgroundsArr[0], index: 0 });
    }, 7000);
    return () => {
      clearInterval(bgInterval);
    };
  }, [bgImage]);

  const loginDemoUser = async () => {
    await dispatch(
      sessionActions.login({ email: "demo@aa.io", password: "password" })
    );
  };

  const homePageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    background: `url(${bgImage.url}) center/100% no-repeat `,
    height: "100%",
    width: "100%",
    transition: "background-image 2s ease-in-out .5s",
  };

  return (
    <div style={homePageStyle} id="home-page-div">
      <div id="home-page-heading">
        <h1>Don't WAIT 'Til Sunday Night! </h1>

        <div id="home-page-subheading">
          <div id="subheading-text">
            <h1>Study with</h1>
          </div>
          <Logo />
        </div>
        <h2>Flashcards for serious programmers</h2>
        <div id="home-page-buttons-div">
          <div>
            <Link to="/decks-page">
              <button
                className="home-page-heading-buttons"
                onClick={loginDemoUser}
              >
                Try it out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
